"use client"
import React from "react";
import Project from "./ProjectComponent";
import SatoshisIndexImage from "@/app/assets/images/SatoshisIndex.jpeg";
import ProfileProImage from "@/app/assets/images/ProfilePro.jpeg";
import AppointmentCoreImage from "@/app/assets/images/AppointmentCore.png";
import MLCalculatorImage from "@/app/assets/images/MLCalculator.jpeg";
import BeltwayBriefImage from "@/app/assets/images/BeltwayBrief.jpeg";
import NousTalkImage from "@/app/assets/images/NousTalk.jpeg";
import ReactIcon from "@/app/assets/icons/React.svg";
import NodeIcon from "@/app/assets/icons/Node.svg";
import NestIcon from "@/app/assets/icons/Nest.svg";
import AWSIcon from "@/app/assets/icons/AWS.svg";
import MongoDBIcon from "@/app/assets/icons/MongoDB.svg";
import { Fade } from "react-awesome-reveal";
import DockerIcon from '@/app/assets/icons/Docker.svg';
import TSIcon  from '@/app/assets/icons/TS.svg';
import FlaskIcon from '@/app/assets/icons/Flask.svg';
import  PythonIcon  from '@/app/assets/icons/Python.svg';
import  TensorFlowIcon  from '@/app/assets/icons/TensorFlow.svg';
import  PGSQLIcon from '@/app/assets/icons/PGSQL.svg';

const projects = [
	{
		name: "ProfilePro",
		link: "https://chromewebstore.google.com/detail/profilepro/gllhamnkpecmfhgdbildlgbbopofnnoe",
		image: ProfileProImage,
		description: [
			"Google Business Optimization Chrome Extension",
			"Worked as the primary developer on the extension for 3 months",
			"Currently managing a team of 3 developers for updates and maintenance",
		],
		date: {
			start: new Date("2023-1-2"),
			end: null,
		},
		roles: ["Software Engineer", "Project Manager"],
		interestingFact: {
			text: "9000+ downloads and rated 4.9 stars",
			icon: null,
		},
		techStack: [
			{
				logo: ReactIcon,
				name: "ReactJS",
			},
			{
				logo: NestIcon,
				name: "NodeJS",
			},
			{
				logo: MongoDBIcon,
				name: "MongoDB",
			},
			{
				logo: AWSIcon,
				name: "AWS",
			},
		],
	},
	{
		name: "Satoshi's Index",
		link: "https://app.satoshisindex.com",
		image: SatoshisIndexImage,
		description: [
			"Cryptocurrency Buying Automation Tool",
			"Migrated the initial version of the platform from Grafana to ReactJS and NestJS",
			"Implemented payments with Stripe, and then later with Maverick Payments",
			"Currently managing a team of 2 developers for site updates and maintenance",
		],
		date: {
			start: new Date("2022-9-2"),
			end: null,
		},
		roles: ["Primary Software Engineer", "Project Manager"],
		techStack: [
			{
				logo: ReactIcon,
				name: "React JS",
			},
			{
				logo: NestIcon,
				name: "Nest JS",
			},
			{
				logo: PGSQLIcon,
				name: "PostgreSQL",
			},
			{
				logo: AWSIcon,
				name: "AWS",
			},
		],
	},
	{
		name: "BeltwayBrief",
		link: "http://beltwaybrief.com",
		image: BeltwayBriefImage,
		description: [
			"Designed the architecture for a GPT based poltical newsletter summarizer",
			"Advised on the usage of NLP tools and tech",
			"Oversaw the development of the project and successfull delivery to the client",
		],
		date: {
			start: new Date("2023-6-2"),
			end: new Date("2024-1-2"),
		},
		roles: ["Tech lead", "Project Manager"],
		techStack: [
			{
				logo: FlaskIcon,
				name: "Flask",
			},
			{
				logo: PythonIcon,
				name: "Python",
			},
			{
				logo: AWSIcon,
				name: "AWS",
			},
			{
				logo: MongoDBIcon,
				name: "MongoDB",
			},
		],
	},
	{
		name: "PreCD34+ Calculator",
		link: "https://precd34.com",
		image: MLCalculatorImage,
		description: [
			"Developed a front-end solution for AI Models used to calculate PreCD34+ Levels in patients",
			"Developed the backend and modified the Deep Learning algorithms to be compatible with Flask",
			"Deployed the project to AWS and successfully delivery the web app to the client",
		],
		date: {
			start: new Date("2023-11-2"),
			end: new Date("2023-11-2"),
		},
		roles: ["Primary Software Engineer"],
		techStack: [
			{
				logo: FlaskIcon,
				name: "Flask",
			},
			{
				logo: PythonIcon,
				name: "Python",
			},
			{
				logo: AWSIcon,
				name: "AWS",
			},
			{
				logo: TensorFlowIcon,
				name: "MongoDB",
			},
		],
	},
	{
		name: "NousTalk",
		link: "https://noustalk.com/",
		image: NousTalkImage,

		description: [
			"Collaborated with MythicTech and a team of upto 10 people",
			"Lead the Ripeseed team for fixes on the application",
			"Redesigned the UI side for both therapists and clients in React",
			"Implemented multiple booking related fixes and updates to the Node and .NET backends",
		],
		date: {
			start: new Date("2022-3-2"),
			end: new Date("2022-5-2"),
		},
		roles: ["Software Engineer", "Ripeseed Team Lead"],
		techStack: [
			{
				logo: ReactIcon,
				name: "React JS",
			},
			{
				logo: NodeIcon,
				name: "Node JS",
			},
			{
				logo: DockerIcon,
				name: "Docker",
			},
		],
	},
	{
		name: "AppointmentCore",
		link: "https://chromewebstore.google.com/detail/appointmentcore-plugin-fo/mmjcajbhlpjbaegiliagmjaapfkicjml",
		image: AppointmentCoreImage,
		description: [
			"Appointment Booking application and Chrome plugin",
			"Completely redesigned the frontend of the application in React Native Web",
			"Implemented booking schedule fixes using moment.js",
			"Implemented robust integrations with Salesforce, Gmail, Outlook and Keepa",
		],
		date: {
			start: new Date("2021-9-2"),
			end: new Date("2022-2-2"),
		},
		interestingFact: {
			text: "1000+ downloads and rated 4.4 stars",
			icon: null,
		},
		roles: ["Software Engineer"],
		techStack: [
			{
				logo: ReactIcon,
				name: "React JS",
			},
			{
				logo: NodeIcon,
				name: "Node JS",
			},
			{
				logo: TSIcon,
				name: "TypeScript",
			},
		],
	},
];

const Projects = () => {
	return (
		<div className="flex flex-col justify-center m-auto w-full flex-wrap">
		<Fade triggerOnce={true}>
			{projects.map((project, _) => (
				<Project key={_} project={project} />
			))}
		</Fade>
		</div>
	);
};

export default Projects;
