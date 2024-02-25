import React from 'react'
import SkillBox from './SkillBox/SkillBox';
import WebIcon from '@/app/assets/images/Profile.svg';

import ReactIcon from "@/app/assets/images/React.svg";
import FlaskIcon from "@/app/assets/images/Flask.svg";
import NodeIcon from "@/app/assets/images/Node.svg";
import NextIcon from "@/app/assets/images/Next.svg";
import JSIcon from "@/app/assets/images/JS.svg";
import PythonIcon from "@/app/assets/images/Python.svg";
import DockerIcon from "@/app/assets/images/Docker.svg";
import LatexIcon from "@/app/assets/images/Latex.svg";
import MongoDBIcon from "@/app/assets/images/MongoDB.svg";
import TensorFlowIcon from "@/app/assets/images/TensorFlow.svg";
import PyTorchIcon from "@/app/assets/images/PyTorch.svg";
import WordIcon from "@/app/assets/images/Word.svg";
import FlutterIcon from "@/app/assets/images/Flutter.svg";
import AWSIcon from "@/app/assets/images/AWS.svg";
import SQLIcon from "@/app/assets/images/SQL.svg";
import NestIcon from "@/app/assets/images/Nest.svg";
import OverleafIcon from "@/app/assets/images/Overleaf.svg";

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
		<div className="flex bg-slate-900 w-full lg:w-[73%] p-8 h-full rounded-xl lg:my-5 flex-col border-slate-800 border">
			<h1 className="text-xl font-bold">
				Who am I? No, seriously. Does anyone know?
		  </h1>
			<p className="mt-5 text-sm">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
				mauris id ipsum semper fermentum. Donec posuere pellentesque leo quis
				convallis. Sed sed fermentum turpis, at vehicula lacus. Nullam dapibus
				iaculis dui non vehicula. Suspendisse in augue ut magna semper venenatis
				a id purus. Nam nec risus sed sapien aliquam auctor. Nullam sit amet
				bibendum diam. Nulla blandit dolor sed leo sagittis tincidunt. Nam
				accumsan magna vel nibh varius vulputate. Ut hendrerit vestibulum
				libero, sed blandit ligula consequat id.
			</p>
			<h1 className="text-xl font-bold mt-8">The stuff I do</h1>
		  <div className="flex flex-col lg:flex-row flex-wrap">
			  {skills.map((skill, _) => <SkillBox key={_} skill={skill} />)}
			</div>
		</div>
	);
}

export default RightPanel