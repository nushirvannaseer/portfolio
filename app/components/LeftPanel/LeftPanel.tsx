"use client";
import React from "react";
import Info from "./Info/Info";
import PhoneIcon from "@/app/assets/icons/Phone.svg";
import EmailIcon from "@/app/assets/icons/Email.svg";
import GithubIcon from "@/app/assets/icons/Github.svg";
import InstagramIcon from "@/app/assets/icons/Instagram.svg";
import LinkedInIcon from "@/app/assets/icons/LinkedIn.svg";
import Link from "next/link";
import ScrollLink from "../ScrollLink/ScrollLink";
import Chatbot from "../ChatBot/ChatBot";
import Name from "./Name";
import { motion } from "framer-motion";
import ChessIcon from "@/app/assets/icons/Chess.svg";

const navItems = [
  { id: "about", label: "ABOUT", num: "01" },
  { id: "experience", label: "EXPERIENCE", num: "02" },
  { id: "projects", label: "PROJECTS", num: "03" },
  { id: "skills", label: "SKILLS", num: "04" },
  { id: "education", label: "EDUCATION", num: "05" },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface LeftPanelProps {
  isDesktop?: boolean;
}

const LeftPanel = ({ isDesktop = false }: LeftPanelProps) => {
  if (isDesktop) {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <Name />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(var(--accent-color),1)]" />
            <span className="text-sm font-mono text-zinc-400 capitalize whitespace-nowrap">
              Senior Software Engineer
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/files/nushirvans-resume.pdf"
            target="_blank"
            className="relative inline-flex h-10 overflow-hidden rounded-xl p-[1px] group/btn"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(var(--accent-color),1)_0%,rgba(var(--accent-color),0.2)_50%,rgba(var(--accent-color),1)_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-zinc-950 px-6 py-1 text-xs font-medium text-white backdrop-blur-3xl transition-all group-hover/btn:bg-zinc-900 whitespace-nowrap">
              View Resume
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Info
              icon={EmailIcon}
              title={""}
              text={""}
              link={"mailto:nushirvannaseer@gmail.com"}
            />
            <Info
              icon={PhoneIcon}
              title={""}
              text={""}
              link={"tel:+923200435969"}
            />
            <Info
              icon={GithubIcon}
              title={""}
              text={""}
              link={"https://github.com/nushirvannaseer"}
            />
            <Info
              icon={LinkedInIcon}
              title={""}
              text={""}
              link={"https://linkedin.com/in/nushirvan-naseer"}
            />
            <Info
              icon={InstagramIcon}
              title={""}
              text={""}
              link={"https://www.instagram.com/nush0w0rvan"}
            />
            <Info
              icon={ChessIcon}
              title={"Chess profile"}
              text={""}
              link={"https://www.chess.com/member/nushirvannaseer"}
            />
          </div>
        </div>

        <p className="text-[11px] font-mono leading-relaxed text-zinc-400 max-w-xl">
          Results-oriented Software Engineer with 6+ years of experience
          building and optimizing high-performance applications. Specialized in
          modern frameworks (React, Next.js, Node.js), GoLang, and AWS cloud
          infrastructure.
        </p>
      </div>
    );
  }

  return (
    <div className="lg:h-screen w-full lg:w-[40%] xl:w-[32%] p-6 lg:sticky lg:top-0 flex items-center justify-center">
      <Chatbot />
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="w-full h-fit max-h-[90vh] flex flex-col items-center lg:items-start text-center lg:text-left p-8 rounded-[2rem] border border-white/10 bg-zinc-900/50 backdrop-blur-xl shadow-2xl relative overflow-hidden"
      >
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full w-full">
          <motion.div variants={fadeUp}>
            <h1 className="hidden">nushirvan naseer</h1>
            <Name />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center lg:justify-start gap-2 my-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(var(--accent-color),1)]" />
            <span className="text-sm font-mono text-zinc-400 capitalize">
              Senior Software Engineer
            </span>
          </motion.div>

          <motion.nav
            variants={fadeUp}
            className="flex flex-wrap lg:flex-col gap-1 mb-8 font-mono text-xs"
          >
            {navItems.map(({ id, label, num }) => (
              <ScrollLink
                key={id}
                scroll={true}
                href={`#${id}`}
                className="py-2 px-2 flex items-center gap-3 rounded-lg transition-all duration-300 text-zinc-500 hover:text-accent"
              >
                <span className="text-[9px] opacity-30">{num}</span>
                <span className="tracking-widest text-[10px] font-bold">
                  {label}
                </span>
              </ScrollLink>
            ))}
          </motion.nav>

          <div className="mt-auto space-y-8 w-full">
            <motion.div variants={fadeUp}>
              <Link
                href="/files/nushirvans-resume.pdf"
                target="_blank"
                className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-zinc-900 group/btn w-full sm:w-[200px]"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(var(--accent-color),1)_0%,rgba(var(--accent-color),0.2)_50%,rgba(var(--accent-color),1)_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-zinc-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover/btn:bg-zinc-900">
                  View Resume
                </span>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Info
                  icon={EmailIcon}
                  title={"Email"}
                  text={""}
                  link={"mailto:nushirvannaseer@gmail.com"}
                />
                <Info
                  icon={PhoneIcon}
                  title={"Call"}
                  text={""}
                  link={"tel:+923200435969"}
                />
                <Info
                  icon={GithubIcon}
                  title={"Github"}
                  text={""}
                  link={"https://github.com/nushirvannaseer"}
                />
                <Info
                  icon={LinkedInIcon}
                  title={"LinkedIn"}
                  text={""}
                  link={"https://linkedin.com/in/nushirvan-naseer"}
                />
                <Info
                  icon={InstagramIcon}
                  title={"Instagram"}
                  text={""}
                  link={"https://www.instagram.com/nush0w0rvan"}
                />
                <Info
                  icon={ChessIcon}
                  title={"Chess profile"}
                  text={""}
                  link={"https://www.chess.com/member/nushirvannaseer"}
                />
              </div>
              <p className="text-[10px] font-mono text-zinc-600 mt-4 italic">
                {`Building scalable solutions at the speed of thought`}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LeftPanel;
