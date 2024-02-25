import React from "react";
import Info from "./Info/Info";
import Image from "next/image";
import ProfileIcon from "../../assets/images/Profile.svg";
import PhoneIcon from "@/app/assets/images/Phone.svg";
import EmailIcon from "@/app/assets/images/Email.svg";
import GithubIcon from "@/app/assets/images/Github.svg";
import DevIcon from "@/app/assets/images/Dev.svg";

const LeftPanel = () => {
	return (
		<div className="flex bg-slate-900 border-slate-800 border w-full lg:w-[25%] p-5 h-full rounded-xl my-5 flex-wrap overflow-clip">
			<div className="flex flex-col align-middle mx-auto">
				<Image
					src={ProfileIcon}
					alt="profile"
					height={100}
					width={100}
					className="mx-auto"
				/>
				<span className="mx-auto text-xl mt-5">Nushirvan Naseer</span>
				<span className="text-md my-2 mx-auto mb-5">Software Engineer</span>
				<hr />
				<div className="flex flex-row flex-wrap lg:flex-col mt-5 overflow-ellipsis justify-start">
					<Info
						icon={EmailIcon}
						title={"Email"}
						text={"nushirvannaseer@gmail.com"}
					/>
					<Info icon={PhoneIcon} title={"Contact"} text={"+923200435969"} />
					<Info
						icon={GithubIcon}
						title={"Github"}
						text={"github.com/nushirvannaseer"}
					/>
					<Image height={150} src={DevIcon} alt="devicon" className="hidden lg:flex mt-5" />
				</div>
			</div>
		</div>
	);
};

export default LeftPanel;
