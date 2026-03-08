import Image from "next/image";
import Link from "next/link";
import React from "react";
import NewWindow from "@/app/assets/icons/NewWindow.svg";
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Project = ({
  project,
  featured,
}: {
  project: any;
  featured?: boolean;
}) => {
  return (
    <Link
      href={project.link || "#"}
      target="_blank"
      className={`group relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500/50 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-green-500/10 ${
        featured ? "md:flex-row" : ""
      }`}
    >
      {/* Background Glow Effect */}
      <div className="absolute -inset-px bg-gradient-to-br from-green-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div
        className={`relative flex flex-col p-6 h-full ${featured ? "md:w-full" : ""}`}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-zinc-100 group-hover:text-green-400 transition-colors">
              {project.name}
            </h3>
            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
              <span className="text-green-500/80 uppercase">
                {monthNames[project.date.start.getUTCMonth()]}{" "}
                {project.date.start.getFullYear()}
              </span>
              <span>•</span>
              <span className="text-zinc-400">
                {project.date?.end
                  ? `${monthNames[project.date?.end?.getUTCMonth()]} ${project.date?.end?.getFullYear()}`
                  : "Present"}
              </span>
            </div>
          </div>
          <Image
            src={NewWindow}
            width={18}
            height={18}
            alt="Link"
            className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </div>

        {/* Roles */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.roles.map((role: any, i: number) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-bold bg-green-500/10 text-green-500 rounded-full border border-green-500/20"
            >
              {role}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="flex-grow mb-6">
          <ul className="space-y-2">
            {project.description.map((line: any, i: number) => (
              <li
                key={i}
                className="text-[11px] text-zinc-400 font-mono leading-relaxed flex items-start gap-2"
              >
                <span className="text-green-500 mt-1 shrink-0">›</span>
                {line}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <div className="flex -space-x-2">
            {project.techStack.map(
              (tech: any, i: number) =>
                tech.logo && (
                  <div key={i} className="relative group/tech">
                    <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center p-1.5 backdrop-blur-md transition-transform hover:-translate-y-1 hover:z-10 shadow-lg">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={16}
                        height={16}
                        className="grayscale opacity-70 group-hover/tech:grayscale-0 group-hover/tech:opacity-100 transition-all"
                      />
                    </div>
                    {/* Tooltip */}
                    <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-800 border border-white/10 px-2 py-0.5 text-[9px] font-mono text-zinc-300 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200 z-20 shadow-lg">
                      {tech.name}
                    </span>
                  </div>
                ),
            )}
          </div>
          {project.image && featured && (
            <div className="hidden lg:block ml-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <Image
                src={project.image}
                alt="preview"
                width={80}
                className="grayscale rounded-md"
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Project;
