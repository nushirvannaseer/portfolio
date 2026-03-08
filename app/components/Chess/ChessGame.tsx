"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Chess, Square } from "chess.js";
import { getBestMove } from "./ChessEngine";
import { motion, AnimatePresence } from "framer-motion";

const PIECES: Record<string, string> = {
  wP: "♟\uFE0E",
  wN: "♞\uFE0E",
  wB: "♝\uFE0E",
  wR: "♜\uFE0E",
  wQ: "♛\uFE0E",
  wK: "♚\uFE0E",
  bP: "♟\uFE0E",
  bN: "♞\uFE0E",
  bB: "♝\uFE0E",
  bR: "♜\uFE0E",
  bQ: "♛\uFE0E",
  bK: "♚\uFE0E",
};

type TimeControlMode = "10+0" | "3+0" | "1+1";

const TIME_SETTINGS = {
  "10+0": { label: "10 min", time: 10 * 60, increment: 0, depth: 3 },
  "3+0": { label: "3 min", time: 3 * 60, increment: 0, depth: 2 },
  "1+1": { label: "1 min + 1", time: 60, increment: 1, depth: 2 },
};

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [validMoves, setValidMoves] = useState<string[]>([]);
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [isMono, setIsMono] = useState(false);

  const [timeControl, setTimeControl] = useState<TimeControlMode>("10+0");
  const [whiteTime, setWhiteTime] = useState(TIME_SETTINGS["10+0"].time);
  const [blackTime, setBlackTime] = useState(TIME_SETTINGS["10+0"].time);
  const [isTimeOut, setIsTimeOut] = useState<"w" | "b" | null>(null);

  useEffect(() => {
    if (game.isGameOver() || isTimeOut || game.history().length === 0) return;

    const interval = setInterval(() => {
      if (game.turn() === "w") {
        setWhiteTime((prev) => {
          if (prev <= 1) {
            setIsTimeOut("w");
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      } else {
        setBlackTime((prev) => {
          if (prev <= 1) {
            setIsTimeOut("b");
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [game, isTimeOut]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const checkTheme = () => {
      const accent = localStorage.getItem("nush-accent-color");
      setIsMono(accent === "255, 255, 255");
    };

    checkTheme();
    window.addEventListener("storage", checkTheme);
    // Also listen for our custom theme event if we had one, but storage is fine for across tabs
    // Actually our toggle custom event is for desktop mode.
    // We can just poll or use a simpler approach.
    // For now, let's just use the initial check.
    const interval = setInterval(checkTheme, 1000);

    return () => {
      window.removeEventListener("storage", checkTheme);
      clearInterval(interval);
    };
  }, []);

  const makeMove = useCallback(
    (move: any) => {
      try {
        const result = game.move(move);
        if (result) {
          const gameCopy = new Chess();
          gameCopy.loadPgn(game.pgn());
          setGame(gameCopy);
          setMoveHistory(gameCopy.history());

          const inc = TIME_SETTINGS[timeControl].increment;
          if (inc > 0 && gameCopy.history().length > 0) {
            if (gameCopy.turn() === "b") {
              setWhiteTime((t) => t + inc);
            } else {
              setBlackTime((t) => t + inc);
            }
          }

          return true;
        }
      } catch (e) {
        return false;
      }
      return false;
    },
    [game, timeControl],
  );

  const onSquareClick = (square: Square) => {
    // If we have a selected square, try to move
    if (selectedSquare) {
      const move = makeMove({
        from: selectedSquare,
        to: square,
        promotion: "q", // always promote to queen for simplicity
      });

      setSelectedSquare(null);
      setValidMoves([]);

      if (move) {
        // Trigger AI move
        setIsAiThinking(true);
        setTimeout(() => {
          const startTime = Date.now();
          const aiMove = getBestMove(game, TIME_SETTINGS[timeControl].depth);
          const elapsedSecs = Math.floor((Date.now() - startTime) / 1000);

          if (elapsedSecs > 0) {
            setBlackTime((prev) => {
              const newTime = prev - elapsedSecs;
              if (newTime <= 0) {
                setIsTimeOut("b");
                return 0;
              }
              return newTime;
            });
          }

          if (aiMove) {
            makeMove(aiMove);
          }
          setIsAiThinking(false);
        }, 500);
      }
    } else {
      // Select piece
      const piece = game.get(square);
      if (piece && piece.color === game.turn()) {
        setSelectedSquare(square);
        const moves = game.moves({ square, verbose: true });
        setValidMoves(moves.map((m) => m.to));
      }
    }
  };

  const renderSquare = (i: number) => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const isDark = (x + y) % 2 === 1;
    const squareName = (String.fromCharCode(97 + x) + (8 - y)) as Square;
    const piece = game.get(squareName);
    const isSelected = selectedSquare === squareName;
    const isValidTarget = validMoves.includes(squareName);

    return (
      <div
        key={i}
        onClick={() => onSquareClick(squareName)}
        className={`relative w-full h-full flex items-center justify-center cursor-pointer text-[40px] md:text-5xl select-none transition-all duration-200
          ${isDark ? (isMono ? "bg-zinc-500" : "bg-accent/20") : "bg-white"}
          ${isSelected ? "bg-accent/40 !ring-2 !ring-inset !ring-accent" : ""}
          hover:opacity-90 active:scale-95
        `}
      >
        {/* Rank/File Indicators */}
        {x === 0 && (
          <span
            className={`absolute top-0.5 left-0.5 text-[8px] font-bold font-mono ${isDark ? "text-accent" : "text-zinc-400"}`}
          >
            {8 - y}
          </span>
        )}
        {y === 7 && (
          <span
            className={`absolute bottom-0.5 right-0.5 text-[8px] font-bold font-mono ${isDark ? "text-accent" : "text-zinc-400"}`}
          >
            {String.fromCharCode(97 + x)}
          </span>
        )}

        {/* Valid Move Indicator */}
        {isValidTarget && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`
              ${piece ? "w-[90%] h-[90%] border-4 border-accent/30 rounded-full" : "w-3 h-3 bg-accent/40 rounded-full"}
            `}
            />
          </div>
        )}

        {piece && (
          <motion.span
            layoutId={squareName}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`
                relative z-10
                drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]
                ${
                  piece.color === "w"
                    ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] [-webkit-text-stroke:1px_#18181b]"
                    : isMono
                      ? "text-zinc-950 drop-shadow-[0_0_4px_rgba(255,255,255,0.7)] [-webkit-text-stroke:1px_rgba(255,255,255,0.1)]"
                      : "text-accent brightness-75 drop-shadow-[0_0_12px_rgba(var(--accent-color),0.4)] [-webkit-text-stroke:1px_rgba(0,0,0,0.5)]"
                }
            `}
          >
            {PIECES[piece.color + piece.type.toUpperCase()]}
          </motion.span>
        )}
      </div>
    );
  };

  const resetGame = (mode?: TimeControlMode) => {
    const newMode = mode || timeControl;
    if (mode) setTimeControl(mode);
    setGame(new Chess());
    setSelectedSquare(null);
    setValidMoves([]);
    setMoveHistory([]);
    setWhiteTime(TIME_SETTINGS[newMode].time);
    setBlackTime(TIME_SETTINGS[newMode].time);
    setIsTimeOut(null);
  };

  const renderMoveHistory = () => {
    const rounds = [];
    for (let i = 0; i < moveHistory.length; i += 2) {
      rounds.push({
        num: Math.floor(i / 2) + 1,
        white: moveHistory[i],
        black: moveHistory[i + 1] || "",
      });
    }

    return (
      <div className="space-y-1">
        {rounds.length === 0 && (
          <span className="text-[10px] font-mono text-zinc-700 italic">
            No moves yet...
          </span>
        )}
        {rounds.map((round) => (
          <div
            key={round.num}
            className="grid grid-cols-[30px_1fr_1fr] gap-2 items-center py-1 border-b border-white/5 last:border-0"
          >
            <span className="text-[10px] font-mono text-zinc-600">
              {round.num}.
            </span>
            <span className="text-[11px] font-mono text-zinc-300 bg-white/5 px-2 py-0.5 rounded">
              {round.white}
            </span>
            {round.black && (
              <span className="text-[11px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">
                {round.black}
              </span>
            )}
          </div>
        ))}
      </div>
    );
  };

  const getGameOverMessage = () => {
    if (isTimeOut === "w") return "Time Out! Nushirvan wins!";
    if (isTimeOut === "b") return "Time Out! You win!";
    if (game.isCheckmate())
      return `Checkmate! ${game.turn() === "w" ? "Nushirvan" : "You"} wins!`;
    if (game.isStalemate()) return "Draw by Stalemate!";
    if (game.isThreefoldRepetition()) return "Draw by Repetition!";
    if (game.isInsufficientMaterial()) return "Draw by Insufficient Material!";
    if (game.isDraw()) return "Game Drawn!";
    return "Game Over";
  };

  const getCapturedPieces = () => {
    const board = game.board();
    const currentCounts = {
      p: 0,
      n: 0,
      b: 0,
      r: 0,
      q: 0,
      P: 0,
      N: 0,
      B: 0,
      R: 0,
      Q: 0,
    };
    board.forEach((row) =>
      row.forEach((piece) => {
        if (piece) {
          const key =
            piece.color === "w" ? piece.type.toUpperCase() : piece.type;
          currentCounts[key as keyof typeof currentCounts]++;
        }
      }),
    );

    const starting = {
      p: 8,
      n: 2,
      b: 2,
      r: 2,
      q: 1,
      P: 8,
      N: 2,
      B: 2,
      R: 2,
      Q: 1,
    };

    const capW: string[] = []; // pieces white has captured (black pieces)
    ["q", "r", "b", "n", "p"].forEach((type) => {
      const missing =
        starting[type as keyof typeof starting] -
        currentCounts[type as keyof typeof currentCounts];
      for (let i = 0; i < missing; i++) capW.push("b" + type.toUpperCase());
    });

    const capB: string[] = []; // pieces black has captured (white pieces)
    ["Q", "R", "B", "N", "P"].forEach((type) => {
      const missing =
        starting[type as keyof typeof starting] -
        currentCounts[type as keyof typeof currentCounts];
      for (let i = 0; i < missing; i++) capB.push("w" + type.toUpperCase());
    });

    return { capW, capB };
  };

  const { capW, capB } = getCapturedPieces();

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-start md:justify-center gap-8 p-0 md:p-4 w-full min-h-full max-w-4xl mx-auto">
      <div className="flex flex-col gap-3 w-full max-w-[400px]">
        {/* Nushirvan (Black) Profile */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center font-bold text-accent">
              N
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-zinc-200 text-sm font-bold flex items-center gap-2">
                Nushirvan
                <a
                  href="https://www.chess.com/member/nushirvannaseer"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] bg-[#769656] text-white px-1.5 py-0.5 rounded flex items-center gap-1 hover:brightness-110 transition-all font-sans font-medium"
                >
                  Chess.com
                </a>
              </span>
              <span className="text-zinc-500 text-xs font-mono mt-0.5">
                1300 ELO (AI)
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1">
              {capB.map((p, i) => (
                <span
                  key={`b-${i}`}
                  className={`text-2xl drop-shadow-md text-white [-webkit-text-stroke:1px_#18181b]`}
                >
                  {PIECES[p]}
                </span>
              ))}
            </div>
            <div
              className={`font-mono px-2 py-0.5 rounded text-sm min-w-[50px] text-center ${game.turn() === "b" && !game.isGameOver() && !isTimeOut ? "bg-accent/20 text-accent font-bold ring-1 ring-accent" : "bg-zinc-800/50 text-zinc-500"}`}
            >
              {formatTime(blackTime)}
            </div>
          </div>
        </div>

        {/* Board */}
        <div className="w-full aspect-square border-4 border-zinc-800 rounded-lg overflow-hidden grid grid-cols-8 grid-rows-8 shadow-2xl relative shrink-0">
          {Array.from({ length: 64 }).map((_, i) => renderSquare(i))}

          {isAiThinking && (
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center z-50">
              <div className="px-4 py-2 bg-zinc-900 border border-accent/20 rounded-full text-[10px] font-mono text-accent animate-pulse uppercase tracking-widest">
                Nushirvan is thinking...
              </div>
            </div>
          )}
        </div>

        {/* You (White) Profile */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center font-bold text-zinc-300">
              U
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-zinc-200 text-sm font-bold">You</span>
              <span className="text-zinc-500 text-xs font-mono mt-0.5">
                Challenger
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1">
              {capW.map((p, i) => (
                <span
                  key={`w-${i}`}
                  className={`text-2xl drop-shadow-md ${isMono ? "text-zinc-950 [-webkit-text-stroke:1px_rgba(255,255,255,0.1)]" : "text-accent brightness-75 [-webkit-text-stroke:1px_rgba(0,0,0,0.5)]"}`}
                >
                  {PIECES[p]}
                </span>
              ))}
            </div>
            <div
              className={`font-mono px-2 py-0.5 rounded text-sm min-w-[50px] text-center ${game.turn() === "w" && !game.isGameOver() && !isTimeOut ? "bg-accent/20 text-accent font-bold ring-1 ring-accent" : "bg-zinc-800/50 text-zinc-500"}`}
            >
              {formatTime(whiteTime)}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[250px] flex flex-col gap-4 border border-zinc-800/50 bg-zinc-900/30 p-4 rounded-xl shadow-lg h-[220px] md:h-[500px] shrink-0">
        <div className="flex flex-col gap-2 pb-2 border-b border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${game.turn() === "w" ? "bg-accent pulse" : "bg-zinc-600"}`}
              />
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                {game.turn() === "w" ? "Your Turn" : "Nush's Turn"}
              </span>
            </div>
            <button
              onClick={() => resetGame()}
              className="text-[10px] font-mono text-zinc-500 hover:text-accent uppercase tracking-widest transition-colors"
            >
              Reset
            </button>
          </div>
          <div className="flex gap-2 w-full mt-2">
            {(Object.entries(TIME_SETTINGS) as [TimeControlMode, any][]).map(
              ([mode, config]) => (
                <button
                  key={mode}
                  onClick={() => resetGame(mode)}
                  className={`flex-1 text-[9px] font-mono py-1 rounded border transition-colors ${
                    timeControl === mode
                      ? "bg-accent/20 border-accent/50 text-accent"
                      : "bg-zinc-800/30 border-white/5 text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {config.label}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {renderMoveHistory()}
        </div>

        {(game.isGameOver() || isTimeOut) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-3 bg-accent/10 border border-accent/30 rounded-lg text-center mt-auto shadow-sm shadow-accent/5"
          >
            <h3 className="text-xs font-bold text-accent uppercase tracking-widest">
              Game Over
            </h3>
            <p className="text-[10px] font-mono text-zinc-400 mt-1 leading-relaxed">
              {getGameOverMessage()}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ChessGame;
