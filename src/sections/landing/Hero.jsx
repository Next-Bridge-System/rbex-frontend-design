import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FilterStrip from './FilterStrip';
import Select from 'react-select';


// Dropdown Options
const years = [
  { value: '2002', label: '2002' },
  { value: '2005', label: '2005' },
  { value: '2010', label: '2010' },
  { value: '2015', label: '2015' },
  { value: '2016', label: '2016' },
  { value: '2017', label: '2017' },
  { value: '2018', label: '2018' },
];

const makes = [
  { value: 'corolla', label: 'Corolla' },
  { value: 'city', label: 'City' },
  { value: 'ford', label: 'Ford' },
  { value: 'honda', label: 'Honda' },
  { value: 'city', label: 'City' },
  { value: 'ford', label: 'Ford' },
  { value: 'honda', label: 'Honda' },

];

const models = [
  { value: 'rebirth', label: 'Rebirth' },
  { value: 'reborn', label: 'Reborn' },
  { value: 'markx', label: 'MarkX' },
  { value: 'rebirth', label: 'Rebirth' },
  { value: 'reborn', label: 'Reborn' },
  { value: 'markx', label: 'MarkX' },
];

// // Custom Styling
// const customStyles = {
//   control: (base) => ({
//     ...base,
//     borderRadius: '12px',
//     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
//     padding: '2px 5px',
//     borderColor: '#d1d5db',
//     fontSize: '14px',
//   }),
//   menu: (base) => ({
//     ...base,
//     borderRadius: '12px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//     marginTop: '4px',
//     maxHeight: '100px',           // 👈 sets a scrollable height
//     overflowY: 'auto',            // 👈 enables vertical scroll
//     zIndex: 20                    // 👈 ensures menu stays above other elements
//   }),

//   option: (base, { isFocused }) => ({
//     ...base,
//     padding: '10px 10px',
//     fontSize: '14px',
//     backgroundColor: isFocused ? '#fdecea' : 'white',
//     color: '#333333',
//     cursor: 'pointer',
//   }),
// };

const Hero = () => {



  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ Define customStyles INSIDE the component so it can access windowWidth
  const customStyles = {
    control: (base) => ({
      ...base,
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      padding: '2px 5px',
      borderColor: '#d1d5db',
      fontSize: '14px',
    }),
    menu: (base) => ({
      ...base,
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      marginTop: '4px',
      maxHeight: windowWidth <= 768 ? '90px' : '150px', // 👈 Fixes the issue
      overflowY: 'auto',
      zIndex: 20,
    }),
    option: (base, { isFocused }) => ({
      ...base,
      padding: '10px 10px',
      fontSize: '14px',
      backgroundColor: isFocused ? '#fdecea' : 'white',
      color: '#333333',
      cursor: 'pointer',
    }),
  };

  const Navigate = useNavigate();
  const [currentVariant, setCurrentVariant] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation properties
  const animationDuration = 1000; // 1000ms
  const animationDelay = 1500; // 1500ms

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentVariant(prev => prev === 1 ? 2 : 1);
        setIsAnimating(false);
      }, animationDuration);
    }, animationDelay + animationDuration);

    return () => clearInterval(interval);
  }, []);

  // Variant content
  const variants = {
    1: {
      heading: "Best Parts Purchase ",
      highlight: "Experience",
      image: "/assets/hero.png",
      description: "Easily find the exact parts your vehicle needs in seconds. Search by make, model, year, and engine type to ensure perfect fitment, improved performance, and a hassle-free shopping experience every time."
    },
    2: {
      heading: "Find Parts For Your ",
      highlight: "Vehicle",
      image: "/assets/heroimg2.svg",
      description: "Get the right parts for your specific vehicle model. Our comprehensive database ensures accurate matches for all makes and models, delivering quality parts directly to your doorstep."
    }
  };

  return (


    <section className="relative  bg-[#F4FDFF] py-12 overflow-hidden">
      {/* Layered Background Vectors */}
      <img
        src="/assets/bg1.png"
        alt="Background 1"
        className="absolute top-0  left-0 w-[70%]  lg:w-[45%]  opacity-10 z-0 pointer-events-none"
      />
      <img
        src="/assets/bg2.png"
        alt="bg2"
        className="absolute top-0 left-0 w-[60%] lg:w-[40%] opacity-10 z-0 pointer-events-none"
      />
      <img
        src="/assets/bg3.png"
        alt="bg3"
        className="absolute top-0 left-0 w-[50%] lg:w-[35%] opacity-10 z-0 pointer-events-none"
      />
      <div className="relative z-10 mx-16  h-[400px] lg:h-[320px] flex flex-col-reverse lg:flex-row items-center justify-center">


        {/* Left Content */}
        <div className="w-full lg:w-1/1 mx-auto ml-9  text-center lg:text-left">
          {/* Slider Text Block */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVariant}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-3xl sm:text-2xl lg:text-4xl font-bold text-black leading-tight">
                {variants[currentVariant].heading}
                <span className="text-strip">{variants[currentVariant].highlight}</span>
              </h1>
              <p className="mt-4 text-black text-base sm:text-xs lg:text-sm max-w-lg mx-auto lg:mx-0">
                {variants[currentVariant].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Filter Form */}
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="min-w-[160px] ">
              <Select options={years} placeholder="Select Year" styles={customStyles} />
            </div>
            <div className="min-w-[160px]">
              <Select options={makes} placeholder="Select Make" styles={customStyles} />
            </div>
            <div className="min-w-[160px]">
              <Select options={models} placeholder="Select Model" styles={customStyles} />
            </div>
            <button
              className="bg-strip text-white px-7 py-1.5 rounded-lg text-sm font-medium hover:bg-red-700 transition"
              onClick={() => Navigate('/detail-search')}
            >
              Search
            </button>
          </div>
        </div>

        {/* Slider Image Block */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVariant}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full max-w-[280px]   sm:max-w-[340px]  lg:max-w-[500px] h-[220px] sm:h-[160px] md:h-[200px] lg:h-[350px]"
          >
            <img
              src={variants[currentVariant].image}
              alt="Hero"
              className="w-[80%] h-full object-contain"
            />
          </motion.div>
        </AnimatePresence>


      </div>

      {/* Filter Strip */}
      <div className="mt-28 relative z-10">
        <FilterStrip />
      </div>
    </section>

  );
};

export default Hero;