import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroAbout from '../sections/aboutUs/HeroAbout'
import Achievements from '../sections/aboutUs/Achievements'
import SeatBanner from '../sections/aboutUs/SeatBanner'
const AboutUs = () => {
  return (
     <div className="overflow-x-hidden bg-[#F4FDFF]">
        <Navbar/>
        <HeroAbout/>
        <Achievements/>
        <SeatBanner/>
        <Footer/>
     </div>
  )
}

export default AboutUs