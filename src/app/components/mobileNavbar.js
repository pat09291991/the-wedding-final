"use client"

import smoothScroll from "./smoothscroll";

export default function MobileNavbar() {

    return (
        <ul className="text-black flex space-x-4 w-full pl-12 py-12">
            <li className="mb-2 z-20">
                <span onClick={() => smoothScroll('gallery')}>Gallery</span>
            </li>
            <li className="mb-2 z-20">
                <span onClick={() => smoothScroll('rsvp')}>RSVP</span>
            </li>
            <li className="mb-2 z-20">
                <span onClick={() => smoothScroll('faq')}>FAQ</span>
            </li>
        </ul>
    );
}