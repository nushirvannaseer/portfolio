"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  skill: {
    title: string;
    description: string;
    icons: any;
  };
}

const SkillBox = ({ skill: { title, description, icons } }: Props) => {
  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentIcon, icons.length]);

  return (
    <div className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:bg-zinc-900/60 w-full min-h-[160px] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-col items-center text-center space-y-4">
        <div className="w-12 h-12 rounded-lg bg-zinc-800/80 border border-white/10 flex items-center justify-center p-2.5 transition-transform duration-500 group-hover:scale-110">
          <Image
            src={icons[currentIcon]}
            alt={title}
            height={28}
            width={28}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="space-y-2 px-2">
          <span className="block text-[12px] font-bold text-zinc-100 group-hover:text-accent transition-colors uppercase tracking-widest">
            {title}
          </span>
          <p className="text-[10px] text-zinc-500 font-mono leading-relaxed max-w-[280px] mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
