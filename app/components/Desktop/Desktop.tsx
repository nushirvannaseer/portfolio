"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Window from "./Window";
import Dock from "./Dock";

// We'll pass the children sections here
interface DesktopProps {
  childrenMap: { [key: string]: React.ReactNode };
}

const Desktop = ({ childrenMap }: DesktopProps) => {
  const [windows, setWindows] = useState([
    { id: "about", title: "User Profile // About", isOpen: true },
    { id: "experience", title: "Experience // Career Log", isOpen: false },
    { id: "projects", title: "Project Archive // Repos", isOpen: false },
    { id: "skills", title: "Tech Stack // Skill Matrix", isOpen: false },
    { id: "education", title: "Academic Record", isOpen: false },
    { id: "assistant", title: "AI Assistant // Neural Core", isOpen: false },
    {
      id: "chess",
      title: "Chess // vs Nushirvan (1300 Elo)",
      isOpen: false,
    },
  ]);

  const [activeId, setActiveId] = useState("about");

  const openWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isOpen: true } : w)),
    );
    setActiveId(id);
  };

  const closeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isOpen: false } : w)),
    );
  };

  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isOpen: false } : w)),
    );
  };

  useEffect(() => {
    const handleOpenWindow = (e: any) => {
      openWindow(e.detail);
    };
    window.addEventListener("open-window", handleOpenWindow);
    return () => window.removeEventListener("open-window", handleOpenWindow);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-zinc-950 font-sans">
      {/* Chroma Key Filter to remove the green background from the catto */}
      <svg width="0" height="0" className="absolute">
        <filter
          id="hackerCatFilter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          {/* 1. Key out the green background */}
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0.5 -1.5 0.5 1 0"
            result="KEYED"
          />
          {/* 2. Create the outline based on the keyed-out alpha */}
          <feMorphology
            in="KEYED"
            result="DILATED"
            operator="dilate"
            radius="2"
          />
          <feFlood
            floodColor="rgb(var(--accent-color))"
            floodOpacity="1"
            result="FLOOD"
          />
          <feComposite
            in="FLOOD"
            in2="DILATED"
            operator="in"
            result="OUTLINE"
          />

          {/* 3. Merge outline and the keyed cat */}
          <feMerge>
            <feMergeNode in="OUTLINE" />
            <feMergeNode in="KEYED" />
          </feMerge>
        </filter>
      </svg>

      {/* Background Cat */}
      <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none select-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <motion.img
            src="/catto.png"
            alt="Hacker Cat"
            animate={{
              y: [0, -4, 0],
              rotate: [0, -1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[450px] h-auto"
            style={{
              filter:
                "url(#hackerCatFilter) drop-shadow(0 0 40px rgba(var(--accent-color), 0.3))",
            }}
          />
          <div className="absolute top-4 -right-20 px-4 py-2 bg-zinc-900/90 border border-accent/30 rounded-2xl text-[10px] text-accent font-mono animate-bounce backdrop-blur-md shadow-2xl">
            tippy tappy...
          </div>
        </motion.div>
      </div>

      <div className="relative w-full h-full p-4">
        <AnimatePresence>
          {windows.map((win) => (
            <Window
              key={win.id}
              id={win.id}
              title={win.title}
              isOpen={win.isOpen}
              activeId={activeId}
              onFocus={() => setActiveId(win.id)}
              onClose={() => closeWindow(win.id)}
              onMinimize={() => minimizeWindow(win.id)}
            >
              {childrenMap[win.id]}
            </Window>
          ))}
        </AnimatePresence>
      </div>

      <Dock windows={windows} onOpen={openWindow} activeId={activeId} />
    </div>
  );
};

export default Desktop;
