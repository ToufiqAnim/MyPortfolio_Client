import image from "../assets/Toufiq.jpg";

const About = () => {
  return (
    <div id="about" className="mb-20">
      <div className="container mx-auto px-4 ">
        <h1 className="text-center my-10 font-bold text-[#64ffd4] text-5xl">
          About Me
        </h1>
        <hr className="my-10 mx-auto w-1/4 border-[rgb(100,255,212)]" />
        <div className="flex flex-col lg:flex-row items-center mt-4 justify-center lg:gap-40 h-[70vh]">
          <img
            src={image}
            alt="Toufiqul Islam Anim"
            className="rounded-lg w-96 h-96mx-auto lg:mr-8"
          />
          <div className="text-2xl mt-4 lg:mt-0 w-[600px] ">
            <p className="text-[#ccd6f6] ">
              Hello! I&apos;m Toufiqul Islam Anim, a passionate Junior Web
              Developer based in Dhaka, Bangladesh. With a strong foundation in
              front-end and back-end development, I am dedicated to creating
              beautiful and functional websites that provide a seamless user
              experience.
            </p>
            <p className="text-[#ccd6f6]">
              I&apos;m open to Job opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then don&apos;t hesitate to contact me.
            </p>
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default About;
