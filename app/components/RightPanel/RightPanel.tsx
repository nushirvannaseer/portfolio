"use client";
import React from "react";
import SkillBox from "./SkillBox/SkillBox";
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
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import { motion } from "framer-motion";

const SectionHeading = ({ id, label }: { id?: string; label: string }) => (
  <div id={id} className="mt-20 mb-6">
    <h1 className="text-xs uppercase tracking-[0.2em] font-bold text-green-500/70">
      {label}
    </h1>
    <motion.div
      className="h-px bg-green-500/20 mt-2 origin-left"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    />
  </div>
);

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
      "Specialized in building high-performance applications using React, Next.js, and Node.js. Experienced in architecting scalable backends with GoLang and Python.",
    icons: webDevIcons,
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Expertise in AWS cloud infrastructure, including Lambda, EC2, ECS, and CDK. Proven ability to architect secure data pipelines and implement SSO/MFA protocols.",
    icons: [AWSIcon, DockerIcon, NestIcon, SQLIcon],
  },
  {
    title: "APIs & Integration",
    description:
      "Designing and implementing RESTful APIs and GraphQL. Integrating third-party services like OpenAI, Spotify, and YouTube APIs for enhanced functionality.",
    icons: [NextIcon, JSIcon, MongoDBIcon, PythonIcon],
  },
];

const RightPanel = ({ projects }: { projects: any[] }) => {
  return (
    <div className="flex w-full lg:w-[60%] xl:w-[68%] p-8 flex-col pt-[5%] scroll-px-10 pb-32">
      <div id="about" className="mb-6">
        <h1 className="text-xs uppercase tracking-[0.2em] font-bold text-green-500/70">
          ABOUT ME
        </h1>
        <motion.div
          className="h-px bg-green-500/20 mt-2 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </div>
      <p className="text-xs font-mono leading-relaxed text-zinc-400">
        Results-oriented Software Engineer with 6+ years of experience building
        and optimizing high-performance applications. Specialized in modern
        frameworks (React, Next.js, Node.js), GoLang, and AWS cloud
        infrastructure. Proven ability to architect secure data pipelines,
        implement SSO/MFA security protocols, accelerate system rendering
        speeds, and lead cross-functional teams through complex technical
        challenges.
      </p>
      <SectionHeading label="WHAT I DO" />
      <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start -mx-2">
        {skills.map((skill, _) => (
          <SkillBox key={_} skill={skill} />
        ))}
      </div>
      <SectionHeading id="experience" label="EXPERIENCE" />
      <div className="flex flex-col flex-wrap">
        <Experience />
      </div>
      <SectionHeading id="projects" label="PROJECTS" />
      <div className="flex flex-col lg:flex-row flex-wrap">
        <Projects projects={projects} />
      </div>
      <SectionHeading id="skills" label="SKILLS" />
      <div className="flex flex-col flex-wrap">
        <Skills />
      </div>
      <SectionHeading id="education" label="EDUCATION" />
      <div className="group relative flex flex-col gap-3 p-6 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:border-green-500/50 hover:bg-zinc-900/60 shadow-xl">
        <div className="absolute left-0 top-6 w-1 h-6 bg-green-500/20 rounded-r-full transition-all group-hover:h-8 group-hover:bg-green-500" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-1 pl-2">
          <span className="text-sm font-bold text-zinc-100 group-hover:text-green-400">
            BS Computer Science
          </span>
          <span className="text-[10px] font-mono text-zinc-500 whitespace-nowrap text-right">
            FAST-NUCES, Lahore, PK
          </span>
        </div>
        <div className="pl-2">
          <p className="text-[11px] font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed flex items-center gap-2">
            <span className="text-green-500/50">✦</span>
            Silver Medalist for SGPA of 3.94/4 · CGPA: 3.61/4
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-zinc-700">
        <span>nushirvan naseer · {new Date().getFullYear()}</span>
        <span>built with next.js</span>
      </footer>
    </div>
  );
};

export default RightPanel;
