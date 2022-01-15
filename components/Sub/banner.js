import React from 'react'
import { motion } from 'framer-motion'

const BannerComponent = () => {
    return (
        <>
            <div className="bg-[url('/img-developer.jpg')] bg-no-repeat bg-left flex flex-col min-h-[600px] items-center justify-center lg:w-full relative">
                <motion.div 
                    initial={{ opacity:0, y:100 }}
                    animate={{ opacity:1, y:0, transition:{ duration:1 } }}
                >
                    <div className="flex flex-col items-center justify-center lg:w-full">
                        <p className="font-medium font-one lg:text-5xl md:text-4xl md:flex main-text text-white neonText">Fullstack Developer Extraordinaire</p>
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
                    <p>Get Started</p>
                </motion.button>
            </div>
        </>
    )
}

export default BannerComponent
