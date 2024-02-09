import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main
      className="bg-white text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-lightBlue/40
    scrollbar-thumb-blue/70"
    >
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            {/* <img
              src="https://i.imgur.com/e2yvD6A.png"
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            /> */}
            <HomeIcon
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer
            bg-blue p-1 text-darkBlue hover:text-lightBlue"
            />
          </div>
        </footer>
      </Link>
    </main>
  );
}
