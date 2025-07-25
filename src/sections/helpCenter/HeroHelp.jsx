import { useNavigate } from 'react-router-dom';
import Faqs from '../helpCenter/Faqs'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const HeroHelp = () => {
  const navigate = useNavigate();

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };

  return (
    <section className="bg-[#F4FDFF] relative pt-8 px-4 sm:px-6 lg:px-16">
      {/* Layered Background Vectors */}
      <img src="/assets/bg1.png" alt="bg1" className="absolute top-0 left-0 w-[70%] lg:w-[45%] opacity-10 z-0 pointer-events-none" />
      <img src="/assets/bg2.png" alt="bg2" className="absolute top-0 left-0 w-[60%] lg:w-[40%] opacity-10 z-0 pointer-events-none" />
      <img src="/assets/bg3.png" alt="bg3" className="absolute top-0 left-0 w-[50%] lg:w-[35%] opacity-10 z-0 pointer-events-none" />

      {/* Animated Content Block */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        className="max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-10 flex flex-col items-start"
      >
        <h1 className="text-[32px] ml-6 lg:ml-20 sm:text-[36px] md:text-[40px] font-bold text-[#233D7B] leading-[20px] tracking-tight font-lato mb-6 sm:mb-10">
          Help Center FAQs
        </h1>

        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 lg:gap-0 ml-6 lg:ml-28 mb-9">
          <div className="relative w-[142px] h-[30px] rounded-[3px]">
            <img src="/assets/Skewed Rectangle.png" alt="Home Background" className="absolute ml-5 inset-0 w-full h-full object-cover z-0" />
            <span className="absolute ml-5 cursor-pointer inset-0 flex items-center justify-center text-[#4D4D4D] text-lg font-semibold z-10"
              onClick={() => navigate('/')}>
              Home
            </span>
          </div>

          <div className="relative w-[150px] h-[30px] rounded-[3px]">
            <img src="/assets/Skewed Rectangle.png" alt="Shop by Category Background" className="absolute inset-0 w-full h-full object-cover z-0" />
            <span className="absolute inset-0 flex items-center justify-center text-[#4D4D4D] text-lg font-semibold z-10">
              FAQs
            </span>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="relative mx-auto">
          <Faqs />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroHelp;