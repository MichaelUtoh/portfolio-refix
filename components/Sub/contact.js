import React, { useState } from 'react';
import { useForm } from "@formspree/react"
import BannerComponent from './banner';


const ContactComponent = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [state, handleSubmit] = useForm("myyqvoyy");

    const handleScrollToSection = () => {
        const section = document.getElementById('banner');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (state.succeeded) {
        handleScrollToSection()
    }

    return (
        <>
            <p className="mt-20 title-header text-center text-[#313131] text-9xl" id="contact">Contact</p>
            <div className="flex items-center justify-center w-full">

                <div className="flex flex-col items-center justify-center mt-10 w-10/12">
                    <p className="text-gray-300 align-center font text-center sm:w-8/12 text-sm sm:text-[16px]">I&lsquo;m always open to new Projects and Collaborations
                        both from Clients and Tech Enthusiasts, I love to interact with other devs on twitter, but clients
                        can always reach me through mail.
                    </p>

                    <form className="contact-form flex flex-col items-center my-20 w-full" action='https://formspree.io/f/myyqvoyy' onSubmit={handleSubmit}>
                        <input
                            className="greykol m-2 p-2 text-white w-full"
                            name="name"
                            placeholder="Name"
                            type="text"
                        />

                        <input
                            className="greykol m-2 p-2 text-white"
                            name="email"
                            placeholder="Email"
                            type="email"
                        />

                        <textarea
                            className="greykol m-2 p-2 text-white"
                            id="message"
                            name="message"
                            placeholder="Your message"
                            type="text"
                        ></textarea>

                        <button
                            className="bg-green-600 greykol-btn hover:bg-green-500 m-2 p-2 w-full"
                            type="submit"
                        >Submit</button>
                    </form>

                    <p className="font p-2 text-[#fff] text-xs">Michael Utoh &copy; 2022</p>
                </div>

            </div>
        </>
    )
}

export default ContactComponent
