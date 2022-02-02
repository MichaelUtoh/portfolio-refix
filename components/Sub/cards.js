import React from 'react';
import { SiCss3, SiDjango, SiHtml5, SiJavascript, SiPostgresql, SiPython, SiReact, SiTailwindcss, SiChakraui } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'


const CardsComponent = () => {
  return (
        <>
            <p className="skill-header text-center text-[#313131] text-9xl" id="projects">Technologies</p>
            <div className="flex flex-wrap justify-center m-4 p-4 rounded-md w-full">

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiDjango className="absolute left-[-20px] top-[-20px] text-green-400 m-2 text-2xl" />
                    <p className="skill-card-text text-sm text-gray-300 text-center">
                        Writing backend logic & solving problems using well structured algorithm, Creating APIs
                        using Django Rest Framework.
                    </p>
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiPython className="absolute left-[-20px] top-[-20px] text-blue-400 m-2 text-2xl" />
                    <p className="skill-card-text text-sm text-gray-300 text-center">
                        Asides algorithms & data structures, writing small but powerful scripts in python has helped 
                        me reduce time spent on repetitive processes.
                    </p>                
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiJavascript className="absolute left-[-20px] top-[-20px] text-yellow-400 m-2 text-2xl" />
                    <p className="skill-card-text text-sm text-gray-300 text-center">
                        I enjoy creating little magical pieces on the frontend, and this is nearly impossible to do 
                        without JS.
                    </p>
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiReact className="absolute left-[-20px] top-[-20px] text-blue-400 m-2 text-2xl" />
                    <p className="skill-card-text text-sm text-gray-300 text-center">
                        I learnt to use the library by building small projects, React&apos;s reusable components & props 
                        are invaluable.
                    </p>
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <FaGitAlt className="absolute left-[-20px] top-[-20px] text-red-400 m-2 text-3xl" />
                    <p className="skill-card-text text-sm text-gray-300 text-center">
                        Using helpful git commands on a dialy basis has grows my collaborate skills with other 
                        developers. 
                    </p>
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiPostgresql className="absolute left-[-20px] top-[-20px] text-blue-400 m-2 text-2xl" />
                    <p className="skill-card-text text-sm text-gray-300 text-center">
                        Postgres combined with Django easily lets me manipulate data with little configuration and a 
                        handful of queries.
                    </p>  
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiTailwindcss className="absolute left-[-20px] top-[-20px] text-cyan-300 m-2 text-3xl" />
                    <p className="skill-card-text text-sm text-gray-300 text-center">
                        Styling with tailwindCss has improved my speed and productivity, there is so much I can do just 
                        by adding a few lines of tailwind classes
                    </p>
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiChakraui className="absolute left-[-20px] top-[-20px] text-green-400 m-2 text-2xl" />
                    <p className="skill-card-text text-sm text-gray-300 text-center">
                        ChakraUI helps me easily create customized and reusable components, one of my favorite means of 
                        styling in React
                    </p>
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiHtml5 className="absolute left-[-20px] top-[-20px] text-orange-500 m-2 text-2xl" />
                    <SiCss3 className="absolute left-[10px] top-[-20px] text-blue-400 m-2 text-2xl" />
                    <p className="skill-card-text text-sm text-gray-300 text-center">
                        I have learnt valuable techniques such as Flexbox and Grid helping me structure any kind of layout
                    </p>
                </div>

            </div>
        </>
    )
};

export default CardsComponent;
