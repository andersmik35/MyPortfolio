import React from "react";
import Project from "./Project";
import projects from "../public/data.json";

export default function Projects() {
  return (
    <div id="projects" className="w-full lg:h-screen flex items-center">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-14">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
