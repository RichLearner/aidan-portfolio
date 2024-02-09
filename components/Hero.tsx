"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Aidan", "Guy-who-loves-Coding.tsx", "<LovesNextjs />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col space-between space-y-8 items-center justify-center
    text-center overflow-hidden"
    >
      <BackgroundCircles />
      <img
        src="https://scontent.fkul4-3.fna.fbcdn.net/v/t39.30808-6/351351101_742357931016586_5889721344953415354_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=cj2Jl33vBeMAX_t8fny&_nc_ht=scontent.fkul4-3.fna&oh=00_AfAXVeItysVJ1HbOdTmoP9g_YqGHJbzcI5wf_PxCm3JFNA&oe=65C8FB80"
        alt="profile pic"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-blue pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
