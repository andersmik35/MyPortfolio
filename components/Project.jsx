import Link from "next/link";
import React from "react";
import { FaRegFolder, FaGithub } from "react-icons/fa";
const Project = ({ title, description, githubLink, tags }) => {
  return (
    <div className=" shadow-xl rounded-xl hover:scale 105 ease-in duration-300 p-6 w-[400px] h-auto flex flex-col">
      <div className="flex flex-row justify-between">
        <FaRegFolder size={25} color="#5651e5"></FaRegFolder>
        <Link href={githubLink} target="_blank">
          <FaGithub size={25} color="#5651e5"></FaGithub>
        </Link>
      </div>
      <p className="py-4 text-2xl font-bold">{title}</p>
      <p className="pb-6">{description}</p>
      <div className="flex flex-wrap w-auto gap-6">
        {tags.map((tag) => (
          <p
            key={tag}
            className="border-[1px] w-16 flex justify-center rounded-sm border-gray-400 font-normal px-2 text-gray-600"
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Project;
