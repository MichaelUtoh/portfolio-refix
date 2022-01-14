import React from 'react'
import { motion } from 'framer-motion'

const BannerComponent = () => {
    return (
        <>
            <div className="flex flex-col min-h-[600px] items-center justify-center lg:w-full relative">
                <motion.div 
                    initial={{ opacity:0, y:100 }}
                    animate={{ opacity:1, y:0, transition:{ duration:1 } }}
                >
                    <div className="flex flex-col items-center justify-center lg:w-full">
                        <p className="font-medium font-one text-5xl text-white">Fullsnack Developer Extraordinaire</p>
                        <p className="font-thin font-two mt-2 text-md text-gray-400 w-8/12 text-center">
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
                    <button className="bg-blue-500 font-bold mt-4 px-10 py-1 rounded-sm text-sm text-white">Get Started</button>
                </motion.button>

                <a href="#projects" className="absolute bottom-2">
                    <img className="" src="/5944-scroll-down.gif" height="18px" width="37px" />
                </a>

            </div>
        </>
    )
}

export default BannerComponent
