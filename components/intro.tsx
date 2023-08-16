"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import {  BsLinkedin } from "react-icons/bs";
import {SiCodechef} from 'react-icons/si'
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.png"
              alt="Tanish Basu"
              width="200"
              height="200"
              quality="95"
              priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello,<span className="font-bold"> I'm Tanish.</span> I'm an{" "}
        <span > aspering Full-Stack Developer</span> with a{" "}
        <span > BCA</span> (Bachelor of Computer Applications) Degree. I enjoy
        building <span>sites & apps</span>. My focus is{" "}
        <span>React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        

        <a
          className="group bg-gradient-to-r from-gray-700 to-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-700 active:scale-105 transition"
          href="/TanishBasu.pdf"
          download
        >
          Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-900 hover:to-sky-500 hover: flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white"
          href="https://www.linkedin.com/in/tanish-basu/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-white hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-500 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white"
          href="https://github.com/TanishBasu2002"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-yellow-900 hover:via-yellow-700 hover:to-yellow-500 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white"
          href="https://www.codechef.com/users/tanishbasu"
          target="_blank"
        >
          <SiCodechef />
        </a>
      </motion.div>
    </section>
  );
}
