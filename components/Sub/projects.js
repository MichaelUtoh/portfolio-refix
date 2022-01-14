import Link from 'next/link'
import { motion } from 'framer-motion';



const ProjectsComponent = () => {
    return (
        <>
            <div className="flex h-screen items-center justify-center lg:w-full mt-20" id="projects">
                <motion.div
                    className="card flex flex-col font-one items-center justify-center h-60 m-4 text-white w-64"
                    drag="x"
                    dragConstraints={{ left: -25, right: 25 }}
                >
                    <Link href="#">
                        <div className="flex flex-col h-full items-center justify-start p-3">
                            <p className="font-two font-bold text-lg text-blue-400 mb-4 mt-14 text-center w-10/12">AutoHub Project</p>
                            <p className="font-thin text-md text-center">A personal project, written in Python, Rest Framework & React</p>
                        </div>
                    </Link>
                </motion.div>


                <motion.div
                    className="card flex flex-col font-one items-center justify-center h-60 m-4 text-white w-64"
                    drag="x"
                    dragConstraints={{ left: -25, right: 25 }}
                >
                    <Link href="#">
                        <div className="flex flex-col h-full items-center justify-start p-3">
                            <p className="font-two font-bold text-lg text-blue-400 mb-4 mt-14 text-center w-10/12">The Sidebrief Project</p>
                            <p className="font-thin text-md text-center">A business creation tool, frontend project made with JavaScript & React</p>
                        </div>
                    </Link>
                </motion.div>


                <motion.div
                    className="card flex flex-col font-one items-center justify-center h-60 m-4 text-white w-64"
                    drag="x"
                    dragConstraints={{ left: -30, right: 25 }}
                >
                    <Link href="#">
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