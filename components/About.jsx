import React from "react";
import Image from "next/image";

export default function About() {
  var birthday = new Date("2001-05-30");
  var today = new Date();
  var age = today.getFullYear() - birthday.getFullYear() - 1;

  if (
    today >=
    new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())
  ) {
    age++;
  }
  return ( 
    <div id="about" className="w-full lg:h-screen flex items-center">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          About
        </p>
        <h2 className="py-4"> Who am i?</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {/** Left */}
          <div className="col-span-2 lg:col-2 w-full h-full shadow-xl shadow-gray-400 rounded xl p-4 rounded-xl">
            <p className="py-2 text-gray-600">
              Hello and welcome! My name is Anders Mikkelsen and i'm a {age}{" "}
              year old boy who has profound a huge interest in programming in
              the last year. I'm currently taking an AP-Degree in Computer
              Science at Aarhus business and currently on my 2nd term. My
              experience in programming is most found in Java and SQL as it is
              the language we're tought at the moment. I've myself developed a
              interest in Web-Development and use my spare time on this.
            </p>
            <p className="py-2 text-gray-600">
              In addition to the theoretical and practical skills I have
              acquired, I consider myself even as a hard working young man who
              is always fresh to learn. My personal competences are
              thoroughness, honesty, situational awareness / empathy as well
              a good mood and care for my colleagues.
            </p>
          </div>
          {/* Right divider */}
          <div className="col-span-1 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover-scale-105 ease-in duration-300">
            <Image
              src="/../public/assets/images/about.jpg"
              width={"2000"}
              height={"2000"}
              alt="JavaScript"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
