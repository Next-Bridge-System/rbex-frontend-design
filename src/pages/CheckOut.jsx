import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CheckOutHeading from '../sections/checkout/CheckOutHeading'
const CheckOut = () => {
  return (
     <div className="overflow-x-hidden bg-[#F4FDFF]">
    <Navbar/>
    <CheckOutHeading/>
    <Footer/>
    </div>
  )
}

export default CheckOut;