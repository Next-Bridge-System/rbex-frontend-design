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
    <section className="flex flex-col md:flex-row bg-[#F4FDFF] px-4 sm:px-6 lg:px-10 py-10 mt-20 gap-6">
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
            className="relative w-full max-w-[580px] h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] rounded-lg overflow-hidden mx-auto"
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
            <div className="absolute z-20 left-4 sm:left-6 top-6 sm:top-10 text-white">
              <p className="text-xs sm:text-sm opacity-80">{title}</p>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold my-1 mt-4">{heading}</h1>
              <button className="mt-6 sm:mt-10 bg-strip hover:bg-red-700 text-white py-2 px-6 text-xs rounded"
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
