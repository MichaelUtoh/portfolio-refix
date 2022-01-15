import React from 'react';
import { IoLogoFacebook, IoLogoGithub, IoLogoGoogle, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const ContactComponent = () => {
    return (
        <>
            <div className="bg-green-500 flex h-250 items-center justify-center lg:w-full mt-20 relative">

                <div className="absolute flex flex-col items-center justify-center my-20 w-10/12">
                    <p className="text-[#fff] align-center font-two text-center w-8/12">I'm always open to new Projects and Collaborations 
                        both from Clients and Tech Enthusiasts, I love to interact with other devs on twitter, but clients 
                        can always reach me through mail.
                    </p>

                    <div className="flex mt-4 mb-24  z-10">
                        <IoLogoLinkedin className="icon-linkedin" color="white" fontSize={24} style={{ margin: 4 }} />
                        <IoLogoGithub className="icon-github" color="white" fontSize={24} style={{ margin: 4 }} />
                        <IoLogoFacebook className="icon-facebook" color="white" fontSize={24} style={{ margin: 4 }} />
                        <IoLogoGoogle className="icon-google" color="white" fontSize={24} style={{ margin: 4 }} />
                        <IoLogoTwitter className="icon-twitter" color="white" fontSize={24} style={{ margin: 4 }} />
                    </div>
                    
                    <p className="absolute bottom-2 bottom-center font-two left-50 text-[#fff] text-xs">Michael Utoh &copy; 2022</p>
                </div>

            </div>
        </>
    )
}

export default ContactComponent
