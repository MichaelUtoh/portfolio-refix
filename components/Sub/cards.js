import React from 'react';
import { SiCss3, SiGitlab, SiDjango, SiHtml5, SiMongodb, SiJavascript, SiNextdotjs, SiPostgresql, SiPython, SiReact, SiTailwindcss, SiChakraui, SiGraphql } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'


const CardsComponent = () => {
    return (
        <>
            <p className="mt-20 title-header mb-10 text-center text-[#313131] text-9xl" id="technologies">Technologies</p>
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
                    <SiNextdotjs className="absolute left-[20px] top-[-20px] text-white-400 m-2 text-2xl" />
                    <p className="skill-card-text text-sm text-gray-300 text-center">
                        I use NextJs to quickly create robust web application, static and server side applications respectively.
                    </p>
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <FaGitAlt className="absolute left-[-20px] top-[-20px] text-red-400 m-2 text-3xl" />
                    <SiGitlab className="absolute left-[20px] top-[-18px] text-blue-400 m-2 text-2xl" />
                    <p className="skill-card-text text-sm text-gray-300 text-center">
                        I am proficiennt with the Linux command line, Git, Github & Gitlab as primary means of managing
                        the different stages of my applications, and collaborating with others.
                    </p>
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiPostgresql className="absolute left-[-20px] top-[-20px] text-blue-400 m-2 text-2xl" />
                    <SiMongodb className="absolute left-[10px] top-[-20px] text-green-400 m-2 text-2xl" />
                    <p className="skill-card-text text-sm text-gray-300 text-center">
                        For storage operations, I have worked with relational and documennt based databases.
                    </p>
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiTailwindcss className="absolute left-[-20px] top-[-22px] text-cyan-300 m-2 text-3xl" />
                    <SiChakraui className="absolute left-[20px] top-[-20px] text-green-400 m-2 text-2xl" />
                    <p className="skill-card-text text-sm text-gray-300 text-center">
                        Styling with tailwindCss and ChakraUI improves my speed and productivity, manipulating components
                        and designing robust, responsive screens easily.
                    </p>
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiGraphql className="absolute left-[-20px] top-[-20px] text-pink-400 m-2 text-2xl" />
                    <p className="skill-card-text text-sm text-gray-300 text-center">
                        As an alternative to REST APIs, i also write fast and efficient APIs using graphql.
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
