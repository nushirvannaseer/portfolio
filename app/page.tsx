import PortfolioContainer from "./PortfolioContainer";
import ReactIcon from "@/app/assets/icons/React.svg";
import FlaskIcon from "@/app/assets/icons/Flask.svg";
import NodeIcon from "@/app/assets/icons/Node.svg";
import NextIcon from "@/app/assets/icons/Next.svg";
import PythonIcon from "@/app/assets/icons/Python.svg";
import DockerIcon from "@/app/assets/icons/Docker.svg";
import MongoDBIcon from "@/app/assets/icons/MongoDB.svg";

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
import GraphQLIcon from "@/app/assets/icons/GraphQL.svg";
import ReduxIcon from "@/app/assets/icons/Redux.svg";
import JSLogo from "@/app/assets/icons/JS.svg";

export default async function Home() {
  const projects = await fetchProjects();

  return (
    <>
      {/* Aurora background orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none text-zinc-300">
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(var(--accent-color), 0.12) 0%, transparent 70%)",
            animation: "aurora-1 18s ease-in-out infinite",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(var(--accent-color), 0.08) 0%, transparent 70%)",
            animation: "aurora-2 24s ease-in-out infinite",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(var(--accent-color), 0.06) 0%, transparent 70%)",
            animation: "aurora-1 30s ease-in-out infinite reverse",
            filter: "blur(100px)",
          }}
        />
      </div>
      <div className="flex min-h-screen w-full bg-zinc-950 selection:bg-accent/30 selection:text-white">
        <div className="flex w-full flex-col mx-auto relative max-w-[1600px]">
          <PortfolioContainer projects={projects} />
        </div>
      </div>
    </>
  );
}

async function fetchProjects() {
  return projectsData;
}

const projectsData = [
  {
    name: "Kaleidoscope",
    link: "https://kscope.ai/",
    image: null,
    description: [
      "Core contributor to a highly configurable enterprise dashboard and automated insights platform",
      "Architected an end-to-end data correlations bot utilizing the AWS SDK for GoLang, AWS Neptune, and GraphQL",
      "Drastically improved application performance, reducing load times to under 2s by migrating logic to Redux",
      "Fortified system security by implementing SSO/MFA via AWS Cognito and upgrading AWS Amplify",
    ],
    date: { start: new Date("2025-04-01"), end: null },
    roles: ["Full Stack Engineer"],
    techStack: [
      { logo: AWSIcon, name: "AWS" },
      { logo: GraphQLIcon, name: "GraphQL" },
      { logo: ReactIcon, name: "React" },
      { logo: ReduxIcon, name: "Redux" },
    ],
  },
  {
    name: "Influnity",
    link: "https://influnity.io/",
    image: null,
    description: [
      "Application that helps connect Influencers with their audiences and sponsors",
      "Set up the Turbo Repo for development with TypeScript, Webpack, and Dot-Env Vault",
      "Designed the architecture on the backend using PostgreSQL, DrizzleOrm and NestJS",
    ],
    date: { start: new Date("2024-07-01"), end: new Date("2024-11-01") },
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
    date: { start: new Date("2024-12-01"), end: new Date("2025-04-01") },
    roles: ["Full Stack Engineer"],
    techStack: [
      { logo: NextIcon, name: "Next.js" },
      { logo: NodeIcon, name: "Node.js" },
      { logo: PGSQLIcon, name: "PostgreSQL" },
    ],
  },
  {
    name: "ProfilePro",
    link: "https://chromewebstore.google.com/detail/profilepro-ai-linkedin-op/mjdinkmffmcmbinpkmmapnmeononfkhn",
    image: ProfileProImage,
    description: [
      "AI-driven tool for optimizing LinkedIn profiles and creating consistent content",
      "10K+ active users with a high retention rate",
      "Integrated OpenAI for profile generation and content suggestions",
    ],
    date: { start: new Date("2024-01-01"), end: new Date("2024-06-01") },
    roles: ["Principle Software Engineer"],
    techStack: [
      { logo: NextIcon, name: "Next.js" },
      { logo: NodeIcon, name: "Node.js" },
      { logo: TSIcon, name: "TypeScript" },
    ],
  },
  {
    name: "Satoshi's Index",
    link: "https://satoshisindex.com/",
    image: SatoshisIndexImage,
    description: [
      "A platform for tracking and analyzing crypto market trends with AI-driven insights",
      "1,000+ users with real-time portfolio management and news aggregation",
      "Built with a focus on high availability and responsive data visualizations",
    ],
    date: { start: new Date("2023-01-01"), end: new Date("2023-12-01") },
    roles: ["Lead Developer"],
    techStack: [
      { logo: ReactIcon, name: "React" },
      { logo: NodeIcon, name: "Node.js" },
      { logo: MongoDBIcon, name: "MongoDB" },
      { logo: ReduxIcon, name: "Redux" },
    ],
  },
  {
    name: "AppointmentCore",
    link: "https://www.appointmentcore.com/",
    image: AppointmentCoreImage,
    description: [
      "Online booking system for businesses to manage appointments and staff",
      "Integrated with major platforms like Salesforce, Google Calendar, and Infusionsoft",
      "Used complex state management and recurring appointment logic",
    ],
    date: { start: new Date("2021-09-01"), end: new Date("2022-02-01") },
    roles: ["Full Stack Developer"],
    techStack: [
      { logo: ReactIcon, name: "React" },
      { logo: NodeIcon, name: "Node.js" },
      { logo: DockerIcon, name: "Docker" },
    ],
  },
  {
    name: "Movezic",
    link: null,
    image: MovezicImage,
    description: [
      "Cross-platform tool to move music playlists between Spotify and YouTube Music",
      "Handled OAuth flows and extensive REST API interactions",
      "Implemented a queue-based migration system for large playlists",
    ],
    date: { start: new Date("2024-09-01"), end: null },
    roles: ["Primary Developer"],
    techStack: [
      { logo: NodeIcon, name: "Node.js" },
      { logo: SpotifyIcon, name: "Spotify API" },
      { logo: YTMusic, name: "YouTube Music API" },
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
    date: { start: new Date("2024-08-01"), end: new Date("2024-09-01") },
    roles: ["Sole Developer"],
    techStack: [
      { logo: ReactIcon, name: "React Native" },
      { logo: JSLogo, name: "JavaScript" },
      { logo: DockerIcon, name: "Docker" },
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
    date: { start: new Date("2023-06-01"), end: new Date("2024-01-01") },
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
    date: { start: new Date("2022-03-01"), end: new Date("2022-05-01") },
    roles: ["Software Engineer"],
    techStack: [
      { logo: ReactIcon, name: "React JS" },
      { logo: NodeIcon, name: "Node JS" },
      { logo: DockerIcon, name: "Docker" },
    ],
  },
];
