import React, { useEffect, useState } from "react";

import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://my-portfolio-rosy-sigma-90.vercel.app/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div id="projects" className="bg-[#0a192f] py-5">
      <div >
        <h1 className="text-center font-bold text-[#64ffd4] text-5xl">
          Projects
        </h1>
        <hr className="my-10 mx-auto  w-1/4 border-[#64ffd4]" />

        <div className="container mx-auto" >
          {projects.map((projectData) => (
            <Project key={projectData._id} projectData={projectData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
