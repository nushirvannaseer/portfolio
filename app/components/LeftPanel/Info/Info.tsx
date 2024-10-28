"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

interface Props {
  icon: any;
  title: string;
  text: string;
  link: string;
}

const Info = ({ icon, title, text, link }: Props) => {
  return (
    <Link
      href={link}
      data-tooltip-id={`${text}-tooltip`}
      data-tooltip-content={title}
      className="flex flex-row align-middle justify-start text-xs"
    >
      <Image src={icon} height={30} alt="" className="mx-2" />
      <Tooltip id={`${text}-tooltip`} />
    </Link>
  );
};

export default Info;
