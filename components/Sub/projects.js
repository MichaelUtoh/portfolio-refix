import Link from 'next/link'
import { motion, animatePresence } from 'framer-motion';



const ProjectsComponent = () => {
    return (
        <>
            <p className="title-header my-16 text-center text-[#313131] text-9xl" id="projects">Projects</p>
            <div className="flex flex-col lg:flex-row items-center justify-center w-full" id="projects">
                <motion.div
                    className="card cursor-pointer flex flex-col font items-center justify-center h-60 m-4 text-white w-64"
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
                    <a href="https://web.bizedgeapp.com" target="_blank" passHref={true}>
                        <div className="flex flex-col h-full items-center justify-start p-3">
                            <p className="font font-bold text-lg text-green-400 mb-4 mt-14 text-center w-10/12">Bizedge</p>
                            <p className="font-thin text-sm text-center text-white">A suite of business management tools, I am a priviledged contributor on this project.</p>
                        </div>
                    </a>
                </motion.div>


                <motion.div
                    className="card cursor-pointer flex flex-col font items-center justify-center h-60 m-4 text-white w-64"
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
                    <a href="https://app-sidebrief.netlify.app/" target="_blank" passHref={true}>
                        <div className="flex flex-col h-full items-center justify-start p-3">
                            <p className="font font-bold text-lg text-green-400 mb-4 mt-14 text-center w-10/12">The Sidebrief Project</p>
                            <p className="font-thin text-sm text-center text-white">A business creation tool, frontend project made with JavaScript & React</p>
                        </div>
                    </a>
                </motion.div>


                <motion.div
                    className="card cursor-pointer flex flex-col font items-center justify-center h-60 m-4 text-white w-64"
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
                    <a href="https://iq.torilo.ng/" target="_blank" passHref={true}>
                        <div className="flex flex-col h-full items-center justify-start p-3">
                            <p className="font font-bold text-lg text-green-400 mb-4 mt-14 text-center w-10/12">IQ App</p>
                            <p className="font-thin text-sm text-center text-white">A school management application system built with Python & Django.</p>
                        </div>
                    </a>
                </motion.div>
            </div>
        </>
    )
}

export default ProjectsComponent;