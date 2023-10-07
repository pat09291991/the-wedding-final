"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from 'emailjs-com';

export default function Rsvp() {
    const fullName = useRef();
    const [decision, setDecision] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [alreadySent, setAlreadySent] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('alreadySent')) {
            setAlreadySent(true)
        }
    }, [localStorage.getItem('alreadySent')])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fullName.current.value)
        console.log(decision)
        setButtonDisabled(true)
        emailjs.send(
            'service_63m7nnh', // Replace with your EmailJS service ID
            'rsvp_template', // Replace with your EmailJS template ID
            {
                from_name: fullName.current.value, // Replace with the recipient's name
                message: "RSVP decision: " + decision, // Replace with the message content
            },
            'FDwHyLTkNCXPh-Or0' // Replace with your EmailJS user ID
        )
            .then((response) => {
                setButtonDisabled(false)
                localStorage.setItem('alreadySent', true)
                setAlreadySent(true)
                console.log('Email sent successfully:', response);
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
            });
    }

    const handleResponseChange = (e) => {
        setDecision(e.target.value);
    }

    return (
        <div className='h-screen py-12 px-3 flex flex-col justify-center items-center'>
            <div>
                <p className="text-7xl mb-4 text-center">Kindly <span>RSVP</span></p>
                <p className="mb-6 text-center">before October 30, 2023</p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4 text-center">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="mt-1 p-2 border rounded-md  w-full"
                            ref={fullName}
                            required
                            disabled={alreadySent}
                        />
                    </div>
                    <div className="mb-4 text-center">
                        <label className="block text-sm font-medium text-gray-700">RSVP Response</label>
                        <div className="mt-1">
                            <label className="inline-flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="response"
                                    value="accept"
                                    onChange={handleResponseChange}
                                    checked={decision === 'accept'}
                                    required
                                    disabled={alreadySent}
                                />
                                <span className="text-sm font-medium text-gray-700">Accept</span>
                            </label>
                            <label className="inline-flex items-center space-x-2 ml-4">
                                <input
                                    type="radio"
                                    name="response"
                                    value="decline"
                                    onChange={handleResponseChange}
                                    checked={decision === 'decline'}
                                    required
                                    disabled={alreadySent}
                                />
                                <span className="text-sm font-medium text-gray-700">Decline</span>
                            </label>
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            className="px-4 py-2 bg-sky-900 text-white rounded-md hover:bg-sky-700"
                            disabled={buttonDisabled || alreadySent}
                        >
                            Submit
                        </button>
                    </div>
                </form>
                {alreadySent ? <p className="sm:text-2xl mt-5 text-center">Thank You! We already received your response!</p> : ""}
            </div>
        </div>
    )
} 