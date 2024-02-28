"use client";
import React from "react";
import { Bounce, Flip, Rotate } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";
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

const skills = [
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
		name: "MongoDB",
		logo: MongoDBIcon,
	},
	{
		name: "PostgreSQL",
		logo: PGSQLIcon,
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
		name: "AWS",
		logo: AWSIcon,
	},
	{
		name: "Python",
		logo: PythonIcon,
	},
	{
		name: "PyTorch",
		logo: PyTorchIcon,
	},
	{
		name: "TensorFlow",
		logo: TensorflowIcon,
	},
	{
		name: "Redux",
		logo: ReduxIcon,
	},
	{
		name: "GraphQL",
		logo: GraphQLIcon,
	},
	{
		name: "Flask",
		logo: FlaskIcon,
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
		name: "Tailwind CSS",
		logo: TailwindIcon,
	},
	{
		name: "Material UI",
		logo: MUIIcon,
	},
	{
		name: "Bootstrap",
		logo: BootstrapIcon,
	},
	{
		name: "Docker",
		logo: DockerIcon,
	},
	{
		name: "Git",
		logo: GitIcon,
	},
	{
		name: "Latex",
		logo: LatexIcon,
	},
];

const Skills = () => {
	return (
		<div className="flex flex-row flex-wrap gap-5 mt-5 w-full h-full justify-center p-5 hover:cursor-pointer">
			<Bounce triggerOnce={false}>
				{skills.map((skill: any, _: any) => (
					<div
						key={_}
						data-tooltip-id={`${_}-tooltip`}
						data-tooltip-content={ skill.name}
						className="font-mono text-xs mx-auto"
					>
						<Image
							src={skill.logo}
							alt={skill.name}
							height={30}
							className="mx-auto mb-5"
						/>
						{skill.name}
						<Tooltip id={`${_}-tooltip`} />
					</div>
				))}
			</Bounce>
		</div>
	);
};

export default Skills;
