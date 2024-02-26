'use client';

import React from "react";
import { TypeAnimation } from "react-type-animation";

const Loading = () => {
	return (
		<div className="flex justify-center align-middle w-full p-auto h-screen m-auto">
			<TypeAnimation
				sequence={["nushirvan naseer"]}
				wrapper="span"
				speed={50}
				style={{
					fontSize: "2.5em",
					display: "inline-block",
					color: "green",
					fontFamily: "monospace",
				}}
				cursor={false}
				repeat={0}
			/>
		</div>
	);
};

export default Loading;
