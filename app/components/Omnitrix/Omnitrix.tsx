"use client";

import React, { useState, useRef } from "react";
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
  const [dialSpin, setDialSpin] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showFlash, setShowFlash] = useState<"white" | "green" | null>(null);

  const lastHapticX = useRef(0);

  const active = items[activeIndex];

  const triggerHaptic = (type: "activate" | "deactivate" | "click") => {
    if (
      typeof window !== "undefined" &&
      window.navigator &&
      window.navigator.vibrate
    ) {
      if (type === "activate") {
        // Power up sequence: short, medium, long pulses
        window.navigator.vibrate([10, 30, 20, 50, 30, 80]);
      } else if (type === "deactivate") {
        // Power down sequence: long, medium, short pulses
        window.navigator.vibrate([80, 40, 50, 20, 30, 10]);
      } else {
        // Sharp mechanical click - "ratchet" feeling
        // 2ms pulse, 10ms gap, 2ms pulse
        window.navigator.vibrate([2, 10, 2]);
      }
    }
  };

  const playSound = (type: "activate" | "deactivate" | "click") => {
    triggerHaptic(type);
    try {
      const src =
        type === "activate"
          ? "/sounds/omnitrix-activate.mp3"
          : type === "deactivate"
            ? "/sounds/omnitrix-deactivate.mp3"
            : "/sounds/omnitrix-select.mp3";
      const audio = new Audio(src);
      audio.volume = 0.6;
      audio.play().catch(() => {});
    } catch (_) {}
  };

  const handleNext = () => {
    playSound("click");
    setDialSpin((prev) => prev + 90);
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    playSound("click");
    setDialSpin((prev) => prev - 90);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const toggleDial = () => {
    if (isDialUp) {
      // Start Closing Sequence
      setIsClosing(true);
      playSound("deactivate");

      // Phase 1 (0-1s): Diamond -> Hourglass transformation (synced with hologram close)

      // Phase 2 (1s-4s): Chaotic spin and flashing colors
      setTimeout(() => {
        setIsSpinning(true);
      }, 1000);

      // End Sequence: Final green burst
      setTimeout(() => {
        setShowFlash("green");
        setTimeout(() => {
          setIsDialUp(false);
          setIsClosing(false);
          setIsSpinning(false);
          setDialSpin(0); // Reset dial rotation after shut down
          setShowFlash(null);
        }, 300);
      }, 4000);
    } else {
      playSound("activate");
      setIsDialUp(true);
    }
  };

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
              animate={{
                opacity: isClosing ? [1, 1, 0] : 1,
                y: 0,
                scale: isClosing ? 0.9 : 1,
                clipPath: isClosing
                  ? "inset(0 49.5% 0 49.5%)"
                  : "inset(0 0% 0 0%)",
              }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={
                isClosing
                  ? {
                      clipPath: { duration: 0.8, ease: "easeInOut" },
                      opacity: { duration: 1.2, times: [0, 0.7, 1] },
                      scale: { duration: 0.8 },
                      y: { duration: 0.8 },
                    }
                  : { duration: 0.4 }
              }
              className={`w-full max-w-sm h-[19rem] pt-5 px-5 pb-8 border rounded-xl shadow-[0_0_40px_rgba(var(--accent-color),0.4)] backdrop-blur-md flex flex-col items-start justify-start text-left overflow-hidden pointer-events-auto transition-colors duration-300 ${isClosing ? "bg-red-950/20 border-red-500/40 shadow-red-900/40" : "bg-accent/5 border-accent/40 shadow-accent/40"}`}
              style={{
                ...(isClosing
                  ? ({ "--accent-color": "239, 68, 68" } as any)
                  : {}),
                WebkitBackdropFilter: "blur(12px)", // Safari fix
                transform: "translateZ(0)", // Safari 3D stability
                willChange: "transform, clip-path",
              }}
            >
              {/* One-shot scan line — sweeps top to bottom, reveals card content */}
              <motion.div
                key={`scanline-${activeIndex}`}
                className="absolute inset-x-0 h-0.5 bg-accent z-20 pointer-events-none shadow-[0_0_12px_rgba(var(--accent-color),1)]"
                style={{ top: 0, transform: "translateZ(1px)" }} // Merged props
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
                className="w-full h-[20rem] flex-1 flex flex-col pb-10"
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
                <ul className="mt-3 w-full space-y-1.5 overflow-y-auto text-left scrollbar-hide">
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
                {/* Bottom spacer — always visible gap */}
                <div className="h-6 shrink-0" />
              </motion.div>
            </motion.div>

            {/* The Hologram Light Beam */}
            <div className="mt-2 relative w-80 h-28">
              {/* Shaped beam */}
              <motion.div
                animate={{
                  height: isClosing ? [56, 40, 20, 0] : 56,
                  clipPath: isClosing
                    ? "polygon(49% 0, 51% 0, 50% 100%, 50% 100%)"
                    : "polygon(0 0, 100% 0, 65% 100%, 35% 100%)",
                }}
                className={`absolute inset-0 bg-gradient-to-t to-transparent blur-sm transition-colors duration-300 ${isClosing ? "from-red-600/60 via-red-900/20" : "from-accent/30 via-accent/10"}`}
              />
              {/* Blurry bottom base glow */}
              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-12 blur-3xl rounded-full transition-colors duration-300 ${isClosing ? "bg-red-600/50" : "bg-accent/50"}`}
              />
              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-8 blur-3xl rounded-full transition-colors duration-300 ${isClosing ? "bg-red-600/50" : "bg-accent/50"}`}
              />
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
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.01}
        onDrag={(_, info) => {
          const threshold = 20;
          if (Math.abs(info.offset.x - lastHapticX.current) > threshold) {
            lastHapticX.current = info.offset.x;
            if (
              typeof window !== "undefined" &&
              window.navigator &&
              window.navigator.vibrate
            ) {
              window.navigator.vibrate(5);
            }
          }
        }}
        onDragEnd={(_, info) => {
          lastHapticX.current = 0;
          const threshold = 50;
          if (info.offset.x < -threshold) {
            handleNext();
          } else if (info.offset.x > threshold) {
            handlePrev();
          }
        }}
        initial={false}
        animate={{
          rotateX: isDialUp || isClosing ? 70 : 0,
          y: isDialUp || isClosing ? 150 : 0,
          scale: isDialUp || isClosing ? 0.9 : 1,
          rotateZ: isSpinning ? dialSpin + 2160 : dialSpin,
        }}
        transition={
          isSpinning
            ? {
                rotateZ: { duration: 3, ease: "easeInOut" },
                default: { type: "spring", stiffness: 100, damping: 20 },
              }
            : {
                type: "spring",
                stiffness: 120,
                damping: 18,
              }
        }
        className={`relative w-56 h-56 rounded-full bg-zinc-800 border-[12px] border-zinc-700 flex items-center justify-center z-10 transition-shadow duration-500 ${isDialUp ? "shadow-[inset_0_3px_6px_rgba(255,255,255,0.08),inset_0_-4px_10px_rgba(0,0,0,0.7),0_20px_50px_rgba(var(--accent-color),0.3)]" : "shadow-[inset_0_3px_6px_rgba(255,255,255,0.08),inset_0_-4px_10px_rgba(0,0,0,0.7),0_8px_32px_rgba(0,0,0,0.8)]"}`}
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          willChange: "transform",
        }}
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
        <div className="absolute top-[-16px] z-96 w-6 h-6 rounded-full bg-accent border-[1px] border-zinc-900 shadow-[0_0_10px_rgba(var(--accent-color),0.8)]" />
        <div className="absolute bottom-[-16px] z-96 w-6 h-6 rounded-full bg-accent border-[1px] border-zinc-900 shadow-[0_0_10px_rgba(var(--accent-color),0.8)]" />
        <div className="absolute left-[-16px] z-96 w-6 h-6 rounded-full bg-accent border-[1px] border-zinc-900 shadow-[0_0_10px_rgba(var(--accent-color),0.8)]" />
        <div className="absolute right-[-16px] z-96 w-6 h-6 rounded-full bg-accent border-[1px] border-zinc-900 shadow-[0_0_10px_rgba(var(--accent-color),0.8)]" />

        {/* Metallic rim highlight — top-left specular sheen */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none z-20"
          style={{
            background:
              "radial-gradient(ellipse at 35% 25%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)",
          }}
        />
        {/* Bottom rim shadow to reinforce curvature */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none z-20"
          style={{
            background:
              "radial-gradient(ellipse at 60% 80%, rgba(0,0,0,0.5) 0%, transparent 60%)",
          }}
        />

        {/* Black Inner Dial background */}
        <div
          className={`w-[180px] h-[180px] rounded-full border-[8px] flex items-center justify-center relative overflow-hidden transition-all duration-300 ${isClosing ? "border-red-900 bg-red-950 shadow-[inset_0_4px_8px_rgba(255,0,0,0.5)] animate-pulse" : "bg-zinc-950 border-zinc-800 shadow-[inset_0_4px_8px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.8)]"}`}
          style={{
            WebkitMaskImage: "-webkit-radial-gradient(white, black)", // Forces Safari to clip correctly
            isolation: "isolate", // Prevents blend mode artifacts appearing as boxes
          }}
        >
          {/* Glowing Base with Phased Shape Transformation */}
          <motion.div
            animate={{
              backgroundColor: isSpinning
                ? ["#ef4444", "#ffffff", "#ef4444"]
                : isClosing
                  ? "#ef4444"
                  : "rgb(var(--accent-color))",
              clipPath:
                isDialUp && !isSpinning
                  ? "polygon(50% 0%, 50% 0%, 100% 50%, 100% 50%, 50% 100%, 50% 100%, 0% 50%, 0% 50%)" // Diamond (8 pts)
                  : "polygon(0% 0%, 50% 0%, 100% 0%, 55% 50%, 100% 100%, 50% 100%, 0% 100%, 45% 50%)", // Hourglass (8 pts)
            }}
            transition={{
              backgroundColor: isSpinning
                ? { repeat: Infinity, duration: 0.2 }
                : { duration: 0.5 },
              clipPath: { duration: 1, ease: "easeInOut" }, // Slower and deliberate transformation
            }}
            className="absolute w-full h-full"
            style={{ transform: "translateZ(0)" }}
          />

          {/* Core glow when active */}
          <AnimatePresence>
            {(isDialUp || isClosing) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  backgroundColor: isSpinning
                    ? ["#ff0000", "#ffffff", "#ff0000"]
                    : isClosing
                      ? "#ff0000"
                      : "rgb(var(--accent-color))",
                  clipPath:
                    isDialUp && !isSpinning
                      ? "polygon(50% 0%, 50% 0%, 100% 50%, 100% 50%, 50% 100%, 50% 100%, 0% 50%, 0% 50%)"
                      : "polygon(0% 0%, 50% 0%, 100% 0%, 55% 50%, 100% 100%, 50% 100%, 0% 100%, 45% 50%)",
                }}
                transition={{
                  backgroundColor: isSpinning
                    ? { repeat: Infinity, duration: 0.2 }
                    : { duration: 0.5 },
                  clipPath: { duration: 1, ease: "easeInOut" },
                }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 mix-blend-screen blur-md z-10"
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
                whileHover={{ scale: 1.2, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className="w-12 h-12 flex items-center justify-center text-accent drop-shadow-[0_0_10px_rgba(var(--accent-color),0.6)] transition-all duration-300 pointer-events-auto"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 4L7 12L15 20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="butt"
                  />
                  <path
                    d="M19 6V18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />
                </svg>
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
                whileHover={{ scale: 1.2, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="w-12 h-12 flex items-center justify-center text-accent drop-shadow-[0_0_10px_rgba(var(--accent-color),0.6)] transition-all duration-300 pointer-events-auto"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 4L17 12L9 20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="butt"
                  />
                  <path
                    d="M5 6V18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />
                </svg>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Final Flash Trigger */}
        <AnimatePresence>
          {showFlash && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 z-[100] pointer-events-none ${showFlash === "green" ? "bg-accent shadow-[0_0_200px_inset_rgba(var(--accent-color),0.8)]" : "bg-white"}`}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Omnitrix;
