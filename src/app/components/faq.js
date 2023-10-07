"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faqQuestions } from "./faqQuestions";

export default function Faq() {
    const [sections, setSections] = useState(faqQuestions);

    const toggleAccordion = (index) => {
        const updatedSections = sections.map((section, i) => ({
            ...section,
            isOpen: i === index ? !section.isOpen : false, // Close other sections
        }));
        setSections(updatedSections);
    };

    return (
        <div className="max-w-xl mx-auto min-h-screen py-12 px-3 flex flex-col justify-center items-center">
            <p className="text-4xl text-white mb-16 text-center">Frequently Asked Questions</p>
            <div className="w-full py-12 px-2 rounded-2xl shadow-xl shadow-black text-white" style={{backgroundColor: "rgba(255, 255, 255, 0.2)"}}>
                <div className="w-full">
                    {sections.map((section, index) => {
                        let key = index + 1;

                        return (
                            <div key={key}>
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full text-left py-2 px-4 transition duration-300 ease-in-out focus:font-semibold flex justify-between"
                                >
                                    {section.title}
                                    <span className="ml-2">
                                        <FontAwesomeIcon icon={section.isOpen ? faChevronDown : faChevronLeft} />
                                    </span>
                                </button>
                                {section.isOpen && (
                                    <div className="p-4 me-4 w-full">
                                        <p>{section.content1}</p><br/>
                                        {section.image == 'venue_church' ?
                                            <div className="flex justify-center items-center">
                                                <img src="/images/church.jpeg" className="w-1/3 h-1/3" />
                                            </div>
                                            : ""}
                                        <br />

                                        {section.content2 ?
                                            <>
                                                <p>{section.content2}</p><br/>

                                                {section.image == 'venue_church' ?
                                                    <div className="flex justify-center items-center">
                                                        <img src="/images/venue.jpeg" className="w-1/3 h-1/3" />
                                                    </div>
                                                    : ""}
                                                <br />
                                            </>
                                            : ""}
                                        {section.content3 ?
                                            <>
                                                <p>{section.content3}</p><br />
                                            </>
                                            : ""}
                                        {section.note ?
                                            <>
                                                <p>NOTE: {section.note}</p><br />
                                            </>
                                            : ""}
                                    </div>
                                )}
                                <div className="border-b-4"></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
} 