import {
  SiCsswizardry,
  SiTypescript,
  SiReact,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiZoom,
  SiSlack,
  SiVite,
  SiExpo,
  SiVercel,
  SiPython,
  SiFramer,
  SiCloudinary,
  SiRedux,
  SiChakraui,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import React, { ReactElement } from "react";
import { AiFillApi } from "react-icons/ai";

// Define the Skill interface
export interface Skill {
  techName: string;
  symbol: ReactElement;
}

// Define the skills object
const skills: {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
} = {
  frontend: [
    {
      techName: "CSS",
      symbol: React.createElement(SiCsswizardry),
    },
    {
      techName: "TypeScript",
      symbol: React.createElement(SiTypescript),
    },
    {
      techName: "React",
      symbol: React.createElement(SiReact),
    },
    {
      techName: "Tailwind",
      symbol: React.createElement(SiTailwindcss),
    },
    {
      techName: "Next.js",
      symbol: React.createElement(RiNextjsFill),
    },
    {
      techName: "Vite",
      symbol: React.createElement(SiVite),
    },
    {
      techName: "Expo",
      symbol: React.createElement(SiExpo),
    },
    {
      techName: "Framer Motion",
      symbol: React.createElement(SiFramer),
    },
    {
      techName: "Redux",
      symbol: React.createElement(SiRedux),
    },
    {
      techName: "ChakraUi",
      symbol: React.createElement(SiChakraui)
    }
  ],
  backend: [
    {
      techName: "Typescript",
      symbol: React.createElement(SiTypescript),
    },
    {
      techName: "PostgreSQL",
      symbol: React.createElement(SiPostgresql),
    },
    {
      techName: "Node.js",
      symbol: React.createElement(SiNodedotjs),
    },
    {
      techName: "MongoDB",
      symbol: React.createElement(SiMongodb),
    },
    {
      techName: "Express",
      symbol: React.createElement(SiExpress),
    },
    {
      techName: "Python",
      symbol: React.createElement(SiPython),
    },
    {
      techName: "api",
      symbol: React.createElement(AiFillApi),
    },
  ],
  tools: [
    {
      techName: "Vscode",
      symbol: React.createElement(VscVscode),
    },
    {
      techName: "git",
      symbol: React.createElement(SiGit),
    },
    {
      techName: "Github",
      symbol: React.createElement(SiGithub),
    },
    {
      techName: "Zoom",
      symbol: React.createElement(SiZoom),
    },
    {
      techName: "Slack",
      symbol: React.createElement(SiSlack),
    },
    {
      techName: "Vercel",
      symbol: React.createElement(SiVercel),
    },
    {
      techName: "Cloudinary",
      symbol: React.createElement(SiCloudinary),
    },
  ],
};

export { skills };
