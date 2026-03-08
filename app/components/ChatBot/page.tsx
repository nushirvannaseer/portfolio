"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import ChatIcon from "@/app/assets/icons/Chat.svg";
import CloseIcon from "@/app/assets/icons/Close.svg";
import Image from "next/image";
import { askQuestion } from "@/app/Gemini/Gemini";
import { motion } from "framer-motion";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRun = useCallback(() => {
    if (currentQuestion.trim()) {
      const q = currentQuestion;
      setQuestions((prev) => [...prev, q]);
      setLoading(true);
      setCurrentQuestion("");

      askQuestion(q)
        .then((answer) => {
          setLoading(false);
          setAnswers((prev) => [...prev, answer]);
          scrollToBottom();
        })
        .catch((e) => {
          setLoading(false);
          setAnswers((prev) => [
            ...prev,
            "Connection error. Please try again.",
          ]);
          scrollToBottom();
        });
    }
  }, [currentQuestion]);

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleRun();
      }
    };

    if (showChatbot) {
      document.addEventListener("keydown", keyHandler);
    }

    return () => {
      document.removeEventListener("keydown", keyHandler);
    };
  }, [handleRun, showChatbot]);

  useEffect(scrollToBottom, [questions, answers, loading]);

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed left-6 bottom-6 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowChatbot(!showChatbot)}
          className={`flex items-center justify-center w-12 h-12 rounded-full border border-white/10 shadow-2xl transition-all duration-300 ${
            showChatbot
              ? "bg-zinc-800 rotate-90"
              : "bg-accent hover:opacity-90 shadow-accent/20"
          }`}
        >
          <Image
            src={showChatbot ? CloseIcon : ChatIcon}
            width={20}
            height={20}
            alt="Toggle Chat"
            className={showChatbot ? "brightness-200" : "brightness-0 invert"}
          />
        </motion.button>
      </div>

      {showChatbot && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed left-6 bottom-24 z-50 w-[90vw] md:w-[400px] h-[500px] rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col font-mono"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                Assistant Interface
              </span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {questions.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 opacity-50">
                <span className="text-xs text-accent italic px-8">
                  {`System Ready. Inquire about nushirvan's expertise, stack, or availability.`}
                </span>
              </div>
            )}

            {questions.map((q, i) => (
              <div
                key={i}
                className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300"
              >
                <div className="flex gap-2 text-[11px]">
                  <span className="text-zinc-500">guest:</span>
                  <span className="text-zinc-100">{q}</span>
                </div>
                {answers[i] ? (
                  <div className="flex gap-2 text-[11px] bg-accent/5 p-2 rounded-lg border border-accent/10">
                    <span className="text-accent shrink-0">sys:</span>
                    <span className="text-zinc-300 leading-relaxed">
                      {answers[i]}
                    </span>
                  </div>
                ) : (
                  loading &&
                  i === questions.length - 1 && (
                    <div className="flex gap-2 text-[11px] italic text-zinc-600">
                      <span className="animate-pulse">Analyzing...</span>
                    </div>
                  )
                )}
              </div>
            ))}
            <div ref={endOfMessagesRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white/5 border-t border-white/5">
            <div className="flex items-center gap-2 text-[11px]">
              <span className="text-accent break-keep">~</span>
              <input
                autoFocus
                className="flex-1 bg-transparent border-none outline-none text-zinc-100 placeholder:text-zinc-700 caret-accent"
                value={currentQuestion}
                onChange={(e) => setCurrentQuestion(e.target.value)}
                placeholder="Submit query..."
                onKeyDown={(e) => e.key === "Enter" && handleRun()}
              />
              <span className="text-[10px] text-zinc-600">ENTER</span>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Chatbot;
