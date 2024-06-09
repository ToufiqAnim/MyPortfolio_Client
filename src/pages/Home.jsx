import React from 'react';
import About from './About';
import Projects from './Projects';



const Home = () => {
    return (
        <div className="bg-[#0a192f]">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="mt-20 p-8 w-full h-96 bg-[#0a192f]">
                        <div className="mx-20">
                            <h1 className="text-white">
                                <span className="text-2xl font-extrabold">Hi, I'm</span> <br />
                                <span className="text-4vw font-extrabold">Toufiqul Islam Anim</span>
                            </h1>
                            <p className="text-white text-xl font-bold mb-8">
                                I&apos;m a Junior Web Developer
                            </p>
                            <a
                                href="#"
                                className="bg-[#0a192f] text-[#64ffda] border border-[#64ffda] text-lg px-5 py-3 rounded no-underline"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
           <About/>
           <Projects />
         {/*    
       
            <Contact /> */}
        </div>
    );
};

export default Home;
