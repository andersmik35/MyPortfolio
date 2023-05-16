import React from "react";
import { FaRegFolder, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div id="projects" className="w-full lg:h-screen flex items-center">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-14">
          <div className=" shadow-xl rounded-xl hover:scale 105 ease-in duration-300 p-6 w-[400px] h-auto flex flex-col">
            <div className="flex flex-row justify-between">
              <FaRegFolder size={25} color="#5651e5"></FaRegFolder>
              <FaGithub size={25} color="#5651e5"></FaGithub>
            </div>
            <p className="py-4 text-2xl font-bold">myPortfolio</p>
            <p className="pb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              cum dolore consectetur est quibusdam aspernatur dolorem, hic iusto
              molestiae tenetur in, soluta officia laudantium voluptatum cumque
              unde, qui ratione nihil.
            </p>
            <div className="flex flex-wrap w-auto gap-6">
              <p className="border-[1px] w-16 flex justify-center rounded-sm border-gray-400 font-normal px-2 text-gray-600">
                  HTML
              </p>
              <p className="border-[1px] w-16 flex justify-center rounded-sm border-gray-400 font-normal px-2 text-gray-600">
                  CSS
              </p>
              <p className="border-[1px] w-16 flex justify-center rounded-sm border-gray-400 font-normal px-2 text-gray-600">
                  JS
              </p>
              <p className="border-[1px] w-16 flex justify-center rounded-sm border-gray-400 font-normal px-2 text-gray-600">
                  React
              </p>
              <p className="border-[1px] w-16 flex justify-center rounded-sm border-gray-400 font-normal px-2 text-gray-600">
                  NextJS
              </p>
            </div>
          </div>

          <div className=" shadow-xl rounded-xl hover:scale 105 ease-in duration-3 p-6 w-[400px] h-auto">
            <p>Hej</p>
          </div>

          <div className=" shadow-xl rounded-xl hover:scale 105 ease-in duration-300 p-6 w-[400px] h-auto">
            <p>Hej</p>
          </div>
          <div className=" shadow-xl rounded-xl hover:scale 105 ease-in duration-300 p-6 w-[400px] h-auto">
            <p>Hej</p>
          </div>
        </div>
      </div>
    </div>
  );
}
