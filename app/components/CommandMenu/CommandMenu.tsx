"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Briefcase,
  Code2,
  GraduationCap,
  Github,
  Linkedin,
  Instagram,
  Mail,
  FileText,
  MessageSquare,
  Search,
  ArrowRight,
} from "lucide-react";

const navItems = [
  {
    id: "about",
    label: "About Me",
    icon: <User size={16} />,
    section: "About",
  },
  {
    id: "experience",
    label: "Experience",
    icon: <Briefcase size={16} />,
    section: "Career",
  },
  {
    id: "projects",
    label: "Projects",
    icon: <Code2 size={16} />,
    section: "Projects",
  },
  {
    id: "skills",
    label: "Skills & Tech",
    icon: <MessageSquare size={16} />,
    section: "Skills",
  },
  {
    id: "education",
    label: "Education",
    icon: <GraduationCap size={16} />,
    section: "Academic",
  },
];

const socialItems = [
  {
    label: "GitHub Profile",
    icon: <Github size={16} />,
    url: "https://github.com/nushirvannaseer",
  },
  {
    label: "LinkedIn",
    icon: <Linkedin size={16} />,
    url: "https://linkedin.com/in/nushirvan-naseer",
  },
  {
    label: "Instagram",
    icon: <Instagram size={16} />,
    url: "https://www.instagram.com/nush0w0rvan",
  },
  {
    label: "Email Me",
    icon: <Mail size={16} />,
    url: "mailto:nushirvannaseer@gmail.com",
  },
];

const themes = [
  { name: "Emerald", color: "34, 197, 94" },
  { name: "Sky", color: "56, 189, 248" },
  { name: "Violet", color: "139, 92, 246" },
  { name: "Rose", color: "244, 63, 94" },
  { name: "Mono", color: "255, 255, 255" },
];

const CommandMenu = () => {
  const [open, setOpen] = useState(false);
  const [activeColor, setActiveColor] = useState("34, 197, 94"); // Emerald default

  // Load theme preference
  useEffect(() => {
    const saved = localStorage.getItem("nush-accent-color");
    if (saved) {
      setActiveColor(saved);
      document.documentElement.style.setProperty("--accent-color", saved);
      document.documentElement.style.setProperty(
        "--accent-glow-color",
        `rgba(${saved}, 0.4)`,
      );
    }

    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const setTheme = (color: string) => {
    setActiveColor(color);
    document.documentElement.style.setProperty("--accent-color", color);
    document.documentElement.style.setProperty(
      "--accent-glow-color",
      `rgba(${color}, 0.4)`,
    );
    localStorage.setItem("nush-accent-color", color);
    setOpen(false);
  };

  const runCommand = useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Global Shortcut Badge (Fixed Top Right) */}
      <div
        className="fixed top-6 right-6 z-[60] hidden lg:flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/5 bg-zinc-900/40 backdrop-blur-md group cursor-pointer hover:border-accent/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-2xl"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(var(--accent-color),1)]" />
          <span className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase tracking-wider">
            Terminal
          </span>
        </div>
        <div className="flex items-center gap-1 border-l border-white/10 pl-3">
          <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-zinc-800 text-[9px] font-mono text-zinc-500 shadow-sm">
            ⌘
          </kbd>
          <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-zinc-800 text-[9px] font-mono text-zinc-500 shadow-sm">
            K
          </kbd>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            className="fixed inset-0 z-[100] p-4 pt-[15vh] bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="max-w-2xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/90 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5"
            >
              <div className="flex items-center border-b border-white/5 px-4 h-14">
                <Search className="mr-3 h-4 w-4 shrink-0 text-zinc-500" />
                <Command.Input
                  autoFocus
                  placeholder="Inquire or explore..."
                  className="flex h-full w-full bg-transparent py-3 text-sm font-mono outline-none placeholder:text-zinc-600 border-none focus:ring-0"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="px-1.5 py-0.5 rounded border border-white/5 bg-zinc-800 text-[10px] font-mono text-zinc-500"
                >
                  ESC
                </button>
              </div>

              <Command.List className="max-h-[420px] overflow-y-auto overflow-x-hidden p-2 scrollbar-none">
                <Command.Empty className="py-12 text-center text-sm font-mono text-zinc-500">
                  No matching results. Try &quot;Experience&quot; or
                  &quot;Socials&quot;.
                </Command.Empty>

                <Command.Group
                  heading={
                    <span className="px-2 pb-2 pt-1 text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                      Themes
                    </span>
                  }
                >
                  <div className="grid grid-cols-5 gap-2 px-2 pb-2">
                    {themes.map((theme) => (
                      <Command.Item
                        key={theme.name}
                        onSelect={() => setTheme(theme.color)}
                        className={`flex flex-col items-center gap-2 rounded-xl border p-3 transition-all aria-selected:bg-zinc-800 aria-selected:border-accent/40 cursor-default ${
                          activeColor === theme.color
                            ? "border-accent/40 bg-accent/10"
                            : "border-white/5 bg-zinc-900/50"
                        }`}
                      >
                        <div
                          className="w-4 h-4 rounded-full shadow-lg"
                          style={{ backgroundColor: `rgb(${theme.color})` }}
                        />
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-tighter">
                          {theme.name}
                        </span>
                      </Command.Item>
                    ))}
                  </div>
                </Command.Group>

                <Command.Separator className="h-px bg-white/5 my-2" />

                <Command.Group
                  heading={
                    <span className="px-2 pb-2 pt-1 text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                      Navigation
                    </span>
                  }
                >
                  {navItems.map((item) => (
                    <Command.Item
                      key={item.id}
                      onSelect={() =>
                        runCommand(() => scrollToSection(item.id))
                      }
                      className="group flex cursor-default select-none items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-400 outline-none aria-selected:bg-zinc-800 aria-selected:text-zinc-100 transition-all font-mono"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-zinc-900 group-aria-selected:border-accent/30 group-aria-selected:text-accent transition-colors">
                        {item.icon}
                      </div>
                      <span>{item.label}</span>
                      <div className="ml-auto hidden group-aria-selected:flex items-center gap-1.5 text-[10px] text-zinc-500 animate-in fade-in slide-in-from-right-1">
                        Go to {item.section} <ArrowRight size={10} />
                      </div>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Separator className="h-px bg-white/5 my-2" />

                <Command.Group
                  heading={
                    <span className="px-2 pb-2 pt-1 text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                      Quick Actions
                    </span>
                  }
                >
                  <Command.Item
                    onSelect={() =>
                      runCommand(() =>
                        window.open("/files/nushirvans-resume.pdf", "_blank"),
                      )
                    }
                    className="group flex cursor-default select-none items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-400 outline-none aria-selected:bg-zinc-800 aria-selected:text-zinc-100 transition-all font-mono"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-zinc-900 group-aria-selected:border-accent/30 group-aria-selected:text-accent">
                      <FileText size={16} />
                    </div>
                    <span>Download CV / Resume</span>
                    <span className="ml-auto text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-accent/10 text-accent uppercase tracking-tighter shadow-sm shadow-accent/20">
                      Recommended
                    </span>
                  </Command.Item>
                </Command.Group>

                <Command.Separator className="h-px bg-white/5 my-2" />

                <Command.Group
                  heading={
                    <span className="px-2 pb-2 pt-1 text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                      Social Presence
                    </span>
                  }
                >
                  {socialItems.map((item) => (
                    <Command.Item
                      key={item.label}
                      onSelect={() =>
                        runCommand(() => window.open(item.url, "_blank"))
                      }
                      className="group flex cursor-default select-none items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-400 outline-none aria-selected:bg-zinc-800 aria-selected:text-zinc-100 transition-all font-mono"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-zinc-900 group-aria-selected:border-accent/30 group-aria-selected:text-accent">
                        {item.icon}
                      </div>
                      <span>{item.label}</span>
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>

              <div className="flex items-center justify-between border-t border-white/5 px-4 h-12 bg-zinc-900/50">
                <p className="text-[10px] text-zinc-600 font-mono">
                  Tip: Use arrows and{" "}
                  <span className="text-zinc-400">ENTER</span> to execute.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded border border-white/5 bg-zinc-800 text-[8px] font-mono text-zinc-400">
                      ↑
                    </kbd>
                    <kbd className="px-1.5 py-0.5 rounded border border-white/5 bg-zinc-800 text-[8px] font-mono text-zinc-400">
                      ↓
                    </kbd>
                    <span className="text-[9px] text-zinc-600 ml-1">
                      Navigate
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Command.Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandMenu;
