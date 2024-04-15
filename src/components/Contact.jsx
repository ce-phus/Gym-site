import React, { useRef, useState } from 'react';
import { gym } from '../assets';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        phonenumber: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            "service_a1zy7jm",
            "template_cok6gum",
            form,
            "f-bpLWGmjIRuy7I4B"
        )
        .then((response) => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({
                name: "",
                email: "",
                phonenumber: "",
                message: ""
            });
        }, (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong!");
        });
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen px-4 bg-gray-900'>
            <div className='overflow-hidden rounded-lg shadow-lg w-full relative max-w-full'>
                <img src={gym} alt="Gym" style={{ width: '100%', height: 'auto', minHeight: '100vh', objectFit: 'cover' }}/>
                <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-5'>
                    <h1 className='text-4xl md:text-5xl tracking-wide font-bold text-white'>READY TO LEVEL UP YOUR BODY WITH US?</h1>
                    <p className='text-xl md:text-3xl text-tertiary font-bold my-4'>Contact Us</p>
                    <form ref={formRef} onSubmit={handleSubmit} className='w-full max-w-lg bg-gray-700 p-5 rounded-md'>
                        <div className='flex flex-wrap -mx-3 mb-6'>
                            <div className='w-full md:w-1/2 px-5 pl-10 mb-6 md:mb-0 mt-5'>
                                <label className='block uppercase tracking-wide text-white text-xs font-bold' htmlFor="grid-first-name"> Name</label>
                                <input className='appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-400 rounded py-3 px-4 pl-10 mb-3 mt-3 leading-tight focus:outline-none focus:bg-white' id='grid-first-name' name='name' value={form.name} type='text' placeholder='Name' onChange={handleChange} />
                            </div>
                            <div className='w-full md:w-1/2 px-5 pl-10 mt-5'>
                                <label className='block uppercase tracking-wide text-white text-xs font-bold mb-3' htmlFor='grid-email'>
                                    Email
                                </label>
                                <input className='appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-email' name='email' type='text' placeholder='email' value={form.email} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className="w-full px-5 mb-6 md:mb-0 pl-10">
                            <label className='block uppercase tracking-wide text-xs font-bold mb-2' htmlFor='grid-phone-number'>
                                Phone Number
                            </label>
                            <input
                                className='appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                type='text'
                                placeholder='+254'
                                id='grid-phone-number'
                                name='phonenumber' // ensure this matches the state property
                                value={form.phonenumber}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='w-full px-5 mb-6 md:mb-0 pl-10'>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your Message</span>
                            <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            className='bg-gray-500 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                            />
                        </label>
                        </div>
                    </div>
                        <button
                            type='submit'
                            className='bg-primary hover:bg-accent py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mx-5 my-5'
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
