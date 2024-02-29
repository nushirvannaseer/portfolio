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

const Project = ({ project }: any) => {
	return (
		<Link
			href={project.link}
			target="_blank"
			className="flex flex-col relative sm:flex-row mx-auto lg:mx-auto rounded-md p-5 m-5 w-full lg:w-[100%] min-w-[150px] min-h-[200px] lg:max-h-[300px] lg:min-h-[250px] sm:max-h-[350px] hover:cursor-pointer transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-[3px_3px_10px_-2px_#3FC280] hover:shadow-green-900"
		>
			<div className="mx-auto my-auto rounded-lg mb-4 lg:mb-0 sm:w-1/3 lg:w-1/3">
				<Image
					src={project.image}
					alt="image"
					width={360}
					className="object-fit"
				/>
				<div className="flex flex-row flex-wrap mt-5 sm:mt-10 justify-center mb-5 sm:mb-0 sm:justify-start">
					{project.techStack.map((tech: any, _: any) =>
						tech.logo ? (
							<Image
								className="mx-1"
								height={20}
								key={_}
								src={tech.logo}
								alt="hehe"
							/>
						) : (
							<></>
						)
					)}
				</div>
			</div>
			<div className="sm:ml-10 flex-col sm:w-2/3 lg:w-2/3">
				<div className="flex flex-row justify-center sm:justify-between sm:pr-10">
					
						<p className="text-xs text-center sm:text-left md:text-sm font-bold  my-auto">
							{project.name}
						</p>
					<div className="hidden sm:block">
						<p className="text-xs text-center sm:text-left md:text-xs text-green-400">
							{monthNames[project.date.start.getUTCMonth()] +
								" " +
								project.date.start.getFullYear()}{" "}
							-{" "}
							{project.date?.end
								? monthNames[project.date?.end?.getUTCMonth()] +
								  " " +
								  project.date?.end?.getFullYear()
								: "Present"}
						</p>
						<p className="text-xs text-center sm:text-left md:text-xs text-gray-300">
							<ul>
								{project.roles.map((role: any, _: any) => (
									<li className="ml-2 list-disc" key={_ + _ + _}>
										{role}
									</li>
								))}
							</ul>
						</p>
					</div>
				</div>
				<div className="hidden sm:block text-xs sm:text-left text-center sm:mt-5 text-gray-400 font-mono max-w-[70%]">
					<ul className="list-disc">
						{project.description.map((line: any, _: any) => {
							return (
								<li key={_ + _}>
									<p className="text-xs my-1">
										{line}
										<br />
									</p>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="hidden sm:flex flex-row-reverse absolute top-5 right-5">
					<Image
						className=""
						src={NewWindow}
						width={25}
						alt="open in new tab"
					/>
				</div>
			</div>
		</Link>
	);
};

export default Project;
