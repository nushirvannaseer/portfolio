"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// LEGACY — skill cards (kept for reference)
// interface SkillCategory {
//   title: string;
//   description: string;
//   icons: string[];
// }

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  description: string[];
}

interface OmnitrixProps {
  items: ExperienceItem[];
}

const Omnitrix = ({ items }: OmnitrixProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDialUp, setIsDialUp] = useState(false);

  const active = items[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const toggleDial = () => setIsDialUp(!isDialUp);

  return (
    <div className="relative flex flex-col items-center justify-center gap-10 py-10 w-full min-h-[500px] perspective-[1000px]">
      {/* Hologram & Beam (Only visible when active) */}
      <AnimatePresence>
        {isDialUp && (
          <motion.div
            key="hologram-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 w-full flex flex-col items-center justify-start pt-4 pointer-events-none z-20"
          >
            {/* Hologram Card Area */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              className="w-full max-w-sm h-72 p-5 bg-accent/10 border border-accent/40 rounded-xl shadow-[0_0_40px_rgba(var(--accent-color),0.4)] backdrop-blur-md flex flex-col items-start justify-start text-left overflow-hidden pointer-events-auto"
            >
              {/* One-shot scan line — sweeps top to bottom, reveals card content */}
              <motion.div
                key={`scanline-${activeIndex}`}
                className="absolute inset-x-0 h-0.5 bg-accent z-20 pointer-events-none shadow-[0_0_12px_rgba(var(--accent-color),1)]"
                style={{ top: 0 }}
                animate={{ top: "100%", opacity: [1, 1, 0] }}
                transition={{
                  duration: 0.7,
                  ease: "easeIn",
                  times: [0, 0.85, 1],
                }}
              />

              {/* Large faded index watermark */}
              <div className="absolute bottom-2 right-3 text-[80px] font-black text-accent/5 leading-none select-none pointer-events-none">
                {String(activeIndex + 1).padStart(2, "0")}
              </div>

              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/40 to-transparent rounded-l-xl" />

              {/* Card body — revealed by clipPath in sync with scan line */}
              <motion.div
                key={`content-${activeIndex}`}
                className="w-full flex-1 flex flex-col pb-10"
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0% 0)" }}
                transition={{ duration: 0.7, ease: "easeIn" }}
              >
                {/* Top Row: HUD counter + CURRENT badge */}
                <div className="flex w-full items-center justify-between mb-3">
                  <span className="text-[9px] font-mono text-accent/40 tracking-[0.3em]">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(items.length).padStart(2, "0")}
                  </span>
                  {active.date.includes("PRESENT") && (
                    <span className="text-[8px] font-mono tracking-[0.2em] px-2 py-0.5 border border-accent/50 text-accent rounded-full bg-accent/10 animate-pulse">
                      ● CURRENT
                    </span>
                  )}
                </div>

                {/* Role + Company */}
                <div className="w-full text-left">
                  <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-accent leading-tight">
                    {active.role}
                  </h3>
                  <p className="text-[10px] font-mono text-accent/60 mt-0.5">
                    @ {active.company}
                  </p>
                  <span className="text-xs font-bold text-accent/60 tracking-[0.2em] mt-1 block">
                    {active.date}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="mt-3 w-full space-y-1.5 overflow-y-auto flex-1 text-left scrollbar-hide">
                  {active.description.map((point, i) => (
                    <li
                      key={i}
                      className="text-[10px] font-mono text-accent/70 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-accent/50 shrink-0 mt-0.5">→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* The Hologram Light Beam */}
            <div className="mt-2 relative w-80 h-28">
              {/* Shaped beam */}
              <div
                className="absolute h-16 inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent blur-sm"
                style={{ clipPath: "polygon(0 0, 100% 0, 65% 100%, 35% 100%)" }}
              />
              {/* Blurry bottom base glow — inner tight glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-12 bg-accent/80 blur-3xl rounded-full" />
              {/* Blurry bottom base glow — outer soft halo */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-8 bg-accent/40 blur-3xl rounded-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Radar Pulse Rings — only when inactive, centered on dial */}
      {!isDialUp &&
        [0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-accent/30 pointer-events-none z-0"
            style={{ width: 224, height: 224 }}
            animate={{
              scale: [1, 1, 2.2],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 2.5,
              ease: "easeOut",
              times: [0, 0.05, 1],
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}

      {/* The Unified 3D Dial */}
      <motion.div
        initial={false}
        animate={{
          rotateX: isDialUp ? 70 : 0,
          y: isDialUp ? 150 : 0,
          scale: isDialUp ? 0.9 : 1,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`relative w-56 h-56 rounded-full bg-zinc-800 border-[12px] border-zinc-700 flex items-center justify-center z-10 transition-shadow duration-500 ${isDialUp ? "shadow-[0_20px_50px_rgba(var(--accent-color),0.3)]" : "shadow-2xl"}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* 3D Depth Layers — visible as cylinder edge when tilted */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-[-12px] rounded-full bg-zinc-800 border-[12px] border-zinc-900"
            style={{ transform: `translateZ(${-(i + 1) * 2.5}px)` }}
          />
        ))}

        {/* 4 Green Dots Around Dial */}
        <div className="absolute top-[-16px] w-6 h-6 rounded-full bg-accent border-[1px] border-zinc-900 shadow-[0_0_10px_rgba(var(--accent-color),0.8)]" />
        <div className="absolute bottom-[-16px] w-6 h-6 rounded-full bg-accent border-[1px] border-zinc-900 shadow-[0_0_10px_rgba(var(--accent-color),0.8)]" />
        <div className="absolute left-[-16px] w-6 h-6 rounded-full bg-accent border-[1px] border-zinc-900 shadow-[0_0_10px_rgba(var(--accent-color),0.8)]" />
        <div className="absolute right-[-16px] w-6 h-6 rounded-full bg-accent border-[1px] border-zinc-900 shadow-[0_0_10px_rgba(var(--accent-color),0.8)]" />

        {/* Black Inner Dial background */}
        <div className="w-[180px] h-[180px] rounded-full bg-zinc-900 border-[8px] border-zinc-800 flex items-center justify-center relative overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,1)]">
          {/* Glowing Green Base */}
          <div className="absolute w-full h-full bg-accent" />

          {/* Left Black Triangle */}
          <div className="absolute -left-1 w-0 h-0 border-t-[82px] border-b-[82px] border-l-[70px] border-transparent border-l-zinc-950" />

          {/* Right Black Triangle */}
          <div className="absolute -right-1 w-0 h-0 border-t-[82px] border-b-[82px] border-r-[70px] border-transparent border-r-zinc-950" />

          {/* Core glow when active */}
          <AnimatePresence>
            {isDialUp && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-accent mix-blend-screen blur-md z-10"
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Wristband Extensions */}
      <motion.div
        initial={false}
        animate={{
          rotateX: isDialUp ? 75 : 0,
          y: isDialUp ? 155 : 0,
          scale: isDialUp ? 0.9 : 1,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`absolute z-0 flex items-center justify-between w-[440px] pointer-events-none duration-100 ${!isDialUp ? "drop-shadow-[0_36px_16px_rgba(0,0,0,0.8)]" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Left Band */}
        <div
          className="flex items-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="w-24 h-20 bg-zinc-800 rounded-l-3xl border-t-[6px] border-b-[6px] border-l-[6px] border-zinc-700 relative flex flex-col justify-between py-2 px-3"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* 3D depth slices — fine steps to reduce stair artifact */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 bg-zinc-800 rounded-l-3xl"
                style={{ transform: `translateZ(${-(i + 1) * 0.75}px)` }}
              />
            ))}
            {/* Band seam lines */}
            <div className="h-px w-full bg-accent/20 relative z-10" />
            <div className="h-px w-full bg-accent/10 relative z-10" />
            <div className="h-px w-full bg-accent/20 relative z-10" />
            {/* Subtle side glow */}
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-accent/10 to-transparent z-10" />
          </div>
          {/* Band pin / clasp detail */}
          <div className="w-2 h-14 bg-zinc-600 border border-zinc-500 rounded-sm" />
        </div>

        {/* Right Band */}
        <div
          className="flex items-center flex-row-reverse"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="w-24 h-20 bg-zinc-800 rounded-r-3xl border-t-[6px] border-b-[6px] border-r-[6px] border-zinc-700 relative flex flex-col justify-between py-2 px-3"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* 3D depth slices — fine steps to reduce stair artifact */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 bg-zinc-800 rounded-r-3xl"
                style={{ transform: `translateZ(${-(i + 1) * 0.75}px)` }}
              />
            ))}
            {/* Band seam lines */}
            <div className="h-px w-full bg-accent/20 relative z-10" />
            <div className="h-px w-full bg-accent/10 relative z-10" />
            <div className="h-px w-full bg-accent/20 relative z-10" />
            {/* Subtle side glow */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-accent/10 to-transparent z-10" />
          </div>
          {/* Band pin / clasp detail */}
          <div className="w-2 h-14 bg-zinc-600 border border-zinc-500 rounded-sm" />
        </div>
      </motion.div>

      {/* Navigation Dots — right side, jump to any experience entry */}
      <AnimatePresence>
        {isDialUp && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.3 }}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30 pointer-events-auto"
          >
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="group flex items-center gap-2"
                title={item.role}
              >
                {/* Dot */}
                <motion.div
                  animate={{
                    width: i === activeIndex ? 20 : 8,
                    backgroundColor:
                      i === activeIndex
                        ? "rgba(var(--accent-color), 1)"
                        : "rgba(var(--accent-color), 0.3)",
                  }}
                  className="h-1.5 rounded-full transition-all"
                />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control Elements (Buttons) */}
      <div className="absolute bottom-2 flex flex-col items-center justify-end w-full h-full pointer-events-none z-30">
        <AnimatePresence mode="wait">
          {!isDialUp ? (
            <motion.div
              key="activate-button"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto"
            >
              {/* Dark grey base extension */}
              <div className="flex items-center justify-center pb-2 relative translate-y-[-48px]">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleDial}
                  className="absolute -bottom-3 w-12 h-6 bg-accent border-[1px] border-zinc-950 rounded-[50%] shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.5),0_0_15px_rgba(var(--accent-color),0.8)] cursor-pointer"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="active-controls"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-24 pointer-events-auto"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className="w-12 h-12 bg-zinc-900 border border-accent/50 rounded-full flex items-center justify-center text-accent shadow-[0_0_15px_rgba(var(--accent-color),0.5)] bg-opacity-80 backdrop-blur-md"
              >
                ◀
              </motion.button>

              {/* Close Button / Press Dial Down */}
              <div className="flex items-center justify-center pb-2 translate-y-[16px] relative mx-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleDial}
                  className="absolute -bottom-3 w-12 h-6 bg-accent border-[1px] border-zinc-950 rounded-[50%] shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.5),0_0_15px_rgba(var(--accent-color),0.8)] cursor-pointer"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="w-12 h-12 bg-zinc-900 border border-accent/50 rounded-full flex items-center justify-center text-accent shadow-[0_0_15px_rgba(var(--accent-color),0.5)] bg-opacity-80 backdrop-blur-md"
              >
                ▶
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Omnitrix;
