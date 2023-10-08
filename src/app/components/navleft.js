"use client"

import smoothScroll from "./smoothscroll"

export default function Navleft() {

    return (
        <ul className='navleftFont h-full flex flex-col justify-between fixed top-0 z-10 h-full pl-12 py-12 hide-below-650vh'>
            <li onClick={() => smoothScroll('home')} className="cursor-pointer">
                <p>P</p>
                <p>/</p>
                <p>S</p>
            </li>
            <li>

                <div className="relative">
                    <p className="rotate-[270deg] transform origin-left me-12">
                        <span onClick={() => smoothScroll('gallery')} className="cursor-pointer relative inline-block group">
                            GALLERY
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                        </span>
                    </p>
                </div>




                <div className="relative">
                    <p className="rotate-[270deg] transform origin-left me-12 mt-16" >
                        <span onClick={() => smoothScroll('rsvp')} className="cursor-pointer relative inline-block group">
                            RSVP
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                        </span>
                    </p>
                </div>



                <div className="relative">
                    <p className="rotate-[270deg] transform origin-left me-12 mt-16">
                        <span onClick={() => smoothScroll('faq')} className="cursor-pointer relative inline-block group">
                            FAQ
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                        </span>
                    </p>
                </div>


                {/* <p className={"rotate-[270deg] transform origin-left me-12 mt-16"}>
                    <span className=' pb-2 cursor-pointer border-animation'>
                        <span onClick={() => smoothScroll('rsvp')}>RSVP</span>
                    </span>
                </p>
                <p className={"rotate-[270deg] transform origin-left me-12 mt-16"}>
                    <span className='border-teal-800 pb-2 cursor-pointer border-animation'>
                        <span onClick={() => smoothScroll('faq')}>FAQ</span>
                    </span>
                </p> */}
            </li>
            <li className="rotate-[270deg] transform origin-left cursor-pointer">
                <span onClick={() => smoothScroll('story')}>TOKYO BRIDGE, JP</span>
            </li>
        </ul>
    )
}