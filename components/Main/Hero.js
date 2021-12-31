import React from 'react'
import { motion } from "framer-motion"

const HeroComponent = () => {
    return (
        <>
            <div className="border-b-2 flex flex-col h-[600px] items-center justify-center lg:w-full">
                <motion.div 
                    initial={{ opacity:0, y:100 }}
                    animate={{ opacity:1, y:0, transition:{ duration:1 } }}
                >
                    <div className="flex flex-col items-center justify-center lg:w-full">
                        <p className="font-medium font-one text-5xl text-white">Fullsnack Developer Extraordinaire</p>
                        <p className="font-thin mt-2 text-md text-gray-400 w-8/12 text-center">
                            Started my professional coding journey 2 years ago, working with JavaScript & Python(Django)
                        </p>
                    </div>
                </motion.div>
                <motion.button
                    animate="visible"
                    initial="hidden"
                    variants={{ hidden: { scale: .8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: 1.5 }}}}
                    whileHover={{ scale:1.2, transition: { duration: 0.2 }, }}
                    whileTap={{ scale: 0.9 }}
                >
                    <button className="bg-purple-500 font-bold mt-4 px-10 py-1 rounded-sm text-sm text-white">Get Started</button>
                </motion.button>

            </div>

            <div className="bg-white flex justify-center h-4 w-full">

            </div>


            {/* Cards */}
            <div className="flex justify-between lg:w-8/12 mt-20">

                <div className="card flex flex-col font-one items-center justify-center h-60 m-2 text-white w-64">
                    <p className="text-lg w-10/12 text-center">Autohub Project</p>
                </div>

                <div className="card flex flex-col font-one items-center justify-center h-60 m-2 text-white w-64">
                    <p className="text-lg w-10/12 text-center">The SideBrief Project</p>
                </div>

                <div className="card flex flex-col font-one items-center transform-gpu justify-center h-60 m-2 text-white w-64">
                    <p className="text-lg w-10/12 text-center">IQ School Management Application</p>
                </div>
            </div>
        </>
    )
}

export default HeroComponent
