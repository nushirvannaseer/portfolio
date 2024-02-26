import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = ({ project }: any) => {
	return (
		<div className="flex flex-col relative sm:flex-row mx-auto lg:mx-auto rounded-md p-5 m-5 w-full lg:w-[80%] min-w-[150px] min-h-[200px] lg:max-h-[250px] lg:min-h-[250px] max-h-[350px] hover:cursor-pointer transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-[3px_3px_10px_-2px_#3FC280] hover:shadow-green-900">
			<div className="my-0 mx-auto rounded-lg mb-4 lg:mb-0 sm:w-1/3 lg:w-1/3">
				<Image
					src={project.image}
					alt="image"
					width={200}
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
				<p className="text-xs text-center sm:text-left md:text-sm">
					{project.name}
				</p>
				<div className="hidden sm:block text-xs sm:text-left text-center sm:mt-5 text-gray-400">
					{project.description.map((line: any, _: any) => {
						return (
							<p className="text-xs my-2" key={_ + _}>
								{"->"} {line}
								<br />
							</p>
						);
					})}
				</div>
				<div className="flex flex-row-reverse absolute bottom-3 right-5">
					<button className="bg-green-800 px-4 py-1 rounded-md hover:bg-green-900 text-xs ">
						<Link href={project.link} target="_blank">
							{" "}
							Visit
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Project;
