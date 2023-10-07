"use client"

export default function MobileNavbar() {

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
        <ul className="text-black flex space-x-4 z-20 w-full pl-12 py-12">
            <li className="mb-2">
                <span onClick={() => smoothScroll('gallery')}>Gallery</span>
            </li>
            <li>
                <span onClick={() => smoothScroll('rsvp')}>RSVP</span>
            </li>
            <li className="mb-2">
                <span onClick={() => smoothScroll('faq')}>FAQ</span>
            </li>
        </ul>
    );
}