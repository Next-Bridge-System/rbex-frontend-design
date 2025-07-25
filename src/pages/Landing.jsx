import AnimatedSection from '../components/AnimationSection';
import Navbar from '../components/Navbar'
import Categories from '../sections/landing/Categories'
import EngineDrivetrainSection from '../sections/landing/EngineDrivetrainSection'
import Features from '../sections/landing/Features'
import Hero from '../sections/landing/Hero'
import Products from '../sections/landing/Products'
import PopularCategory from '../sections/landing/PopularCategory'
import PromoBanners from '../sections/landing/PromoBanners'
import Items from '../sections/landing/Items'
import LatestArticle from '../sections/landing/LatestArticle'
import Testimonials from '../sections/landing/Testimonials'
import Footer from '../components/Footer'



const Landing = () => {

  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <AnimatedSection ><Hero /></AnimatedSection>
      <AnimatedSection ><Features /></AnimatedSection>
      <AnimatedSection ><Categories /></AnimatedSection>
      <AnimatedSection ><EngineDrivetrainSection /></AnimatedSection>
      <AnimatedSection ><Products /></AnimatedSection>
      <AnimatedSection ><PopularCategory /></AnimatedSection>
      <AnimatedSection ><PromoBanners /></AnimatedSection>
      <AnimatedSection ><Items /></AnimatedSection>
      <AnimatedSection ><LatestArticle /></AnimatedSection>
      <AnimatedSection ><Testimonials /></AnimatedSection>
      <Footer />
    </div>
  );
};

export default Landing;

