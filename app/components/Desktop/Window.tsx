"use client";

import React, { ReactNode } from "react";
import { motion, useDragControls } from "framer-motion";
import { X, Minus, Square } from "lucide-react";

interface WindowProps {
  id: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  children: ReactNode;
  activeId: string;
  onFocus: () => void;
}

const DesktopWindow = ({
  title,
  isOpen,
  onClose,
  onMinimize,
  children,
  activeId,
  id,
  onFocus,
}: WindowProps) => {
  const dragControls = useDragControls();

  if (!isOpen) return null;

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      onPointerDown={onFocus}
      style={{
        zIndex: activeId === id ? 50 : 40,
        position: "absolute",
        left: "15%",
        top: "10%",
      }}
      className="w-[70vw] h-[75vh] min-w-[300px] min-h-[300px] rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden resize select-none"
    >
      {/* Title Bar */}
      <div
        onPointerDown={(e) => dragControls.start(e)}
        className="h-10 bg-white/5 border-b border-white/5 flex items-center justify-between px-4 cursor-grab active:cursor-grabbing shrink-0"
      >
        <div className="flex items-center gap-2 pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(var(--accent-color),1)]" />
          <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onMinimize}
            className="p-1 hover:bg-white/5 rounded transition-colors text-zinc-500 hover:text-zinc-100"
          >
            <Minus size={14} />
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:bg-red-500/20 hover:text-red-400 rounded transition-all text-zinc-500"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
        {children}
      </div>
    </motion.div>
  );
};

export default DesktopWindow;
