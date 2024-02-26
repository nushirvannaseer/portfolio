"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
	skill: {
		title: string;
		description: string;
		icons: any;
	};
}

const SkillBox = ({ skill: { title, description, icons } }: Props) => {
	const [currentIcon, setCurrentIcon] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setCurrentIcon((currentIcon + 1) % icons.length);
		}, 2000);
	});

	return (
		<div className="z-20 my-5 md:mx-auto flex-col flex sm:flex-row rounded-md border-green-900 hover:shadow-green-900 hover:shadow-[3px_3px_15px_-5px_#3FC280] border-[0.5px] p-5 w-full lg:w-[45%] min-w-1/2 justify-center align-middle lg:min-h-[40%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:cursor-pointer">
			<Image
				src={icons[currentIcon]}
				alt="hehe"
				height={32}
				width={32}
				className="mx-auto transition-opacity ease-in duration-500"
			/>
			<div className="flex flex-col mx-5 my-auto">
				<span className="font-bold mx-auto sm:m-0 text-center sm:text-left">
					{title}
				</span>
				<span className="text-xs mx-auto sm:m-0 text-center sm:text-left">
					{description}
				</span>
			</div>
		</div>
	);
};

export default SkillBox;
