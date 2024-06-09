
import image from "../assets/Toufiq.jpg";


const About = () => {
    return (
        <div id="#about" className='mb-20'>
            <div className="container mx-auto px-4">
                <h1 className='text-center mt-10 font-bold text-[#64ffd4]'>About Me</h1>
                <hr className='mb-10 mx-auto w-1/4 border-[rgb(100,255,212)]'/>
                <div className="flex flex-col lg:flex-row items-center mt-4">
                    <img src={image} alt="Toufiqul Islam Anim" className="rounded-lg w-80 h-80 mx-auto lg:mr-8" />
                    <div className="text-left mt-4 lg:mt-0">
                        <p className='text-[#ccd6f6]'>
                        Hello! I&apos;m Toufiqul Islam Anim, a passionate Junior Web Developer based in Dhaka, Bangladesh. With a strong foundation in front-end and back-end development, I am dedicated to creating beautiful and functional websites that provide a seamless user experience.
                        </p>
                    </div>
                </div>
                <div className="mt-20">
                    <h1 className="text-center font-bold text-[#64ffd4]">Skills</h1>
                    <hr className='mb-10 mx-auto w-1/4 border-[#64ffd4]'/>
                    <div className="w-3/4 mx-auto">
                        {[
                            { skill: 'HTML5', level: 80 },
                            { skill: 'CSS3', level: 75 },
                            { skill: 'Bootstrap', level: 85 },
                            { skill: 'Material Ui', level: 50 },
                            { skill: 'Javascript', level: 55 },
                            { skill: 'React Js', level: 60 },
                            { skill: 'Node Js', level: 45 },
                            { skill: 'MongoDB', level: 50 }
                        ].map(({ skill, level }) => (
                            <div key={skill} className="mb-4">
                                <p className='text-[#ccd6f6] mb-1'>{skill} {level}%</p>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div className={`bg-lightBlue h-4 rounded-full`} style={{ width: `${level}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
