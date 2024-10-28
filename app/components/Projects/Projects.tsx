"use client";
import React from "react";
import Project from "./ProjectComponent";

import { motion } from "framer-motion";

const Projects = ({ projects }: { projects: any[] }) => {
  return (
    <div className="flex flex-col justify-center m-auto w-full flex-wrap">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project, _) => (
          <Project key={_} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
