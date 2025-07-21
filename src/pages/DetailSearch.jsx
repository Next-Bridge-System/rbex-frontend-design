import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroDetail from '../sections/detailSearch/HeroDetail'
import DetailCards from '../sections/detailSearch/DetailCards'
import Carousal from '../sections/suspension/Carousal'
import Notification from '../sections/detailSearch/Notification'
const DetailSearch = () => {
  return (
    <div className='overflow-x-hidden bg-[#F4FDFF] '>
       <Navbar/>
         <HeroDetail/>
         <DetailCards/>
         <Carousal/>
         <Notification/>
       <Footer/>
    </div>
  )
}

export default DetailSearch