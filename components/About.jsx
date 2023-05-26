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
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div class = "col-span-2">
          <p class = "uppercase text-xl tracking-widest text-[#5651e5]"></p>
          <h2 class = "text-black py-4">Who am i?</h2>
          <div class = "bg-white-800 border border-gray-300 py-2 text-black px-6 rounded-md font-mono">
            Hey i am Anders a programmer
          </div>
          <div class="flex flex-row w-auto text-gray-400 py-4 gap-4">
            <div class="bg-white-800 border border-gray-300 flex-col p-4 rounded-md">
              <h2 class = "text-black">Udvikler</h2>
              <p class ="py-2 text-black">
              Hello and welcome! My name is Anders Mikkelsen and i'm a {age}{" "}
              year old boy who has profound a huge interest in programming in
              the last year. I'm currently taking an AP-Degree in Computer
              Science at Aarhus business and currently on my 2nd term. My
              experience in programming is most found in Java and SQL as it is
              the language we're tought at the moment. I've myself developed a
              interest in Web-Development and use my spare time on this.
              </p>
            </div>
            <div class="bg-white-800 border border-gray-300 flex-col p-4 rounded-md">
              <h2 class ="text-black"> Personal</h2>
                <p class ="py-2 text-black">
                In addition to the theoretical and practical skills I have
                acquired, I consider myself even as a hard working young man who
                is always fresh to learn. My personal competences are
                thoroughness, honesty, situational awareness / empathy as well a
                good mood and care for my colleagues.
                </p>
            </div>
          </div>
        </div>
        <div class="w-full h-auto m-auto rounded-xl flex items-center justify-center">
          <Image alt = "Logo" width= "500" height = "500" className="rounded-l" src="/../public/assets/images/about.jpg"/>
        </div>
      </div>
    </div>
  );
}
