import React from 'react'
import SkillBox from './SkillBox/SkillBox';
import ReactIcon from "@/app/assets/icons/React.svg";
import FlaskIcon from "@/app/assets/icons/Flask.svg";
import NodeIcon from "@/app/assets/icons/Node.svg";
import NextIcon from "@/app/assets/icons/Next.svg";
import JSIcon from "@/app/assets/icons/JS.svg";
import PythonIcon from "@/app/assets/icons/Python.svg";
import DockerIcon from "@/app/assets/icons/Docker.svg";
import LatexIcon from "@/app/assets/icons/Latex.svg";
import MongoDBIcon from "@/app/assets/icons/MongoDB.svg";
import TensorFlowIcon from "@/app/assets/icons/TensorFlow.svg";
import PyTorchIcon from "@/app/assets/icons/PyTorch.svg";
import WordIcon from "@/app/assets/icons/Word.svg";
import FlutterIcon from "@/app/assets/icons/Flutter.svg";
import AWSIcon from "@/app/assets/icons/AWS.svg";
import SQLIcon from "@/app/assets/icons/SQL.svg";
import NestIcon from "@/app/assets/icons/Nest.svg";
import OverleafIcon from "@/app/assets/icons/Overleaf.svg";
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const webDevIcons = [
	ReactIcon,
	FlaskIcon,
	NodeIcon,
	NextIcon,
	NestIcon,
	JSIcon,
	AWSIcon,
	DockerIcon,
	MongoDBIcon,
	SQLIcon
];
const appDevIcons = [FlutterIcon, ReactIcon, MongoDBIcon, AWSIcon, SQLIcon];

const deepLearningIcons = [
	PythonIcon,
	PyTorchIcon,
	TensorFlowIcon,
	DockerIcon,
	AWSIcon,
];

const contentWritingIcons = [WordIcon, LatexIcon, OverleafIcon];


const skills = [
	{
		title: "Web Development",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hehe wow this is great. Aliquam id mauris id ipsum semperfermentum.",
		icons: webDevIcons,
	},
	{
		title: "Mobile App Development",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id mauris id ipsum semper fermentum.",
		icons: appDevIcons,
	},
	{
		title: "Deep Learning and AI",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id mauris id ipsum semper fermentum.",
		icons: deepLearningIcons,
	},
	{
		title: "Technical Content Writing",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id mauris id ipsum semper fermentum.",
		icons: contentWritingIcons,
	},
];

const RightPanel = () => {
  return (
		<div className="flex w-full lg:w-[60%] p-8 h-full flex-col pt-[5%] scroll-px-10 lg:max-h-screen">
			<h1 id="about" className="text-md text-green-600">ABOUT ME</h1>
			<p className="mt-5 text-xs font-mono">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
				mauris id ipsum semper fermentum. Donec posuere pellentesque leo quis
				convallis. Sed sed fermentum turpis, at vehicula lacus. Nullam dapibus
				iaculis dui non vehicula. Suspendisse in augue ut magna semper venenatis
				a id purus. Nam nec risus sed sapien aliquam auctor. Nullam sit amet
				bibendum diam. Nulla blandit dolor sed leo sagittis tincidunt. Nam
				accumsan magna vel nibh varius vulputate. Ut hendrerit vestibulum
				libero, sed blandit ligula consequat id.
			</p>
			<h1 className="text-md mt-16 text-green-600">WHAT I DO</h1>
			<div className="flex flex-col lg:flex-row flex-wrap">
				{skills.map((skill, _) => (
					<SkillBox key={_} skill={skill} />
				))}
			</div>
			<h1 id="projects" className="mb-5 text-md mt-16 text-green-600">PROJECTS</h1>
			<div className="flex flex-col lg:flex-row flex-wrap">
				<Projects />
			</div>
		  <h1 id="skills" className="text-md mt-16 text-green-600">SKILLS</h1>
		  <div className="flex flex-col lg:flex-row flex-wrap">
			  <Skills/>
		  </div>
		</div>
	);
}

export default RightPanel