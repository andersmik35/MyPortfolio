/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import LinkIcon from "./LinkIcon";

var hour = new Date().getHours();
var greet;

if (hour >= 5 && hour < 10)
      greet = '🌄 Good morning';
else if (hour >=10 && hour <14 )
      greet = "☕Hi there";
else if (hour >= 14 && hour < 17)
    greet = '👋 Good afternoon';
else if (hour >= 17 && hour < 23)
    greet = '🌆 Good evening';
else if (hour === 23 || hour < 5)
    greet = '🦉 Hi, night owl';

export default function Main() {
  return (
    <div id = "home"className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            <span id="greeting">{greet}</span>
          </h1>
          <h1 className=" py-2 text-gray-700 max-w-[70] m-auto">
            I'm <span className="text-[#5651e5]"> Anders Mikkelsen,</span>
          </h1>

          <h1 className="py-2 text-gray-700">AP-CPSC student  </h1>
          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            {" "}
            I'm currently taking an AP degree in Computer Science at Aarhus Business
          </p>
          <div className="flex items-center justify-between max-w-[500px] m-auto py-4">
          <a href = "https://www.linkedin.com/in/anders-mikkelsen-096a46258/" target="blank">
            <LinkIcon icon={
              <FaLinkedinIn size={25}/>
            }/>
            </a>
          <a href="https://github.com/burgerflipper01" target="blank">
            <LinkIcon icon={
              <FaGithub size={25} />
            }/>
            </a>
            <LinkIcon icon={
              <AiOutlineMail size={25} />
            }/>
            <LinkIcon icon={
              <BsFillPersonLinesFill size={25} />
            }/>
          </div>
        </div>
      </div>
    </div>
  );
}
