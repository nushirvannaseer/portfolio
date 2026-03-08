import { Chess } from "chess.js";

const PIECE_VALUES: Record<string, number> = {
  p: 10,
  n: 30,
  b: 30,
  r: 50,
  q: 90,
  k: 900,
};

const PAWN_PST = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [50, 50, 50, 50, 50, 50, 50, 50],
  [10, 10, 20, 30, 30, 20, 10, 10],
  [5, 5, 10, 25, 25, 10, 5, 5],
  [0, 0, 0, 20, 20, 0, 0, 0],
  [5, -5, -10, 0, 0, -10, -5, 5],
  [5, 10, 10, -20, -20, 10, 10, 5],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const KNIGHT_PST = [
  [-50, -40, -30, -30, -30, -30, -40, -50],
  [-40, -20, 0, 0, 0, 0, -20, -40],
  [-30, 0, 10, 15, 15, 10, 0, -30],
  [-30, 5, 15, 20, 20, 15, 5, -30],
  [-30, 0, 15, 20, 20, 15, 0, -30],
  [-30, 5, 10, 15, 15, 10, 5, -30],
  [-40, -20, 0, 5, 5, 0, -20, -40],
  [-50, -40, -30, -30, -30, -30, -40, -50],
];

const evaluateBoard = (game: Chess): number => {
  let totalEvaluation = 0;
  const board = game.board();

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const piece = board[i][j];
      if (piece) {
        let val = PIECE_VALUES[piece.type] || 0;
        if (piece.type === "p") {
          val +=
            (piece.color === "w" ? PAWN_PST[i][j] : PAWN_PST[7 - i][j]) / 10;
        } else if (piece.type === "n") {
          val +=
            (piece.color === "w" ? KNIGHT_PST[i][j] : KNIGHT_PST[7 - i][j]) /
            10;
        }
        totalEvaluation += piece.color === "w" ? val : -val;
      }
    }
  }
  return totalEvaluation;
};

const orderMoves = (moves: string[]) => {
  return moves.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;

    // Prioritize checkmates, promotions, checks, and captures to maximize alpha-beta pruning
    if (a.includes("#")) scoreA += 1000;
    if (a.includes("=")) scoreA += 900;
    if (a.includes("+")) scoreA += 800;
    if (a.includes("x")) scoreA += 700;

    if (b.includes("#")) scoreB += 1000;
    if (b.includes("=")) scoreB += 900;
    if (b.includes("+")) scoreB += 800;
    if (b.includes("x")) scoreB += 700;

    return scoreB - scoreA;
  });
};

export const minimax = (
  game: Chess,
  depth: number,
  alpha: number,
  beta: number,
  isMaximizingPlayer: boolean,
): number => {
  if (depth === 0) return evaluateBoard(game);

  const moves = orderMoves(game.moves());
  if (moves.length === 0) {
    if (game.isCheckmate()) return isMaximizingPlayer ? -10000 : 10000;
    return 0;
  }

  if (isMaximizingPlayer) {
    let bestEval = -10000;
    for (const move of moves) {
      game.move(move);
      bestEval = Math.max(
        bestEval,
        minimax(game, depth - 1, alpha, beta, false),
      );
      game.undo();
      alpha = Math.max(alpha, bestEval);
      if (beta <= alpha) break;
    }
    return bestEval;
  } else {
    let bestEval = 10000;
    for (const move of moves) {
      game.move(move);
      bestEval = Math.min(
        bestEval,
        minimax(game, depth - 1, alpha, beta, true),
      );
      game.undo();
      beta = Math.min(beta, bestEval);
      if (beta <= alpha) break;
    }
    return bestEval;
  }
};

export const getBestMove = (game: Chess, depth: number = 2): string | null => {
  const possibleMoves = orderMoves(game.moves());
  if (possibleMoves.length === 0) return null;

  let bestMove = null;
  const isWhite = game.turn() === "w";
  let bestValue = isWhite ? -10000 : 10000;

  for (const move of possibleMoves) {
    game.move(move);
    const boardValue = minimax(game, depth, -10000, 10000, !isWhite);
    game.undo();

    if (isWhite) {
      if (boardValue > bestValue) {
        bestValue = boardValue;
        bestMove = move;
      }
    } else {
      if (boardValue < bestValue) {
        bestValue = boardValue;
        bestMove = move;
      }
    }
  }

  return bestMove;
};
