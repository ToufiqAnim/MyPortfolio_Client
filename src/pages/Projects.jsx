import React, { useEffect, useState } from 'react';



import Project from './Project';

const Projects = () => {
    const [projects,setProjects]=useState([]);

   useEffect(() =>{
        fetch('https://my-portfolio-rosy-sigma-90.vercel.app/api/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <div id='projects' className="bg-[#0a192f] py-12">
            <div className="container mx-auto">
                <h1 className="text-center my-5 font-bold text-3xl text-[#64ffd4]">Projects</h1>
                <div className="flex flex-wrap -mx-4">
                    {projects.map(projectData => (
                       <Project key={projectData._id} projectData={projectData}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
