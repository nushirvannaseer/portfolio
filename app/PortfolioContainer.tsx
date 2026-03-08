"use client";

import React, { useState, useEffect } from "react";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import Desktop from "./components/Desktop/Desktop";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import SkillBox from "./components/RightPanel/SkillBox/SkillBox";
import Chatbot from "./components/ChatBot/ChatBot";
import ChessGame from "./components/Chess/ChessGame";
import ReactIcon from "@/app/assets/icons/React.svg";
import FlaskIcon from "@/app/assets/icons/Flask.svg";
import NodeIcon from "@/app/assets/icons/Node.svg";
import NextIcon from "@/app/assets/icons/Next.svg";
import JSIcon from "@/app/assets/icons/JS.svg";
import PythonIcon from "@/app/assets/icons/Python.svg";
import DockerIcon from "@/app/assets/icons/Docker.svg";
import MongoDBIcon from "@/app/assets/icons/MongoDB.svg";
import SQLIcon from "@/app/assets/icons/SQL.svg";
import NestIcon from "@/app/assets/icons/Nest.svg";
import AWSIcon from "@/app/assets/icons/AWS.svg";

const webDevIcons = [
  ReactIcon,
  FlaskIcon,
  NodeIcon,
  NextIcon,
  NestIcon,
  JSIcon,
  AWSIcon,
  DockerIcon,
  MongoDBIcon,
  SQLIcon,
];

const skills = [
  {
    title: "Full Stack Development",
    description:
      "Specialized in building high-performance applications using React, Next.js, and Node.js.",
    icons: webDevIcons,
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Expertise in AWS cloud infrastructure, including Lambda, EC2, ECS, and CDK.",
    icons: [AWSIcon, DockerIcon, NestIcon, SQLIcon],
  },
  {
    title: "APIs & Integration",
    description: "Designing and implementing RESTful APIs and GraphQL.",
    icons: [NextIcon, JSIcon, MongoDBIcon, PythonIcon],
  },
];

export default function PortfolioContainer({ projects }: { projects: any[] }) {
  const [desktopMode, setDesktopMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("nush-desktop-mode");
    if (saved === "true") setDesktopMode(true);

    const handleToggle = (e: any) => {
      setDesktopMode(e.detail);
    };

    window.addEventListener("toggle-desktop-mode", handleToggle);
    return () =>
      window.removeEventListener("toggle-desktop-mode", handleToggle);
  }, []);

  if (desktopMode) {
    const childrenMap = {
      about: (
        <div className="space-y-12">
          <LeftPanel isDesktop />
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-xs font-bold text-accent uppercase tracking-widest whitespace-nowrap">
                What I Do
              </h2>
              <div className="h-px w-full bg-white/5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, i) => (
                <SkillBox key={i} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      ),
      experience: <Experience />,
      projects: <Projects projects={projects} />,
      skills: <Skills />,
      education: (
        <div className="p-6 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-md">
          <span className="text-sm font-bold text-zinc-100 italic">
            BS Computer Science
          </span>
          <p className="text-[11px] font-mono text-zinc-400 mt-2">
            FAST-NUCES, Lahore, PK · Silver Medalist
          </p>
        </div>
      ),
      assistant: <Chatbot standalone />,
      chess: <ChessGame />,
    };

    return <Desktop childrenMap={childrenMap} />;
  }

  return (
    <div className="flex w-full flex-col lg:flex-row lg:justify-between mx-auto relative max-w-[1600px]">
      <LeftPanel />
      <RightPanel projects={projects} />
    </div>
  );
}
