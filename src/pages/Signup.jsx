
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MotionCard from '../components/MotionCard';
import HeroSignup from '../sections/signup/HeroSignup';
import SignupForm from '../sections/signup/SignupForm';
import AnimatedSection from '../components/AnimationSection';
const Signup = () => {
  return (
        <div className='overflow-x-hidden overflow-hidden bg-[#F4FDFF]'>
            <Navbar/>     
               <MotionCard>
                  <HeroSignup/>                  
               </MotionCard>
               <AnimatedSection>
                  <SignupForm/>
               </AnimatedSection>
            <Footer/>        
        </div>

  )
}

export default Signup
