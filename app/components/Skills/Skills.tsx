"use client";
import React from "react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

import PrismaIcon from "@/app/assets/icons/Prisma.svg";
import TypescriptIcon from "@/app/assets/icons/TS.svg";
import JavascriptIcon from "@/app/assets/icons/JS.svg";
import ReactIcon from "@/app/assets/icons/React.svg";
import NodejsIcon from "@/app/assets/icons/Node.svg";
import NextjsIcon from "@/app/assets/icons/Next.svg";
import AwsIcon from "@/app/assets/icons/AWS.svg";
import PostgresqlIcon from "@/app/assets/icons/PGSQL.svg";
import MongodbIcon from "@/app/assets/icons/MongoDB.svg";
import PythonIcon from "@/app/assets/icons/Python.svg";
import FlaskIcon from "@/app/assets/icons/Flask.svg";
import DockerIcon from "@/app/assets/icons/Docker.svg";
import GitIcon from "@/app/assets/icons/Git.svg";
import GithubIcon from "@/app/assets/icons/Github.svg";
import FlutterIcon from "@/app/assets/icons/Flutter.svg";
import GraphQLIcon from "@/app/assets/icons/GraphQL.svg";
import ReduxIcon from "@/app/assets/icons/Redux.svg";
import NestIcon from "@/app/assets/icons/Nest.svg";
import SQLIcon from "@/app/assets/icons/SQL.svg";
// Newly added icons
import GoIcon from "@/app/assets/icons/Go.svg";
import CypressIcon from "@/app/assets/icons/Cypress.svg";
import JestIcon from "@/app/assets/icons/Jest.svg";
import TailwindIcon from "@/app/assets/icons/Tailwind.svg";
import MUIIcon from "@/app/assets/icons/MUI.svg";
import BootstrapIcon from "@/app/assets/icons/Bootstrap.svg";
import VueIcon from "@/app/assets/icons/Vue.svg";
import WebpackIcon from "@/app/assets/icons/Webpack.svg";

const icons = [
  { src: TypescriptIcon, name: "TypeScript" },
  { src: JavascriptIcon, name: "JavaScript" },
  { src: GoIcon, name: "GoLang" },
  { src: ReactIcon, name: "React" },
  { src: NextjsIcon, name: "Next.js" },
  { src: NodejsIcon, name: "Node.js" },
  { src: NestIcon, name: "NestJS" },
  { src: VueIcon, name: "Vue" },
  { src: PythonIcon, name: "Python" },
  { src: FlaskIcon, name: "Flask" },
  { src: FlutterIcon, name: "Flutter" },
  { src: TailwindIcon, name: "Tailwind" },
  { src: MUIIcon, name: "MUI" },
  { src: BootstrapIcon, name: "Bootstrap" },
  { src: ReduxIcon, name: "Redux" },
  { src: GraphQLIcon, name: "GraphQL" },
  { src: AwsIcon, name: "AWS" },
  { src: DockerIcon, name: "Docker" },
  { src: MongodbIcon, name: "MongoDB" },
  { src: PostgresqlIcon, name: "PostgreSQL" },
  { src: SQLIcon, name: "SQL" },
  { src: PrismaIcon, name: "Prisma" },
  { src: WebpackIcon, name: "Webpack" },
  { src: CypressIcon, name: "Cypress" },
  { src: JestIcon, name: "Jest" },
  { src: GitIcon, name: "Git" },
  { src: GithubIcon, name: "GitHub" },
];

const row1 = icons.slice(0, Math.ceil(icons.length / 2));
const row2 = icons.slice(Math.ceil(icons.length / 2));

const IconCard = ({ src, name }: { src: any; name: string }) => (
  <div className="group/icon relative flex items-center gap-2.5 rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-accent/5 mx-2">
    <div className="flex h-7 w-7 shrink-0 items-center justify-center">
      <Image
        src={src}
        alt={name}
        width={24}
        height={24}
        className="h-5 w-5 object-contain opacity-70 transition-all duration-300 group-hover/icon:opacity-100 group-hover/icon:scale-110"
      />
    </div>
    <span className="text-[11px] font-mono text-zinc-500 whitespace-nowrap group-hover/icon:text-zinc-300 transition-colors">
      {name}
    </span>
  </div>
);

const Skills = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 py-6 backdrop-blur-md">
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-zinc-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-zinc-950 to-transparent" />

      <div className="flex flex-col gap-4">
        <Marquee pauseOnHover className="[--duration:35s]">
          {row1.map((icon) => (
            <IconCard key={icon.name} src={icon.src} name={icon.name} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:28s]">
          {row2.map((icon) => (
            <IconCard key={icon.name} src={icon.src} name={icon.name} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
