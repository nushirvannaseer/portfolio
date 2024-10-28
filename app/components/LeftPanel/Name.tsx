"use client";

import { TypeAnimation } from "react-type-animation";

export default function Name() {
  return (
    <>
      <TypeAnimation
        sequence={["nushirvan naseer"]}
        wrapper="span"
        speed={50}
        style={{
          fontSize: "2.25rem",
          display: "inline-block",
          color: "green",
          fontFamily: "monospace",
        }}
        cursor={false}
        repeat={0}
      />
    </>
  );
}
