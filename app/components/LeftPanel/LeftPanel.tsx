import React from "react";
import Info from "./Info/Info";
import Image from "next/image";
import PhoneIcon from "@/app/assets/icons/Phone.svg";
import EmailIcon from "@/app/assets/icons/Email.svg";
import GithubIcon from "@/app/assets/icons/Github.svg";
import InstagramIcon from "@/app/assets/icons/Instagram.svg";
import DevIcon from "@/app/assets/icons/Dev.svg";
import LinkedInIcon from "@/app/assets/icons/LinkedIn.svg";
import Link from "next/link";
import ScrollLink from "../ScrollLink/ScrollLink";
import ChatBot from "../ChatBot/page";
import Name from "./Name";

const LeftPanel = () => {
  return (
    <div className="lg:h-full flex my-auto w-full lg:w-[40%] p-5 h-full sm:h-[70%] flex-wrap flex-row lg:sticky lg:top-0">
      <ChatBot />
      <div className="flex flex-col align-middle mx-auto sm:mx-0 lg:mx-auto my-auto">
        <h1 className="hidden">nushirvan naseer</h1>
        <Name />
        <span className="text-md my-2 mb-5 font-mono mx-auto">
          software engineer at ripeseed.io
        </span>
        <hr />
        <div className="flex flex-row mx-auto gap-5 mt-5 font-mono text-xs text-center">
          <ScrollLink scroll={true} href="#about">
            about me
          </ScrollLink>
          <ScrollLink scroll={true} href="#projects">
            projects
          </ScrollLink>
          <ScrollLink scroll={true} href="#skills">
            skills
          </ScrollLink>
        </div>

        <Image
          height={200}
          src={DevIcon}
          alt="devicon"
          className="mx-auto sm:hidden lg:flex mt-5"
        />
        <div className="flex flex-wrap flex-col mt-5 overflow-ellipsis justify-start">
          <Link
            href="/files/nushirvans-resume.pdf"
            target="_blank"
            className="my-5 rounded-md bg-green-800 hover:bg-green-900 p-2 w-[50%] mx-auto text-center"
          >
            Resume
          </Link>
          <div className="flex flex-wrap flex-row justify-center my-auto">
            <Info
              icon={EmailIcon}
              title={"Email"}
              text={"nushirvannaseer@gmail.com"}
              link={"mailto:nushirvannaseer@gmail.com"}
            />
            <Info
              icon={PhoneIcon}
              title={"Contact"}
              text={"+923200435969"}
              link={"tel:+923200435969"}
            />
            <Info
              icon={GithubIcon}
              title={"Github"}
              text={"github.com/nushirvannaseer"}
              link={"https://github.com/nushirvannaseer"}
            />
            <Info
              icon={LinkedInIcon}
              title={"Linkedin"}
              text={"https://linkedin.com/in/nushirvan-naseer"}
              link={"https://linkedin.com/in/nushirvan-naseer"}
            />
            <Info
              icon={InstagramIcon}
              title={"Instagram"}
              text={"@nush0w0rvan"}
              link={"https://www.instagram.com/nush0w0rvan"}
            />
          </div>
        </div>
      </div>
      <Image
        height={200}
        src={DevIcon}
        alt="devicon"
        className="hidden sm:block sm:mx-auto lg:hidden"
      />
    </div>
  );
};

export default LeftPanel;
