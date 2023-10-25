import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import rhomeImg from '@/public/rhome.png';
import spot from '@/public/spotify.png'
import hack from '@/public/Hackhubb.png'
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Computer Applications",
    location: "Maulana Abul Kalam Azad Univercity of Technology, Nadia , West Bengal",
    description:
      "Currently at my final year with an avarage SGPA of 8.4",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Web Developer Intern",
    location: "CodeClause",
    description:
      "I worked as a web developer intern for 1 month. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "April,2023 - May,2023",
  },
  {
    title: "Web Developer Intern",
    location: "Bioron Solutions Pvt Ltd",
    description:
      "I have been working as a full stack web developer intern for 3 month now.",
    icon: React.createElement(FaReact),
    date: "Aug,2023 - ",
  }
] as const;

export const projectsData = [
  {
    title: "To-Do List",
    description:
      "My First Project which helped me understand use of Node.Js and MongoDB",
    tags: ["EJS", "Node.js", "MongoDB", "Bootstrap"],
    imageUrl: corpcommentImg,
    linkUrl:"https://tanish-to-do-list.onrender.com/",
  },
  {
    title: "Recreation Of a 3D Website",
    description:
      "Recreation of Bokoko33's award-winning website using React,Three.js and 3D models which is a step to learn React.Js.",
    tags: ["React", "Three.js", "Bootstrap","Css"],
    imageUrl: rmtdevImg,
    linkUrl:"https://tanish-basu.netlify.app/",
  },
  {
    title: "Ai Summerizer",
    description:
      "An ai summerizer app which uses Ai Summerizer Api from Rapid Api to Summerize any news letter or website (to more clarify the usage of Api's).",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Api"],
    imageUrl: wordanalyticsImg,
    linkUrl:"https://summerizer.netlify.app/",
  },
  {
    title: "The Retreat House",
    description:
      "A Full-Stack Real Estate App for Buying and selling Properties which was the last stage of learning development with React.js & MongoDB.",
    tags: ["React", "Node.js", "MongoDB", "MUI", "Typescript"],
    imageUrl: rhomeImg,
    linkUrl:"https://real-estate-001.netlify.app/",
  },
  {
    title: "Spotify Clone",
    description:
      "A Full-Stack Spotify clone to listen music which is the first Project of Next js and Supabase.",
    tags: ["React", "Next.js", "PostgreySQL(Supabase)", "Tailwind", "Typescript"],
    imageUrl: spot,
    linkUrl:"https://spotify-clone-tanish.vercel.app/",
  },
  {
    title: "Hackhubb",
    description:
      "An open-source Fullstack Web Ecosystem for Developers.",
    tags: ["React", "Next.js", "MySQl", "MongoDB", "Socket-io", "LiveKit", "Uploadthing", "Prisma", "Tailwind", "Typescript"],
    imageUrl: hack,
    linkUrl:"https://hackhubb.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "Node.js",
  "React",
  "Redux",
  "Next.js",
  "DSA",
  "C",
  "C++",
  "Python",
  "Java",
  "TypeScript",
  "Prisma",
  "Socket-io",
  "WebRTC",
  "Git",
  "DBMS",
  "MySQL",
  "PostgreSQL",
  "SupaBase",
  "MongoDB",
  "Vercel",
] as const;
