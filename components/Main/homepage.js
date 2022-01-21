import React from 'react'
import { motion } from "framer-motion"
import ProjectsComponent from '../Sub/projects'
import ContactComponent from '../Sub/contact'
import BannerComponent from '../Sub/banner'

const HeroComponent = () => {
    return (
        <>
            <div className="h-screen main">
                <BannerComponent />
                {/* <ProjectsComponent /> */}
                {/* <ContactComponent /> */}
            </div>
        </>
    )
}

export default HeroComponent
