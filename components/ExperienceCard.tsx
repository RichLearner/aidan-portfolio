"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#e6e6e6] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="data:image/png;base64,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"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light text-darkBlue">Web Developer</h4>
        <p className="font-bold text-2xl mt-1 text-lightBlue">MISHU</p>
        <div className="flex space-x-2 my-2">
          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
        </div>
        <p className="uppercase py-5 text-lightBlue">
          Started work... - Ended ...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
