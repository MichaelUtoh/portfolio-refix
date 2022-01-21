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
                        <p className="font-medium font text-custom uppercase text-white">
                            <span className="bounce">M</span>
                            <span className="bounce">i</span>
                            <span className="bounce">c</span>
                            <span className="bounce">h</span>
                            <span className="bounce">a</span>
                            <span className="bounce">e</span>
                            <span className="bounce">l </span>
                        </p>
                        <p className="font-medium font text-custom uppercase text-white">
                            <span className="bounce">&nbsp;U</span>
                            <span className="bounce">t</span>
                            <span className="bounce">o</span>
                            <span className="bounce">h</span>
                        </p>
                        </div>
                        <p className="px-4 rounded-sm text-custom-alt text-4xl font-bold text-[#8a8a8a] uppercase">Fullstack Web Developer</p>
                        <p className="font-thin font mt-4 pg-custom text-white w-8/12 text-center">
                            Started my professional coding journey 2 years ago, working with JavaScript & Python(Django)
                        </p>
                    </div>
                </motion.div>
                <motion.button
                    animate="visible"
                    initial="hidden"
                    className="bg-[#212121] bg-blue-500 font-bold mt-4 px-3 py-1 rounded-sm text-sm text-white"
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
