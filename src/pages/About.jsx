import Skills from "./Skills";

const About = () => {
  return (
    <div id="about" className="mb-10">
      <div className="container mx-auto px-4 ">
        <h1 className="text-center my-6 font-bold text-[#64ffd4] text-5xl">
          About Me
        </h1>
        <hr className="my-4 mx-auto w-1/4 border-[rgb(100,255,212)]" />
        <div className="flex flex-col lg:grid grid-cols-2 items-center mt-4 justify-around lg:gap-40 h-[70vh]">
          <div className="text-xl mt-4 lg:mt-0  ">
            <h1 className="text-[#64ffd4] text-3xl mb-10 font-bold">
              Get to know me!
            </h1>
            <p className="text-[#ccd6f6] leading-10">
              Hello! I&apos;m Toufiqul Islam Anim, a passionate Junior Web
              Developer based in Dhaka, Bangladesh. With a strong foundation in
              front-end and back-end development, I am dedicated to creating
              beautiful and functional websites that provide a seamless user
              experience.
            </p>
            <p className="text-[#ccd6f6] mt-3 mb-6 leading-10">
              I&apos;m open to Job opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then don&apos;t hesitate to contact me.
            </p>
            <a
              href="#"
              className="bg-[#0a192f] text-[#64ffda] border border-[#64ffda] text-lg px-5 py-3 rounded no-underline "
            >
              Contact Me
            </a>
          </div>

          <div>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
