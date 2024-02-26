"use client"
import React from "react";
import Project from "./ProjectComponent";
import SatoshisIndexImage from "@/app/assets/images/SatoshisIndex.jpeg";
import ProfileProImage from "@/app/assets/images/ProfilePro.jpeg";
import AppointmentCoreImage from "@/app/assets/images/AppointmentCore.png";
import ReactIcon from "@/app/assets/icons/React.svg";
import NodeIcon from "@/app/assets/icons/Node.svg";
import NestIcon from "@/app/assets/icons/Nest.svg";
import SQLIcon from "@/app/assets/icons/SQL.svg";
import AWSIcon from "@/app/assets/icons/AWS.svg";
import MongoDBIcon from "@/app/assets/icons/MongoDB.svg";
import { Zoom } from "react-awesome-reveal";

const projects = [
	{
		name: "ProfilePro",
		link: "https://app.satoshisindex.com",
		image: ProfileProImage,
		description: [
			"Google Business Optimization Chrome Extension",
			"Worked as the primary developer on the extension for 3 months",
			"Currently managing a team of 3 developers for updates and maintenance",
		],

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
				logo: SQLIcon,
				name: "PostgreSQL",
			},
			{
				logo: AWSIcon,
				name: "AWS",
			},
		],
	},
	{
		name: "AppointmentCore",
		link: "https://chromewebstore.google.com/detail/appointmentcore-plugin-fo/mmjcajbhlpjbaegiliagmjaapfkicjml",
		image: AppointmentCoreImage,
		description: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		],

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
				logo: AWSIcon,
				name: "Chrome Extension",
			},
		],
	},
	{
		name: "AppointmentCore",
		link: "https://chromewebstore.google.com/detail/appointmentcore-plugin-fo/mmjcajbhlpjbaegiliagmjaapfkicjml",
		image: SatoshisIndexImage,

		description: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		],

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
				logo: null,
				name: "Chrome Extension",
			},
		],
	},
];

const Projects = () => {
	return (
		<div className="flex flex-col justify-center m-auto w-full flex-wrap">
		<Zoom triggerOnce={true}>
			{projects.map((project, _) => (
				<Project key={_} project={project} />
			))}
		</Zoom>
		</div>
	);
};

export default Projects;
