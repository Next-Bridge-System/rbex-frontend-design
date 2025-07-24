import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const bannerData = [
  {
    id: 1,
    title: 'Power tools of next level',
    heading: 'Mega Sale',
    image: '/assets/car1.png',
  },
  {
    id: 2,
    title: 'For Any Vehicle',
    heading: 'Body Parts',
    image: '/assets/car2.png',
  },
];

const PromoBanners = () => {
   const navigate=useNavigate();
  return (
    <section className="flex flex-col   max-w-8xl  gap-6 mx-auto md:flex-row bg-[#F4FDFF] px-4 sm:px-6 lg:px-10 py-10 mt-20 ">
      {bannerData.map(({ id, title, heading, image }, index) => {
        const direction = index === 0 ? -100 : 100;
        const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

        return (
          <motion.div
            key={id}
            ref={ref}
            initial={{ x: direction, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
            className="relative w-full max-w-[780px] h-[220px] sm:h-[250px] md:h-[280px] lg:h-[400px] rounded-lg overflow-hidden mx-auto"
          >
            {/* Background Image */}
            <img
              src={image}
              alt={heading}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Gradient Overlay */}
            <img
              src="/assets/carGradient.png"
              alt="Gradient"
              className="absolute inset-0 w-full h-full object-cover z-10"
            />

            {/* Content */}
            <div className="absolute z-20 left-4 sm:left-6 lg:left-16 top-6  sm:top-10 text-white">
              <p className="text-xs sm:text-sm lg:text-lg opacity-80">{title}</p>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold my-1 mt-4">{heading}</h1>
              <button className="mt-6 sm:mt-10 bg-strip lg:mt-20 hover:bg-red-700 text-white py-4 px-12 text-xs lg:text-lg rounded"
                 onClick={() => {
                navigate('/shop-by-category')
                window.scrollTo(0,0)
              }}
              >
                Shop Now
              </button>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default PromoBanners;
