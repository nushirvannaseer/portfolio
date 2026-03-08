"use client";

import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function Name() {
  const [done, setDone] = useState(false);

  return (
    <div className="mb-2 relative">
      <TypeAnimation
        sequence={[200, "nushirvan naseer", () => setDone(true)]}
        wrapper="span"
        speed={60}
        cursor={!done}
        repeat={0}
        style={{
          fontSize: "2rem",
          display: "inline-block",
          fontFamily: "monospace",
          fontWeight: "bold",
          background:
            "linear-gradient(90deg, #4ade80, #86efac, #ffffff, #86efac, #4ade80)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: done ? "shimmer-text 4s linear infinite" : "none",
        }}
      />
    </div>
  );
}
