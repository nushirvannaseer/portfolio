import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import ReactIcon from "@/app/assets/icons/React.svg";
import FlaskIcon from "@/app/assets/icons/Flask.svg";
import NodeIcon from "@/app/assets/icons/Node.svg";
import NextIcon from "@/app/assets/icons/Next.svg";
import PythonIcon from "@/app/assets/icons/Python.svg";
import DockerIcon from "@/app/assets/icons/Docker.svg";
import MongoDBIcon from "@/app/assets/icons/MongoDB.svg";
import TensorFlowIcon from "@/app/assets/icons/TensorFlow.svg";

import AWSIcon from "@/app/assets/icons/AWS.svg";
import NestIcon from "@/app/assets/icons/Nest.svg";
import SatoshisIndexImage from "@/app/assets/images/SatoshisIndex.jpeg";
import ProfileProImage from "@/app/assets/images/ProfilePro.jpeg";
import AppointmentCoreImage from "@/app/assets/images/AppointmentCore.png";
import MovezicImage from "@/app/assets/images/Movezic.jpeg";
import MLCalculatorImage from "@/app/assets/images/MLCalculator.jpeg";
import BeltwayBriefImage from "@/app/assets/images/BeltwayBrief.jpeg";
import NousTalkImage from "@/app/assets/images/NousTalk.jpeg";

import TSIcon from "@/app/assets/icons/TS.svg";

import PGSQLIcon from "@/app/assets/icons/PGSQL.svg";
import YTMusic from "@/app/assets/icons/YTMusic.svg";
import SpotifyIcon from "@/app/assets/icons/Spotify.svg";
import TailwindIcon from "@/app/assets/icons/Tailwind.svg";
import GraphQLIcon from "@/app/assets/icons/GraphQL.svg";
import ReduxIcon from "@/app/assets/icons/Redux.svg";
import FlutterIcon from "@/app/assets/icons/Flutter.svg";
import PrismaIcon from "@/app/assets/icons/Prisma.svg";

export default async function Home() {
  const projects = await fetchProjects(); // Fetch projects data here

  return (
    <>
      {/* Aurora background orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)",
            animation: "aurora-1 18s ease-in-out infinite",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
            animation: "aurora-2 24s ease-in-out infinite",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(5,150,105,0.06) 0%, transparent 70%)",
            animation: "aurora-1 30s ease-in-out infinite reverse",
            filter: "blur(100px)",
          }}
        />
      </div>
      <div className="flex min-h-screen w-full bg-zinc-950 selection:bg-green-500/30 selection:text-green-200">
        <div className="flex w-full flex-col lg:flex-row lg:justify-between mx-auto relative max-w-[1600px]">
          <LeftPanel />
          <RightPanel projects={projects} />
        </div>
      </div>
    </>
  );
}
async function fetchProjects() {
  // Fetch from your API or database
  return projects;
}
// Example function to fetch projects (replace with your actual fetching logic)

const projects = [
  {
    name: "Kaleidoscope",
    link: "https://kscope.ai/", // Assuming a placeholder link if not provided
    image: null,
    description: [
      "Core contributor to a highly configurable enterprise dashboard and automated insights platform",
      "Architected an end-to-end data correlations bot utilizing the AWS SDK for GoLang, AWS Neptune, and GraphQL",
      "Drastically improved application performance, reducing load times to under 2s by migrating logic to Redux",
      "Fortified system security by implementing SSO/MFA via AWS Cognito and upgrading AWS Amplify",
    ],
    date: {
      start: new Date("2025-04-01"),
      end: null,
    },
    roles: ["Full Stack Engineer"],
    techStack: [
      { logo: AWSIcon, name: "AWS" },
      { logo: GraphQLIcon, name: "GraphQL" },
      { logo: ReduxIcon, name: "Redux" },
      { logo: NodeIcon, name: "Node.js" },
    ],
  },
  {
    name: "Influnity",
    link: "https://influnity.com/",
    image: null,
    description: [
      "Application that helps connect Influencers with their audiences and sponsors",
      "Set up the Turbo Repo for development with TypeScript, Webpack, and Dot-Env Vault",
      "Designed the architecture on the backend using PostgreSQL, DrizzleOrm and NestJS",
    ],
    date: {
      start: new Date("2024-07-01"),
      end: new Date("2024-11-01"),
    },
    roles: ["Technical Lead"],
    techStack: [
      { logo: TSIcon, name: "TypeScript" },
      { logo: PGSQLIcon, name: "PostgreSQL" },
      { logo: NestIcon, name: "NestJS" },
      { logo: AWSIcon, name: "AWS" },
    ],
  },
  {
    name: "KVet and KDukaan",
    link: "https://kisaangroup.pk/",
    image: null,
    description: [
      "Standalone apps for potential vets and shop owners to sign up for Waseela’s initiatives",
      "Built using NextJs, Postgres, TypeORM and NodeJs",
      "Enabling multiple rural applicants to join Waseela as business owners",
    ],
    date: {
      start: new Date("2024-12-01"),
      end: new Date("2025-04-01"),
    },
    roles: ["Full Stack Engineer"],
    techStack: [
      { logo: NextIcon, name: "Next.js" },
      { logo: PGSQLIcon, name: "PostgreSQL" },
      { logo: NodeIcon, name: "Node.js" },
    ],
  },
  {
    name: "ProfilePro",
    link: "https://chromewebstore.google.com/detail/profilepro/gllhamnkpecmfhgdbildlgbbopofnnoe",
    image: ProfileProImage,
    description: [
      "Google Business Optimization Chrome Extension with 10K+ active users",
      "Engineered and launched a Chrome extension built with React, MongoDB, Express, and Node.js",
      "Spearheaded phase 1 UI development using Material UI, integrating seamless modals and pop-ups",
    ],
    date: {
      start: new Date("2023-01-01"),
      end: new Date("2024-11-01"),
    },
    roles: ["Project Manager", "Software Engineer"],
    techStack: [
      { logo: ReactIcon, name: "ReactJS" },
      { logo: NodeIcon, name: "NodeJS" },
      { logo: MongoDBIcon, name: "MongoDB" },
      { logo: AWSIcon, name: "AWS" },
    ],
  },
  {
    name: "Satoshi's Index",
    link: "https://app.satoshisindex.com",
    image: SatoshisIndexImage,
    description: [
      "Cryptocurrency Buying Automation Tool and migration from Grafana",
      "Led the development and migration of Satoshi’s Index to a React and NestJS-based web app",
      "Managed migration of over 1,000 users to Amazon RDS (PGSQL) and integrated Stripe/Maverick",
    ],
    date: {
      start: new Date("2022-09-01"),
      end: new Date("2024-11-01"),
    },
    roles: ["Project Manager", "Software Engineer"],
    techStack: [
      { logo: ReactIcon, name: "React JS" },
      { logo: NestIcon, name: "Nest JS" },
      { logo: PGSQLIcon, name: "PostgreSQL" },
      { logo: AWSIcon, name: "AWS" },
    ],
  },
  {
    name: "Movezic",
    link: "https://movezic-app.vercel.app/",
    image: MovezicImage,
    description: [
      "Music Migration Application using Spotify and YouTube Music APIs",
      "Developed a music migration tool using NextJs and Flask",
      "Allows users to move playlists from one platform to another without hassle",
    ],
    date: {
      start: new Date("2024-09-17"),
      end: null,
    },
    roles: ["Primary Software Engineer"],
    techStack: [
      { logo: NextIcon, name: "NextJS" },
      { logo: FlaskIcon, name: "Flask" },
      { logo: TailwindIcon, name: "TailwindCSS" },
      { logo: YTMusic, name: "YTMusic API" },
      { logo: SpotifyIcon, name: "Spotify API" },
    ],
  },
  {
    name: "AppointmentCore",
    link: "https://chromewebstore.google.com/detail/appointmentcore-plugin-fo/mmjcajbhlpjbaegiliagmjaapfkicjml",
    image: AppointmentCoreImage,
    description: [
      "Appointment Booking application and Chrome plugin with 5+ developers",
      "Redesigned the frontend in React and improved user experience",
      "Implemented robust integrations with Salesforce, Gmail, Outlook and Keepa",
    ],
    date: {
      start: new Date("2021-09-01"),
      end: new Date("2022-02-01"),
    },
    roles: ["Software Engineer"],
    techStack: [
      { logo: ReactIcon, name: "React JS" },
      { logo: NodeIcon, name: "Node JS" },
      { logo: TSIcon, name: "TypeScript" },
    ],
  },
  {
    name: "Crypto AI Forecasts",
    link: "https://play.google.com/store/apps/details?id=io.ripeseed.cryptoforecastapp",
    image: null,
    description: [
      "AI-driven trading solutions for novice and intermediate crypto traders",
      "Sole developer of the mobile app providing real-time forecasts",
      "Built using React Native and the Ignite Boilerplate",
    ],
    date: {
      start: new Date("2024-08-01"), // Approximate date based on context
      end: new Date("2024-09-01"),
    },
    roles: ["Sole Developer"],
    techStack: [
      { logo: ReactIcon, name: "React Native" },
      { logo: NodeIcon, name: "Node JS" },
      { logo: AWSIcon, name: "AWS" },
    ],
  },
  {
    name: "BeltwayBrief",
    link: "http://beltwaybrief.com",
    image: BeltwayBriefImage,
    description: [
      "GPT based political newsletter summarizer architecture and NLP advisory",
      "Automated the delivery of newsletter to subscribed clients using Gmail and Sendgrid",
      "Oversaw development and successful delivery using Flask, Langchain and OpenAI",
    ],
    date: {
      start: new Date("2023-06-01"),
      end: new Date("2024-01-01"),
    },
    roles: ["Tech lead", "Project Manager"],
    techStack: [
      { logo: FlaskIcon, name: "Flask" },
      { logo: PythonIcon, name: "Python" },
      { logo: AWSIcon, name: "AWS" },
      { logo: MongoDBIcon, name: "MongoDB" },
    ],
  },
  {
    name: "NousTalk",
    link: "https://noustalk.com/",
    image: NousTalkImage,
    description: [
      "Online platform for scheduling and communicating with licensed therapists",
      "Resolved scheduling issues and implemented UI updates to improve user experience",
      "Worked with both a legacy .NET/C# system and a new Node.js backend",
    ],
    date: {
      start: new Date("2022-03-01"),
      end: new Date("2022-05-01"),
    },
    roles: ["Software Engineer"],
    techStack: [
      { logo: ReactIcon, name: "React JS" },
      { logo: NodeIcon, name: "Node JS" },
      { logo: DockerIcon, name: "Docker" },
    ],
  },
];
