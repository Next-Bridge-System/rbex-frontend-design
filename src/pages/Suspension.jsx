import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSuspension from '../sections/suspension/HeroSuspension';


const Suspension = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <HeroSuspension/>     
      <Footer/>
    </div>
  )
}

export default Suspension