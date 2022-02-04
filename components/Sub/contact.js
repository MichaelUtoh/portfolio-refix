import React from 'react';
import { IoLogoFacebook, IoLogoGithub, IoLogoGoogle, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const ContactComponent = () => {
    return (
        <>
            <p className="title-header text-center text-[#313131] text-9xl" id="contact">Contact</p>
            <div className="flex items-center justify-center w-full">

                <div className="flex flex-col items-center justify-center mt-10 w-10/12">
                    <p className="text-[#fff] align-center font text-center sm:w-8/12 text-sm sm:text-lg">I&lsquo;m always open to new Projects and Collaborations 
                        both from Clients and Tech Enthusiasts, I love to interact with other devs on twitter, but clients 
                        can always reach me through mail.
                    </p>

                    <form className="contact-form flex flex-col items-center my-20 w-full">
                        <input className="greykol m-2 p-2 text-white w-full" id="fullname" name="fullname" placeholder="Fullname" />
                        <input className="greykol m-2 p-2 text-white" id="email" name="email" placeholder="Email" />
                        <textarea className="greykol m-2 p-2 text-white" id="review" name="review" placeholder="Review"></textarea>
                        <button className="bg-green-600 hover:bg-green-500 m-2 p-2 w-full">Submit</button>
                    </form>

                    <p className="bottom-2 bottom-center font left-50 text-[#fff] text-xs">Michael Utoh &copy; 2022</p>
                </div>

            </div>
        </>
    )
}

export default ContactComponent
