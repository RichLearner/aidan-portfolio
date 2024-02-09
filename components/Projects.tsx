"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-blue text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar-thin scrollbar-track-lightBlue/40
      scrollbar-thumb-blue/70"
      >
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://cdn.sanity.io/images/xbn4zmfs/production/eb0843b1adb22478e8f30d7fe89b377ebc6d5e85-280x280.png"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-darkBlue/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS Clone
              </h4>

              <p className="text-lg text-center md:text-left">
                The Expo team has been building open source libraries for React
                Native since its inception in 2015. GitHub indicates there are
                +783k public repos using Expo OSS, but it has historically been
                difficult to measure just how impactful Expo's libraries are to
                end-users.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top=[30%] bg-darkBlue/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
