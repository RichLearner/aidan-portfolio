"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-blue text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }} //prevent looping animation
        src="https://scontent.fkul4-3.fna.fbcdn.net/v/t39.30808-6/351351101_742357931016586_5889721344953415354_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=cj2Jl33vBeMAX_t8fny&_nc_ht=scontent.fkul4-3.fna&oh=00_AfAXVeItysVJ1HbOdTmoP9g_YqGHJbzcI5wf_PxCm3JFNA&oe=65C8FB80"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-lightBlue">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I'm Aidan. I am a dedicated and passionate software developer hailing
          from Malaysia, with a multifaceted skill set honed through years of
          coding experience. 🇲🇾 Graduating with a degree in Computer Science,
          I've immersed myself in various programming languages and frameworks,
          excelling in projects that demand innovative solutions. Beyond coding,
          I'm an avid badminton player 🏸, fitness enthusiast 💪, and golf
          aficionado ⛳. These diverse interests not only keep me balanced but
          also fuel my creativity and problem-solving abilities. With a keen eye
          for detail and a relentless drive for excellence, I am committed to
          leveraging my technical expertise to tackle complex challenges and
          deliver impactful solutions in the ever-evolving landscape of software
          development.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
