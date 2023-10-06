export default function Navleft() {
    return (
        <ul className='h-full flex flex-col justify-between fixed top-0 z-10 h-full py-12 hide-below-650vh'>
            <li>
                <p>P</p>
                <p>/</p>
                <p>S</p>
            </li>
            <li>
                <p className="rotate-[270deg] transform origin-left">
                    <span className='border-b-4 border-teal-800 pb-2 border-animation'>
                        Gallery
                    </span>
                </p>
                <p className={"rotate-[270deg] transform origin-left mt-16"}>
                    <span className='border-b-4 border-teal-800 pb-2'>
                        FAQ
                    </span>
                </p>
                <p className={"rotate-[270deg] transform origin-left mt-16"}>
                    <span className='border-b-4 border-teal-800 pb-2'>
                        RSVP
                    </span>
                </p>
            </li>
            <li className="rotate-[270deg] transform origin-left">TOKYO BRIDGE, JP</li>
        </ul>
    )
}