"use client"

export default function Navleft() {

    function smoothScroll(targetId) {
        const target = document.getElementById(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth', // This enables smooth scrolling
            });
        }
    }

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
                            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></div>
                        </span>
                    </p>
                </div>




                <div className="relative">
                    <p className="rotate-[270deg] transform origin-left me-12 mt-16" >
                        <span onClick={() => smoothScroll('RSVP')} className="cursor-pointer relative inline-block group">
                            RSVP
                            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></div>
                        </span>
                    </p>
                </div>



                <div className="relative">
                    <p className="rotate-[270deg] transform origin-left me-12 mt-16">
                        <span onClick={() => smoothScroll('FAQ')} className="cursor-pointer relative inline-block group">
                            FAQ
                            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></div>
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