import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'


const ContactComponent = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().max(50, 'Maximum of 50 characters allowed').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string().max(1000, 'Maximum of 1000 characters allowed')
        }),
        onSubmit: values => {
            console.log(values);
        }
    })

    return (
        <>
            <p className="mt-20 title-header text-center text-[#313131] text-9xl" id="contact">Contact</p>
            <div className="flex items-center justify-center w-full">

                <div className="flex flex-col items-center justify-center mt-10 w-10/12">
                    <p className="text-gray-300 align-center font text-center sm:w-8/12 text-sm sm:text-[16px]">I&lsquo;m always open to new Projects and Collaborations 
                        both from Clients and Tech Enthusiasts, I love to interact with other devs on twitter, but clients 
                        can always reach me through mail.
                    </p>

                    <form className="contact-form flex flex-col items-center my-20 w-full">
                        <input
                            className="greykol m-2 p-2 text-white w-full"
                            id="name"
                            name="name"
                            placeholder="Name"
                            type="text"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />

                        <input
                            className="greykol m-2 p-2 text-white"
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="text"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />

                        <textarea
                            className="greykol m-2 p-2 text-white"
                            id="message"
                            name="message"
                            placeholder="Your message"
                            type="text"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        ></textarea>

                        <button className="bg-green-600 greykol-btn hover:bg-green-500 m-2 p-2 w-full">Submit</button>
                    </form>

                    <p className="font p-2 text-[#fff] text-xs">Michael Utoh &copy; 2022</p>
                </div>

            </div>
        </>
    )
}

export default ContactComponent
