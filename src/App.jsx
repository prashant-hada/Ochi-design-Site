import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import CardsSection from './components/CardsSection'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import CallToAction from './components/CallToAction'
import ClientPage from './components/ClientPage'


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-screen h-screen text-white'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <ClientPage/>
      <CardsSection/>
      {/* <CallToAction/> */}
      <Footer/>
    </div>
    
  )
}

export default App