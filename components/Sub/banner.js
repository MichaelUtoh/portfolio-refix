import React from 'react'
import { motion } from 'framer-motion'

const BannerComponent = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center py-32">
                <motion.div 
                    initial={{ opacity:0, y:100 }}
                    animate={{ opacity:1, y:0, transition:{ duration:1 } }}
                >
                    <div className="flex flex-col items-center justify-center lg:w-full">
                        <div className="flex">
                        <p className="font-medium font-two text-custom uppercase text-blue-400">
                            <span>M</span>
                            <span>i</span>
                            <span>c</span>
                            <span>h</span>
                            <span>a</span>
                            <span>e</span>
                            <span>l </span>
                        </p>
                        <p className="font-medium font-two text-custom uppercase text-blue-400">
                            <span>&nbsp;U</span>
                            <span>t</span>
                            <span>o</span>
                            <span>h</span>
                        </p>
                        </div>
                        <p className="bg-blue-400 p-2 px-4 rounded-sm text-4xl font-bold text-[#212121] uppercase">Fullstack Web Developer</p>
                        <p className="font-thin font-two mt-4 text-md text-gray-400 w-8/12 text-center">
                            Started my professional coding journey 2 years ago, working with JavaScript & Python(Django)
                        </p>
                    </div>
                </motion.div>
                <motion.button
                    animate="visible"
                    initial="hidden"
                    className="bg-blue-500 font-bold mt-4 px-3 py-1 text-sm text-white"
                    variants={{ hidden: { scale: .8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: 1.5 }}}}
                    whileHover={{ scale:1.2, transition: { duration: 0.2 }, }}
                    whileTap={{ scale: 0.9 }}
                >
                    <p>Get in touch</p>
                </motion.button>
            </div>
        </>
    )
}

export default BannerComponent
