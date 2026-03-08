"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  Code2,
  GraduationCap,
  MessageSquare,
  Bot,
} from "lucide-react";

interface DockProps {
  windows: any[];
  onOpen: (id: string) => void;
  activeId: string;
}

const Dock = ({ windows, onOpen, activeId }: DockProps) => {
  const items = [
    { id: "about", icon: <User size={20} />, label: "About" },
    { id: "experience", icon: <Briefcase size={20} />, label: "Career" },
    { id: "projects", icon: <Code2 size={20} />, label: "Projects" },
    { id: "skills", icon: <MessageSquare size={20} />, label: "Skills" },
    { id: "education", icon: <GraduationCap size={20} />, label: "Academic" },
    { id: "assistant", icon: <Bot size={20} />, label: "AI Assistant" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60]">
      <div className="flex items-center gap-2 p-2 rounded-2xl border border-white/10 bg-zinc-950/40 backdrop-blur-3xl shadow-2xl">
        {items.map((item) => {
          const win = windows.find((w) => w.id === item.id);
          const isOpen = win?.isOpen;
          const isActive = activeId === item.id;

          return (
            <motion.button
              key={item.id}
              whileHover={{ y: -6, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpen(item.id)}
              className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? "bg-accent/20 border-accent/40 text-accent"
                  : "bg-white/5 border border-white/5 text-zinc-500 hover:text-zinc-100 hover:bg-white/10"
              }`}
            >
              {item.icon}

              {/* Active Indicator Dot */}
              {isOpen && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent shadow-[0_0_8px_rgba(var(--accent-color),1)]" />
              )}

              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-zinc-900 border border-white/10 text-[10px] font-mono text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {item.label}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default Dock;
