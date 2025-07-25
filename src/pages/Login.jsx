import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroLogin from '../sections/login/HeroLogin'
import MotionCard from '../components/MotionCard';
import LoginForm from '../sections/login/LoginForm'


const Login = () => {
  return (
    <div className='overflow-x-hidden overflow-hidden bg-[#F4FDFF]'>
        <Navbar/>
          <MotionCard>
             <HeroLogin/>
             <LoginForm/>
          </MotionCard>
        <Footer/>

    </div>
  )
}

export default Login