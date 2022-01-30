import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'


const BannerComponent = () => {

    return (
        <>
            <div className="flex flex-col items-start justify-center banner-padding">
                <motion.div 
                    initial={{ opacity:0, y:-1000 }}
                    animate={{ opacity:1, y: [-1000, 10, -10, 0], transition:{ duration:1 } }}
                >
                    <div className="flex lg:w-full">
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
                </motion.div>

                <div className="typed-box">
                    <p className="rounded-sm text-custom-alt text-xs tracking-widest font-medium text-orange-500 uppercase">Web Developer</p>
                </div>

                <Link href="/about">
                    <motion.button
                        animate="visible"
                        initial="hidden"
                        className="font-thin rounded-sm text-sm text-white"
                        variants={{ hidden: { scale: .8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: 1.5 }}}}
                    >
                        <div className="box-1">
                            <div className="btn btn-one">
                                <span className="uppercase">More About Me</span>
                            </div>
                        </div>
                    </motion.button>
                </Link>


            </div>




        </>
    )
}

export default BannerComponent
