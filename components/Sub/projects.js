import Link from 'next/link'
import { motion, animatePresence } from 'framer-motion';



const ProjectsComponent = () => {
    return (
        <>
            <div className="flex h-screen items-center justify-center lg:w-full mt-20" id="projects">
                <motion.div
                    className="card flex flex-col font-one items-center justify-center h-60 m-4 text-white w-64"
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
                    <Link href="#" passHref={true}>
                        <div className="flex flex-col h-full items-center justify-start p-3">
                            <p className="font-two font-bold text-lg text-blue-400 mb-4 mt-14 text-center w-10/12">AutoHub</p>
                            <p className="font-thin text-md text-center">A personal project, written in Python, Rest Framework & React</p>
                        </div>
                    </Link>
                </motion.div>


                <motion.div
                    className="card flex flex-col font-one items-center justify-center h-60 m-4 text-white w-64"
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
                    <Link href="#" passHref={true}>
                        <div className="flex flex-col h-full items-center justify-start p-3">
                            <p className="font-two font-bold text-lg text-blue-400 mb-4 mt-14 text-center w-10/12">The Sidebrief Project</p>
                            <p className="font-thin text-md text-center">A business creation tool, frontend project made with JavaScript & React</p>
                        </div>
                    </Link>
                </motion.div>


                <motion.div
                    className="card flex flex-col font-one items-center justify-center h-60 m-4 text-white w-64"
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
                    <Link href="#" passHref={true}>
                        <div className="flex flex-col h-full items-center justify-start p-3">
                            <p className="font-two font-bold text-lg text-blue-400 mb-4 mt-14 text-center w-10/12">IQ App</p>
                            <p className="font-thin text-md text-center">A valuable education tool built for school admins, tutors & scholars</p>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </>
    )
}

export default ProjectsComponent;