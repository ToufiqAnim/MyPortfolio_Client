/* eslint-disable react/prop-types */
import React from 'react'
import { BsGithub } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";
import { Link } from 'react-router-dom';
const Project = ({projectData}) => {

  return (
    <div key={projectData.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
    <div className="bg-[#112240] rounded-lg shadow-lg overflow-hidden">
        <img src={projectData?.demoImage} alt={projectData?.title} className="w-full"/>
        <div className="p-6">
            <p className="text-[#ccd6f6] mb-3 flex items-center justify-between">
                {projectData?.technologies}
                <span className='flex justify-center mt-3'>
                    <a className="mx-3" href={projectData?.github} target="_blank" rel="noopener noreferrer">
                        <BsGithub className='text-3xl'/>
                    </a>
                    <a href={projectData?.live} target="_blank" rel="noopener noreferrer">
                        <GoLinkExternal className='text-3xl'/>
                    </a>
                </span>
            </p>
            <h2 className="text-[#ccd6f6] text-2xl font-bold mb-2">{projectData.title}</h2>
            <p className="text-[#ccd6f6]">{projectData?.description}</p>
        <button className='bg-white text-black px-6 py-3 mt-3'>    <Link to={`/projects/${projectData?._id}`} >Know More</Link></button>
        </div>
    </div>
</div>
  )
}

export default Project