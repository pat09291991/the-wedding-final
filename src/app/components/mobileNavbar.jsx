function MobileNavbar() {

    return (
        <ul className="text-black flex">
            <li className="mb-2">
                <a href="#" className="block hover:text-teal-300">Gallery</a>
            </li>
            <li className="mb-2">
                <a href="#" className="block hover:text-teal-300">FAQ</a>
            </li>
            <li>
                <a href="#" className="block hover:text-teal-300">RSVP</a>
            </li>
        </ul>
    );
}

export default MobileNavbar;