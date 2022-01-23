import React from 'react';
import { IoLogoFacebook, IoLogoGithub, IoLogoGoogle, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const ContactComponent = () => {
    return (
        <>
            <div className="flex items-center justify-center w-full mt-96 relative">

                <div className="absolute flex flex-col items-center justify-center my-20 w-10/12">
                    <p className="text-[#fff] align-center font text-center w-8/12">I&lsquo;m always open to new Projects and Collaborations 
                        both from Clients and Tech Enthusiasts, I love to interact with other devs on twitter, but clients 
                        can always reach me through mail.
                    </p>

                    <div className="flex flex-col items-center my-20 w-full">
                        <input className="greykol m-2 p-2 text-white w-5/12" id="fullname" name="fullname" placeholder="Fullname" />
                        <input className="greykol m-2 p-2 text-white w-5/12" id="email" name="email" placeholder="Email" />
                        <textarea className="greykol m-2 p-2 text-white w-5/12" id="review" name="review" placeholder="Review"></textarea>
                        <button className="bg-orange-600 hover:bg-orange-500 m-2 p-2 w-5/12">Submit</button>
                    </div>

                    <p className="absolute bottom-2 bottom-center font left-50 text-[#fff] text-xs">Michael Utoh &copy; 2022</p>
                </div>



            </div>
        </>
    )
}

export default ContactComponent
