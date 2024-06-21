import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import MainLayout from "../Layout/MainLayout";
import ProjectsDetails from "../pages/ProjectsDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "/projects/:id",
        element: <ProjectsDetails />,
        loader: ({ params }) =>
            fetch(`https://my-portfolio-rosy-sigma-90.vercel.app/api/projects/${params.id}`),
      }, 
    ],
  },
]);

export default router;
