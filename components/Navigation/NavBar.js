import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const NavBar = () => {
    return (
        <div className="border-b-custom lg:w-full mx-auto  p-2 text-white">
            <div className="items-baseline flex justify-between lg:w-10/12 p-2 mx-auto">

                <Link href="/">
                    <h1 className="cursor-pointer text-white font-one font-thin text-xl">Michael Utoh</h1>
                </Link>

                <ul className="flex justify-between">
                    <motion.li
                        className="ml-6 font-thin font-two cursor-pointer hover:text-blue-300 text-sm"
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
                        className="ml-6 font-thin font-two cursor-pointer hover:text-blue-300 text-sm"
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
                        <a>Contact</a>
                    </motion.li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
