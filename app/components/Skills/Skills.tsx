"use client";
import React from "react";
import {  Zoom } from "react-awesome-reveal";
import "react-tooltip/dist/react-tooltip.css";
import TSIcon from "@/app/assets/icons/TS.svg";
import JSIcon from "@/app/assets/icons/JS.svg";
import NextIcon from "@/app/assets/icons/Next.svg";
import ReactIcon from "@/app/assets/icons/React.svg";
import NodeIcon from "@/app/assets/icons/Node.svg";
import MongoDBIcon from "@/app/assets/icons/MongoDB.svg";
import PGSQLIcon from "@/app/assets/icons/PGSQL.svg";
import PrismaIcon from "@/app/assets/icons/Prisma.svg";
import NestIcon from "@/app/assets/icons/Nest.svg";
import AWSIcon from "@/app/assets/icons/AWS.svg";
import PythonIcon from "@/app/assets/icons/Python.svg";
import PyTorchIcon from "@/app/assets/icons/PyTorch.svg";
import TensorflowIcon from "@/app/assets/icons/TensorFlow.svg";
import ReduxIcon from "@/app/assets/icons/Redux.svg";
import GraphQLIcon from "@/app/assets/icons/GraphQL.svg";
import FlaskIcon from "@/app/assets/icons/Flask.svg";
import GatsbyIcon from "@/app/assets/icons/Gatsby.svg";
import VueIcon from "@/app/assets/icons/Vue.svg";
import FlutterIcon from "@/app/assets/icons/Flutter.svg";
import TailwindIcon from "@/app/assets/icons/Tailwind.svg";
import MUIIcon from "@/app/assets/icons/MUI.svg";
import BootstrapIcon from "@/app/assets/icons/Bootstrap.svg";
import DockerIcon from "@/app/assets/icons/Docker.svg";
import GitIcon from "@/app/assets/icons/Git.svg";
import LatexIcon from "@/app/assets/icons/Latex.svg";
import Image from "next/image";

interface Skill {
	name: string;
	logo: any;
}

const advancedSkills = [
	{
		name: "TypeScript",
		logo: TSIcon,
	},
	{
		name: "JavaScript",
		logo: JSIcon,
	},
	{
		name: "NextJS",
		logo: NextIcon,
	},
	{
		name: "ReactJS",
		logo: ReactIcon,
	},
	{
		name: "NodeJS",
		logo: NodeIcon,
	},
	{
		name: "Python",
		logo: PythonIcon,
	},

	{
		name: "Flask",
		logo: FlaskIcon,
	},
	{
		name: "MongoDB",
		logo: MongoDBIcon,
	},
	{
		name: "PostgreSQL",
		logo: PGSQLIcon,
	},
	{
		name: "AWS",
		logo: AWSIcon,
	},
	{
		name: "Git",
		logo: GitIcon,
	},
	{
		name: "Tailwind CSS",
		logo: TailwindIcon,
	},
	{
		name: "Material UI",
		logo: MUIIcon,
	},
] as Skill[];
const intermediateSkills = [
	{
		name: "PyTorch",
		logo: PyTorchIcon,
	},
	{
		name: "Prisma",
		logo: PrismaIcon,
	},
	{
		name: "NestJS",
		logo: NestIcon,
	},
	{
		name: "Redux",
		logo: ReduxIcon,
	},

	{
		name: "Bootstrap",
		logo: BootstrapIcon,
	},
] as Skill[];
const basicSkills = [
	{
		name: "TensorFlow",
		logo: TensorflowIcon,
	},

	{
		name: "GraphQL",
		logo: GraphQLIcon,
	},

	{
		name: "GatsbyJs",
		logo: GatsbyIcon,
	},
	{
		name: "VueJS",
		logo: VueIcon,
	},
	{
		name: "Flutter",
		logo: FlutterIcon,
	},
	{
		name: "Docker",
		logo: DockerIcon,
	},

	{
		name: "Latex",
		logo: LatexIcon,
	},
] as Skill[];

const skills: Skill[][] = [advancedSkills, intermediateSkills, basicSkills];

const SkillLevel = (level: number) => {
	const text =
		level === 0
			? "Expert in"
			: level === 1
			? "Worked extensively with"
			: "Know how of";
	return <span className="text-xs font-mono text-green-500">{text}:</span>;
};

const Skills = () => {
	return (
		<div className="flex flex-col md:flex-row flex-wrap gap-5 mt-5  h-full justify-between p-5 hover:cursor-pointer">
			{skills.map((skillCategory: Skill[], _: number) => {
				return (
					<div key={_+"_skill_category"} className="flex flex-col mb-5">
						<h1 className="mb-5">{SkillLevel(_)}</h1>

						<div className="flex flex-row flex-wrap gap-5 justify-start">
							{skillCategory.map((skill: any, _: any) => (
								<Zoom key={_+"_skill_item"}>
									<div className="font-mono text-[0.6rem] gap-10">
										<Image
											src={skill.logo}
											alt={skill.name}
											height={30}
											className="mx-auto mb-5"
										/>
										<span className="mx-auto">{skill.name}</span>
									</div>
								</Zoom>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Skills;
