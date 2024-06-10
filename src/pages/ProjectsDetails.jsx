import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const ProjectsDetails = () => {
 const project=useLoaderData()

  return (
    <div>
      <img src={project.name} alt="" />
    </div>
  )
}

export default ProjectsDetails