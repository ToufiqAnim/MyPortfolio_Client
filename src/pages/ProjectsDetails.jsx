
import { useLoaderData } from "react-router-dom";

const ProjectsDetails = () => {
  const project = useLoaderData();
const technologies = project?.technologies;

  return (
    <div className="bg-[#0a192f] pb-12 text-white">
      <div className="text-center py-12 ">
        <h1 className="text-5xl font-bold">{project?.title}</h1>
        <p className="text-lg mt-4">
          This page contains the case study of {project?.title} Open-Source Project
          which includes the Project Overview, Tools Used and Live Links to the
          official product.
        </p>
      <div className="my-8">
      <a href={project?.github} className="bg-[#0a192f] text-[#64ffda] border border-[#64ffda] text-lg px-5 py-3 rounded no-underline m-8">
          PROJECT LINK
        </a>
        <a href={project?.live}className="bg-[#0a192f] text-[#64ffda] border border-[#64ffda] text-lg px-5 py-3 rounded no-underline">
          LIVE LINK
        </a>
      </div>
      </div>

      <div className="flex justify-center py-12">
        <img
          src={project?.demoImage}
          alt="Dopefolio Screenshot"
          className="w-3/4 h-auto max-w-screen-md"
        />
      </div>

      <div className="max-w-screen-lg mx-auto p-8  shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <p className="mb-6">{project?.description}</p>
        <p className="mb-6">{project?.mockupImage}</p>
        <p className="mb-6">
          Feel free to check out the Project by visiting the Project Link.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Tools Used</h3>
        <div className="flex flex-wrap gap-4 mb-8">
          {technologies.map(
            (tool) => (
              <span
                key={tool}
                className="bg-[#0a192f] text-[#64ffda] border border-[#64ffda] text-lg px-5 py-3 rounded no-underline"
              >
                {tool}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
