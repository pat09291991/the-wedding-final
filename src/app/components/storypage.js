import React from "react"
import { useInView } from 'react-intersection-observer';
import { delay, motion } from 'framer-motion';
import smoothScroll from "./smoothscroll";

export default function StoryPage() {
    const [containerRef, containerInView] = useInView({
        triggerOnce: true, // Trigger animation once when the container enters the viewport
        rootMargin: '-100px 0px', // Adjust the offset as needed
    });

    // Create a ref to track if the component is in view
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger animation once when the component enters the viewport
    });

    const [paragraphRef, paragraphInView] = useInView({
        triggerOnce: true, // Trigger animation once when the element enters the viewport
        rootMargin: '200px 0px', // Adjust the offset as needed
    });

    const [imageRef, imageInView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px', // Adjust the offset as needed
    });

    const [imageRef2, imageInView2] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px', // Adjust the offset as needed
    });

    const [imageRef3, imageInView3] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px', // Adjust the offset as needed
    });
    const [imageRef4, imageInView4] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px', // Adjust the offset as needed
    });

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (

        <div className='min-h-screen pt-12 pb-16 px-3' ref={containerRef}>
            <div className="flex flex-col sm:items-center mb-12">
                <div>
                    <motion.div
                        initial="hidden"
                        animate={containerInView ? 'visible' : 'hidden'}
                        variants={fadeIn}
                        transition={{ duration: 1 }}
                    >
                        <p className="mb-12">
                            <span className='border-b-4 border-teal-800 pb-4 text-xl text-sky-900'>
                                The Date
                            </span>
                        </p>
                        <span className="text-2xl sm:text-4xl text-sky-900">Thursday</span><br />
                        <span className="text-2xl sm:text-4xl text-sky-900">December 21</span><br />
                        <span className="text-2xl sm:text-4xl text-sky-900">2023</span>
                    </motion.div>
                </div>
            </div>

            <div className="flex flex-col items-end mb-24 sm:pe-96">
                <div>
                    <motion.p
                        ref={paragraphRef}
                        initial="hidden"
                        animate={paragraphInView ? 'visible' : 'hidden'} // Trigger animation when in view
                        variants={fadeIn}
                        transition={{ duration: 1 }}
                        className="mb-12"
                    >
                        <span className='border-b-4 border-teal-800 pb-4 text-xl text-sky-900'>
                            The Invite
                        </span>
                    </motion.p>
                    <motion.p
                        ref={paragraphRef}
                        initial="hidden"
                        animate={paragraphInView ? 'visible' : 'hidden'} // Trigger animation when in view
                        variants={fadeIn}
                        transition={{ duration: 1 }}
                    >
                        <span className="adam text-lg sm:text-xl text-gray-500">Please join us as we</span><br />
                        <span className="adam text-lg sm:text-xl text-gray-500">exchange our sacred vows</span><br />
                        <span className="adam text-lg sm:text-xl text-gray-500">and solemnly pronounce our</span><br />
                        <span className="adam text-lg sm:text-xl text-gray-500">commitment by saying {'I do'}.</span><br /><br />
                        <span onClick={() => smoothScroll('rsvp')} className="cursor-pointer text-xl mt-8 font-semibold underline underline-offset-8 text-sky-900">
                            RSVP
                        </span>
                    </motion.p>
                </div>
            </div>

            <div className="relative sm:px-20 md:px-20 lg:px-28 xl:ps-72">
                <div className="flex flex-col sm:flex-col-reverse mb-12">
                    <div className="relative">
                        <motion.p
                            ref={paragraphRef}
                            initial="hidden"
                            animate={paragraphInView ? 'visible' : 'hidden'} // Trigger animation when in view
                            variants={fadeIn}
                            transition={{ duration: 1 }}
                            className="leading-[0]"
                        >
                            <span className='text-[12rem] text-transparent invite-numbers'>
                                12
                            </span>
                        </motion.p>

                        <div className="flex items-center sm:-mt-16">
                            <motion.img
                                ref={imageRef} // Attach the ref to the image
                                initial="hidden"
                                animate={imageInView ? 'visible' : 'hidden'}
                                variants={fadeIn}
                                transition={{ duration: 1 }}
                                src="/images/1stimage.jpg"
                                alt="An animated image"
                                className="z-10 rounded-[2.5rem] relative w-1/2 sm:w-1/2 me-2"
                            />
                            <p className="text-xs sm:text-xl text-gray-500"><span className="font-semibold">Symphony Cruise:</span> He asked, "Tara pakasal na tayo?"</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end relative sm:ml-36 -mt-24 sm:-mt-36 z-0">
                    <div className="relative">
                        <motion.img
                            ref={imageRef2} // Attach the ref to the image
                            initial="hidden"
                            animate={imageInView2 ? 'visible' : 'hidden'}
                            variants={fadeIn}
                            transition={{ duration: 1 }}
                            src="/images/bridge.jpg"
                            alt="An animated image"
                            className="z-40 rounded-[2.5rem] relative w-full sm:w-full"
                        />
                        <motion.div
                            ref={ref} // Attach the ref to the motion.div
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'} // Trigger animation when in view
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { delay: 1 } },
                            }}
                            transition={{ duration: 1 }}
                        >
                            <p className="mb-12 z-0 relative leading-[0] mt-8 sm:mt-28 text-end">
                                <span className="pb-4 text-[12rem] text-transparent invite-numbers">
                                    21
                                </span>
                            </p>
                        </motion.div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-col-reverse mb-12">
                    <div className="relative">
                        <div className="flex items-center">
                            <motion.img
                                ref={imageRef3} // Attach the ref to the image
                                initial="hidden"
                                animate={imageInView3 ? 'visible' : 'hidden'}
                                variants={fadeIn}
                                transition={{ duration: 1 }}
                                src="/images/ring.jpg"
                                alt="An animated image"
                                className="z-10 rounded-[2.5rem] relative w-1/2 sm:w-1/2 me-2"
                            />
                            <p className="text-xs sm:text-xl text-gray-500">She said <span className="font-semibold">YES!</span> </p>
                        </div>
                        <motion.div
                            ref={ref} // Attach the ref to the motion.div
                            initial="hidden"
                            animate={imageInView3 ? 'visible' : 'hidden'} // Trigger animation when in view
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { delay: 1 } },
                            }}
                            transition={{ duration: 1 }}
                        >
                            <p className="mb-12 z-0 relative leading-[0] mt-8 sm:mt-28 md">
                                <span className="pb-4 text-[12rem] text-transparent invite-numbers">
                                    23
                                </span>
                            </p>
                        </motion.div>
                    </div>
                </div>
                <div className="flex flex-col items-end relative -mt-48 sm:-mt-96 z-0">
                    <motion.img
                        ref={imageRef4} // Attach the ref to the image
                        initial="hidden"
                        animate={imageInView4 ? 'visible' : 'hidden'}
                        variants={fadeIn}
                        transition={{ duration: 1 }}
                        src="/images/cruise.jpg"
                        alt="An animated image"
                        className="z-40 rounded-[2.5rem] relative w-2/3 sm:w-2/3"
                    />
                </div>
            </div>
        </div>
    )
}