import React from 'react'
import Navleft from './components/navleft'
import NavRight from './components/navright'
import StoryPage from './components/storypage'
import Rsvp from './components/rsvp'
import Faq from './components/faq'
import Link from 'next/link'
import Gallery from './components/gallery'
import MobileNavbar from './components/mobileNavbar'

function Home() {

  return (
    <main className='h-screen' id="home">
      <div className='block sm:hidden sh'>
        <MobileNavbar />
      </div>
      <div className="h-screen flex items-center justify-center ">
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
  )
}

export default Home;
