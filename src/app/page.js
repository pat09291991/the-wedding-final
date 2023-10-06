import Navleft from './components/navleft'
import NavRight from './components/navright'
import Homepage from './components/homepage'

export default function Home() {

  return (
    <main className='px-10 h-screen'>
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
      <div className='basis-1 md:basis-1 px-2 sm:px-20'>
        <Homepage />
      </div>
    </main>
  )
}
