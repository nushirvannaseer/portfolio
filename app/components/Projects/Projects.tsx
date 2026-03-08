"use client";
import React from "react";
import Project from "./ProjectComponent";

import { motion } from "framer-motion";

const Projects = ({ projects }: { projects: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full mt-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`${index === 0 ? "lg:col-span-2" : ""}`}
        >
          <Project project={project} featured={index === 0} />
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
