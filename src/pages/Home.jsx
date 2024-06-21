import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div id="home" className="bg-[#0a192f]">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center h-[65vh]">
          <div className="bg-[#0a192f] ">
            <div className="mx-20">
              <h1 className="text-white ">
                <p className="text-2xl font-bold ">Hi, I&apos;m</p>
                <h1 className="text-6xl font-extrabold py-3">
                  Toufiqul Islam Anim
                </h1>
              </h1>
              <p className="text-white text-xl font-semibold mb-10">
                I&apos;m a Junior Web Developer
              </p>
              <a
                href="https://drive.google.com/file/d/1vDoELvAU1yvPpZXLqL4q0hKYAigdKVO6/view?usp=sharing"
                className="bg-[#0a192f] text-[#64ffda] border border-[#64ffda] text-lg px-5 py-3 rounded no-underline"
              >
                My Resume
              </a>
            </div>
          </div>

          <img
            className="w-[600px] rounded-lg"
            src="https://i.ibb.co/NFWf3rw/image1.jpg"
            alt=""
          />
        </div>
      </div>
      <About />
      <Projects />

      <Contact />
    </div>
  );
};

export default Home;
