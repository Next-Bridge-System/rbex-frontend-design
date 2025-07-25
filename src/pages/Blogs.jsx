import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroBlogs from '../sections/blogs/HeroBlogs'
import HeroCards from '../sections/blogs/HeroCards'
import MotionCard from '../components/MotionCard'


const Blogs = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <MotionCard>
        <HeroBlogs />

        <HeroCards />

      </MotionCard>
      <Footer />
    </div>
  )
}

export default Blogs