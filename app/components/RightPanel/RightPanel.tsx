"use client";
import React from "react";
import Omnitrix from "../Omnitrix/Omnitrix";
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
    <h1 className="text-xs uppercase tracking-[0.2em] font-bold text-accent/70">
      {label}
    </h1>
    <motion.div
      className="h-px bg-accent/20 mt-2 origin-left"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    />
  </div>
);

// LEGACY — skill cards (kept for reference)
// const webDevIcons = [
//   ReactIcon, FlaskIcon, NodeIcon, NextIcon, NestIcon, JSIcon, AWSIcon, DockerIcon, MongoDBIcon, SQLIcon,
// ];
// const skills = [
//   { title: "Full Stack Development", description: "...", icons: webDevIcons },
//   { title: "Cloud & Infrastructure", description: "...", icons: [AWSIcon, DockerIcon, NestIcon, SQLIcon] },
//   { title: "APIs & Integration", description: "...", icons: [NextIcon, JSIcon, MongoDBIcon, PythonIcon] },
// ];

const experiences = [
  {
    company: "The Moonshot Factory (Kaleidoscope Team)",
    role: "Full Stack Engineer",
    date: "04/2025 — PRESENT",
    description: [
      "Slashed dashboard and insight page loading times from 6s to under 2s by migrating heavy logic to Redux with redux-persist.",
      "Architected an end-to-end correlations bot utilizing the AWS SDK for GoLang, Neptune, and S3.",
      "Strengthened security by upgrading AWS Amplify and engineering an SSO system with MFA for AWS Cognito.",
      "Led major performance optimizations and achieved 320+ contributions within the first year.",
    ],
  },
  {
    company: "Waseela, Lahore, PK",
    role: "Full Stack Engineer",
    date: "12/2024 — 04/2025",
    description: [
      "Deployed standalone applications (KVet and KDukaan Licensee Apps) with 800+ submissions.",
      "Streamlined development by implementing configurational fixes to TypeORM migrations.",
      "Won the Digital Signage Hackathon by building a React Native TV app for rural promotional content.",
    ],
  },
  {
    company: "RipeSeed, Lahore, PK",
    role: "Software Engineer",
    date: "09/2021 — 11/2024",
    description: [
      "Technical Lead of 5 developers for Influnity, a Web+Chrome Extension project.",
      "Delivered 10+ client projects including Satoshi's Index and ProfilePro (10K+ active users).",
      "Migrated user-bases and applications from Digital Ocean/Grafana to AWS, React, and NestJS.",
      "Developed high-priority AI-driven applications using React Native and Flask/OpenAI.",
    ],
  },
  {
    company: "RUN Pakistan, Lahore, PK",
    role: "Software Development Intern",
    date: "11/2019 — 08/2020",
    description: [
      "Contributed to the development of RUN's web application while mastering React.",
      "Built an e-commerce application from scratch using Flutter.",
    ],
  },
];

const RightPanel = ({ projects }: { projects: any[] }) => {
  return (
    <div className="flex w-full lg:w-[60%] xl:w-[68%] p-8 flex-col pt-[5%] scroll-px-10 pb-32">
      <div id="about" className="mb-6">
        <h1 className="text-xs uppercase tracking-[0.2em] font-bold text-accent/70">
          ABOUT ME
        </h1>
        <motion.div
          className="h-px bg-accent/20 mt-2 origin-left"
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
      <SectionHeading id="experience" label="EXPERIENCE" />
      <Omnitrix items={experiences} />
      {/* LEGACY — experience section moved into Omnitrix */}
      {/* <SectionHeading id="experience" label="EXPERIENCE" />
      <div className="flex flex-col flex-wrap">
        <Experience />
      </div> */}
      <SectionHeading id="projects" label="PROJECTS" />
      <div className="flex flex-col lg:flex-row flex-wrap">
        <Projects projects={projects} />
      </div>
      <SectionHeading id="skills" label="SKILLS" />
      <div className="flex flex-col flex-wrap">
        <Skills />
      </div>
      <SectionHeading id="education" label="EDUCATION" />
      <div className="group relative flex flex-col gap-3 p-6 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:bg-zinc-900/60 shadow-xl">
        <div className="absolute left-0 top-6 w-1 h-6 bg-accent/20 rounded-r-full transition-all group-hover:h-8 group-hover:bg-accent" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-1 pl-2">
          <span className="text-sm font-bold text-zinc-100 group-hover:text-accent">
            BS Computer Science
          </span>
          <span className="text-[10px] font-mono text-zinc-500 whitespace-nowrap text-right">
            FAST-NUCES, Lahore, PK
          </span>
        </div>
        <div className="pl-2">
          <p className="text-[11px] font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed flex items-center gap-2">
            <span className="text-accent/50">✦</span>
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
