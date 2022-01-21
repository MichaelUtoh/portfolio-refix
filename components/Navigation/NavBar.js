import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { IoLogoFacebook, IoLogoGithub, IoLogoGoogle, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";


const NavBar = () => {
    return (
        <div className="bg-[#040404] flex flex-col min-h-screen justify-between p-4 text-white">

            <div className="flex flex-col items-center">
                <Link href="/" passHref={true}>
                    <h1 className="cursor-pointer text-white font-one font-bold neonText text-6xl">M</h1>
                </Link>
                <p className="text-[#8a8a8a] text-xs">Web Developer</p>
            </div>

            <div className="flex justify-center">
                <ul className="flex flex-col items-center justify-between">
                    <motion.li
                        className="font-thin font-two cursor-pointer hover:text-blue-300 my-2 text-md"
                        whileHover={{
                            scale: [1, 1.4, 1.2],
                            rotate: [0, 10, -10, 0],
                            filter: [
                                'hue-rotate(0) contrast(100%)',
                                'hue-rotate(360deg) contrast(200%)',
                                'hue-rotate(45deg) contrast(300%)',
                                'hue-rotate(0) contrast(100%)'
                            ],
                            transition: {
                                duration: .2
                            }
                        }}
                    >
                        <a>About</a>
                    </motion.li>
                    <motion.li
                        className="font-thin font-two cursor-pointer hover:text-blue-300 my-2 text-md"
                        whileHover={{
                            scale: [1, 1.4, 1.2],
                            rotate: [0, 10, -10, 0],
                            filter: [
                                'hue-rotate(0) contrast(100%)',
                                'hue-rotate(360deg) contrast(200%)',
                                'hue-rotate(45deg) contrast(300%)',
                                'hue-rotate(0) contrast(100%)'
                            ],
                            transition: {
                                duration: .2
                            }
                        }}
                    >
                        <a>Projects</a>
                    </motion.li>
                </ul>
            </div>

            <div className="flex flex-wrap justify-start">
                <Link href="#" passHref={true}>
                    <IoLogoLinkedin className="cursor-pointer icon-linkedin" color="white" fontSize={20} style={{ margin: 4 }} />
                </Link>

                <Link href="#" passHref={true}>
                    <IoLogoGithub className="cursor-pointer icon-github" color="white" fontSize={20} style={{ margin: 4 }} />
                </Link>

                <Link href="#" passHref={true}>
                    <IoLogoFacebook className="cursor-pointer icon-facebook" color="white" fontSize={20} style={{ margin: 4 }} />
                </Link>

                <Link href="#" passHref={true}>
                    <IoLogoGoogle className="cursor-pointer icon-google" color="white" fontSize={20} style={{ margin: 4 }} />
                </Link>

                <Link href="#" passHref={true}>
                    <IoLogoTwitter className="cursor-pointer icon-twitter" color="white" fontSize={20} style={{ margin: 4 }} />
                </Link>
            </div>

        </div>
    )
}

export default NavBar
