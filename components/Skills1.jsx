import React from "react";
import Image from "next/image";

export default function Skills() {
  return (
    <div id="skills" className="w-full md:h-screen py-2 flex items-center">
      <div className="max-w-[1240px] m-auto flex flex-col justify-center">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/java-logo-1.png"
                  width={"64"}
                  height={"64"}
                  alt="Java"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/sql.png"
                  width={"64"}
                  height={"64"}
                  alt="SQL"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MySQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/html.png"
                  width={"64"}
                  height={"64"}
                  alt="HTML"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/css.png"
                  width={"64"}
                  height={"64"}
                  alt="CSS"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/javascript.png"
                  width={"64"}
                  height={"64"}
                  alt="JavaScript"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/nextjs.png"
                  width={"64"}
                  height={"64"}
                  alt="NEXTJS"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/react.png"
                  width={"64"}
                  height={"64"}
                  alt="React"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justfiy-center items-center">
            <div className="m-auto">
              <Image
                src="/assets/skills/tailwind.png"
                width={"64"}
                height={"64"}
                alt="Tailwind"
              ></Image>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>Tailwind</h3>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
