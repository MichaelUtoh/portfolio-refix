import React from 'react';
import { SiCss3, SiDjango, SiHtml5, SiJavascript, SiPostgresql, SiPython, SiReact, SiTailwindcss, SiChakraui } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'

const DeveloperInfo = () => {
  return (
    <>
        <div className="flex flex-col m-4">
            
            <h2 className="font-one ml-10 text-white text-3xl uppercase">Technologies I use frequently</h2>
            <div className="flex flex-wrap m-4 p-4 rounded-md w-full">

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiDjango className="absolute left-[-20px] top-[-20px] text-green-400 m-2 text-2xl" />
                    <p className="text-sm text-gray-300 text-center">
                        Writing backend logic & solving problems using well structured algorithm, Creating APIs
                        using Django Rest Framework.
                    </p>
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiPython className="absolute left-[-20px] top-[-20px] text-blue-400 m-2 text-2xl" />                    
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiJavascript className="absolute left-[-20px] top-[-20px] text-yellow-400 m-2 text-2xl" />
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiReact className="absolute left-[-20px] top-[-20px] text-blue-400 m-2 text-2xl" />
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <FaGitAlt className="absolute left-[-20px] top-[-20px] text-red-400 m-2 text-3xl" />
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiPostgresql className="absolute left-[-20px] top-[-20px] text-blue-400 m-2 text-2xl" />
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiTailwindcss className="absolute left-[-20px] top-[-20px] text-cyan-300 m-2 text-3xl" />
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiChakraui className="absolute left-[-20px] top-[-20px] text-green-400 m-2 text-2xl" />
                </div>

                <div className="card flex font items-center justify-center h-40 m-4 mt-10 p-4 relative text-white w-72">
                    <SiHtml5 className="absolute left-[-20px] top-[-20px] text-orange-500 m-2 text-2xl" />
                    <SiCss3 className="absolute left-[10px] top-[-20px] text-blue-400 m-2 text-2xl" />
                </div>

            </div>

        </div>
    </>
  );
};

export default DeveloperInfo;
