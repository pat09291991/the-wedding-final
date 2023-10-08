"use client"

import React, { useEffect, useState } from 'react'
import Navleft from './navleft'
import NavRight from './navright'
import StoryPage from './storypage'
import Rsvp from './rsvp'
import Faq from './faq'
import { AnimatePresence, motion, useAnimation, useScroll } from "framer-motion"
import Gallery from './gallery'
import MobileNavbar from './mobileNavbar'
import { useInView } from 'react-intersection-observer'

function MainPage() {
    const { scrollYProgress } = useScroll();
    const controls = useAnimation();

    const [containerRef, containerInView] = useInView({
        triggerOnce: true, // Trigger animation once when the container enters the viewport
    });

    useEffect(() => {
        controls.start({ scaleX: scrollYProgress });
    }, [controls])

    return (
        <AnimatePresence>
            <motion.div
                initial="hidden"
                animate={containerInView ? 'visible' : 'hidden'}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 1 } },
                }}
                transition={{ duration: 1 }}
                ref={containerRef}
            >
                <main className='h-screen' id="home">
                    <motion.div
                        className="progress-bar"
                        style={{ scaleX: scrollYProgress }}
                    />
                    <div className='block sm:hidden sh'>
                        <MobileNavbar />
                    </div>
                    <div className="h-screen flex items-center justify-center">
                        <img src="/images/patShe2.png" className='z-10 h-60 md:h-96' id="pat-she" />
                        <div className="bg-image-homepage"></div>
                    </div>
                    <div className='hidden sm:block show-below-650vh'>
                        <Navleft />
                    </div>
                    <div className='hidden sm:block sh'>
                        <NavRight />
                    </div>
                    <div id="story" className='bg-slate-100 min-h-screen'>
                        <StoryPage />
                    </div>
                    <div id="gallery" className='min-h-screen'>
                        <Gallery />
                    </div>
                    <div id="rsvp" className='h-screen sm:px-32'>
                        <Rsvp />
                    </div>
                    <div id="faq" className='bg-sky-900 min-h-screen sm:px-32'>
                        <Faq />
                    </div>
                </main>
            </motion.div>
        </AnimatePresence>
    )
}

export default MainPage;
