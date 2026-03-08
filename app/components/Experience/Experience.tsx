import React from "react";

const experiences = [
  {
    company: "The Moonshot Factory (Kaleidoscope Team)",
    role: "Full Stack Engineer",
    date: "04/2025 — PRESENT",
    description: [
      "Slashed dashboard and insight page loading times from 6s to under 2s by migrating heavy logic to Redux with redux-persist.",
      "Architected an end-to-end correlations bot utilizing the AWS SDK for GoLang, Neptune, and S3.",
      "Strengthened security by upgrading AWS Amplify and engineering an SSO system with MFA for AWS Cognito.",
      "Led major performance optimizations and achieved 320+ contributions within the first year.",
    ],
  },
  {
    company: "Waseela, Lahore, PK",
    role: "Full Stack Engineer",
    date: "12/2024 — 04/2025",
    description: [
      "Deployed standalone applications (KVet and KDukaan Licensee Apps) with 800+ submissions.",
      "Streamlined development by implementing configurational fixes to TypeORM migrations.",
      "Won the Digital Signage Hackathon by building a React Native TV app for rural promotional content.",
    ],
  },
  {
    company: "RipeSeed, Lahore, PK",
    role: "Software Engineer",
    date: "09/2021 — 11/2024",
    description: [
      "Technical Lead of 5 developers for Influnity, a Web+Chrome Extension project.",
      "Delivered 10+ client projects including Satoshi's Index and ProfilePro (10K+ active users).",
      "Migrated user-bases and applications from Digital Ocean/Grafana to AWS, React, and NestJS.",
      "Developed high-priority AI-driven applications using React Native and Flask/OpenAI.",
    ],
  },
  {
    company: "RUN Pakistan, Lahore, PK",
    role: "Software Development Intern",
    date: "11/2019 — 08/2020",
    description: [
      "Contributed to the development of RUN's web application while mastering React.",
      "Built an e-commerce application from scratch using Flutter.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col gap-6">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-accent/5"
        >
          {/* Subtle Indicator */}
          <div className="absolute left-0 top-6 w-1 h-6 bg-accent/20 rounded-r-full transition-all group-hover:h-12 group-hover:bg-accent" />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-1">
            <h2 className="text-sm font-bold text-zinc-100 group-hover:text-accent transition-colors pl-2">
              {exp.role}{" "}
              <span className="text-zinc-500 font-normal ml-1">
                @ {exp.company}
              </span>
            </h2>
            <span className="text-[10px] font-mono text-zinc-500 whitespace-nowrap pl-2 sm:pl-0">
              {exp.date}
            </span>
          </div>

          <ul className="space-y-2 pl-2">
            {exp.description.map((desc, i) => (
              <li
                key={i}
                className="text-[11px] text-zinc-400 font-mono leading-relaxed flex items-start gap-2"
              >
                <span className="text-accent/50 mt-1 shrink-0">→</span>
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
