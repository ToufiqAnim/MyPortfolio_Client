import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#112240] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="text-center md:text-left">
          <p className="mb-2 font-bold text-2xl">TOUFIQUL ISLAM ANIM</p>
          <p className="mb-2 w-1/2">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
          <hr className="ml-8 mt-12 " />
        </div>
        <div>
          <p className="text-2xl font-bold mb-4">SOCIAL</p>
          <div className="flex mt-4 md:mt-0">
            <a
              href="https://github.com/ToufiqAnim"
              className="text-2xl mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/toufiq-anim/"
              className="text-2xl mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center mt-5">
        © Copyright 2024. Made by Toufiqul Islam Anim
      </p>
    </footer>
  );
};

export default Footer;
