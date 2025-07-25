import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroProduct from '../sections/Products/HeroProduct'
import DescriptionProduct from '../sections/Products/DescriptionProduct'
import RelatedProducts from '../sections/Products/RelatedProducts'
const Products = () => {
  return (
     <div className='overflow-x-hidden bg-[#F4FDFF]'>
       <Navbar/>
        <HeroProduct/>
        <DescriptionProduct/>
        <RelatedProducts/>
       <Footer/>
     </div>
  )
}

export default Products
