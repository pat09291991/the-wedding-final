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
        <ul className='h-full flex flex-col justify-between fixed top-0 z-10 h-full pl-12 py-12 hide-below-650vh'>
            <li onClick={() => smoothScroll('home')} className="cursor-pointer">
                <p>P</p>
                <p>/</p>
                <p>S</p>
            </li>
            <li>

                <p className="rotate-[270deg] transform origin-left me-12">
                    <span className='border-b-4 border-teal-800 pb-2 cursor-pointer border-animation'>
                        <span onClick={() => smoothScroll('gallery')}>Gallery</span>
                    </span>
                </p>
                <p className={"rotate-[270deg] transform origin-left me-12 mt-16"}>
                    <span className='border-b-4 border-teal-800 pb-2 cursor-pointer'>
                        <span onClick={() => smoothScroll('rsvp')}>RSVP</span>
                    </span>
                </p>
                <p className={"rotate-[270deg] transform origin-left me-12 mt-16"}>
                    <span className='border-b-4 border-teal-800 pb-2 cursor-pointer'>
                        <span onClick={() => smoothScroll('faq')}>FAQ</span>
                    </span>
                </p>
            </li>
            <li className="rotate-[270deg] transform origin-left cursor-pointer">
                <span onClick={() => smoothScroll('story')}>TOKYO BRIDGE, JP</span>
            </li>
        </ul>
    )
}