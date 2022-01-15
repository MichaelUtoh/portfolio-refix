import React from 'react'
import { motion } from "framer-motion"
import ProjectsComponent from '../Sub/projects'
import ContactComponent from '../Sub/contact'
import BannerComponent from '../Sub/banner'

const HeroComponent = () => {
    return (
        <>
            <BannerComponent />
            <ProjectsComponent />
            <ContactComponent />
        </>
    )
}

export default HeroComponent
