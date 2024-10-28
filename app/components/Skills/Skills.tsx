"use client";
import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import IconCloud from "@/components/ui/icon-cloud";

const Skills = () => {
  return <IconCloudDemo />;
};

export default Skills;

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "react",
  "flutter",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "mongodb",
  "python",
  "flask",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="flex size-full max-w-sm md:max-w-xl items-center justify-center  overflow-hidden  shadow-lg shadow-green-900/50 rounded-full mx-auto px-20 py-16">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
