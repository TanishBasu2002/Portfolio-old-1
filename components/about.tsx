"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I hold a Bachelor's degree in Computer Science from Maulana bul Kalm Azad University of Technology, where I not only honed my programming skills but also developed a comprehensive understanding of software development principles and practices. During my academic journey, I actively participated in coding competitions and various tech-related events, which further fueled my passion for coding.{" "}
        <span className="font-medium">
         I am Proficient in React, Next.js, Node.js, MongoDB, Supabase, GrafQl
        </span>
        . I am also familiar with TypeScript and Java. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">Entry level osition</span> as a software
        developer or a Full Stack Developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Mithology & Statistic</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
