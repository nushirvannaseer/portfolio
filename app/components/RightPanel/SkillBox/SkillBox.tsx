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
    setTimeout(() => {
      setCurrentIcon((currentIcon + 1) % icons.length);
    }, 2000);
  });

  return (
    <div className="group relative flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:border-green-500/50 hover:bg-zinc-900/60 w-full sm:w-[calc(33.33%-12px)] min-h-[130px] overflow-hidden m-1.5">
      {/* Background Glow */}
      <div className="absolute -inset-px bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-col items-center text-center space-y-3">
        <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-white/10 flex items-center justify-center p-2 transition-transform duration-500 group-hover:scale-110">
          <Image
            src={icons[currentIcon]}
            alt={title}
            height={24}
            width={24}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="space-y-1">
          <span className="block text-[11px] font-bold text-zinc-100 group-hover:text-green-400 transition-colors uppercase tracking-tight">
            {title}
          </span>
          <p className="text-[9px] text-zinc-500 font-mono leading-relaxed max-w-[150px] mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
