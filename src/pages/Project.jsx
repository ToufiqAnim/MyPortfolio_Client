/* eslint-disable react/prop-types */
import React from "react";
import { BsGithub } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";
const Project = ({ projectData }) => {
  return (
    <div className="flex flex-col items-center p-8  md:flex-row gap-10 bg-[#0a192f] text-white">
      <div className="flex flex-col items-center md:w-1/2">
        <div className="max-w-full">
          <img
            src={projectData?.demoImage}
            alt="Dopefolio Screenshot"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col items-start text-start mt-8 md:mt-0 md:items-start md:text-left md:w-1/3 md:max-w-md">
        <h2 className="text-3xl font-bold mb-4">{projectData?.title} </h2>
        <p className="mb-4">
          Dopefolio is a successful Open-Source project that I created which has
          been featured on some of the biggest tech sites like CSS-Tricks,
          Hostinger, etc & used by thousands of developers globally.
        </p>
        <button className="bg-[#0a192f] text-[#64ffda] border border-[#64ffda] text-lg px-5 py-3 rounded no-underline">
          <Link to={`/projects/${projectData?._id}`}>CASE STUDY</Link>
        </button>
      </div>
    </div>
  );
};

export default Project;
