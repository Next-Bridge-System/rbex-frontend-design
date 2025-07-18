import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroBlogs from '../sections/blogs/HeroBlogs'
import HeroCards from '../sections/blogs/HeroCards'

const Blogs = () => {
  return (
    <div className='overflow-x-hidden'>
       <Navbar/>
         <HeroBlogs/>
         <HeroCards/>
       <Footer/>
    </div>
  )
}

export default Blogs