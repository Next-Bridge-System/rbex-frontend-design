import React, { useState, useEffect } from 'react';
import heroImg from '../../assets/hero.png';
import heroImg2 from '../../assets/heroimg2.svg';
import FilterStrip from './FilterStrip';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";

// Dropdown Options
const years = [
  { value: '2002', label: '2002' },
  { value: '2005', label: '2005' },
  { value: '2010', label: '2010' },
  { value: '2015', label: '2015' },
];

const makes = [
  { value: 'corolla', label: 'Corolla' },
  { value: 'city', label: 'City' },
  { value: 'ford', label: 'Ford' },
  { value: 'honda', label: 'Honda' },
];

const models = [
  { value: 'rebirth', label: 'Rebirth' },
  { value: 'reborn', label: 'Reborn' },
  { value: 'markx', label: 'MarkX' },
];

// Custom Styling
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

const Hero = () => {
  const Navigate = useNavigate();
  const [currentVariant, setCurrentVariant] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation properties
  const animationDuration = 1200; // 1000ms
  const animationDelay = 1800; // 1500ms

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
      image: heroImg,
      description: "Easily find the exact parts your vehicle needs in seconds. Search by make, model, year, and engine type to ensure perfect fitment, improved performance, and a hassle-free shopping experience every time."
    },
    2: {
      heading: "Find Parts For Your ",
      highlight: "Vehicle",
      image: heroImg2,
      description: "Get the right parts for your specific vehicle model. Our comprehensive database ensures accurate matches for all makes and models, delivering quality parts directly to your doorstep."
    }
  };

  return (


<section className="relative bg-[#F4FDFF] py-12 overflow-hidden">
  {/* Layered Background Vectors */}
        <img
          src={bg1}
          alt="bg1"
          className="absolute top-0  left-0 w-[70%]  lg:w-[45%]  opacity-10 z-0 pointer-events-none"
        />
        <img
          src={bg2}
          alt="bg2"
          className="absolute top-0 left-0 w-[60%] lg:w-[40%] opacity-10 z-0 pointer-events-none"
        />
        <img
          src={bg3}
          alt="bg3"
          className="absolute top-0 left-0 w-[50%] lg:w-[35%] opacity-10 z-0 pointer-events-none"
        /> <div className="relative z-10 max-w-7xl mx-auto h-[400px] lg:h-[320px] flex flex-col-reverse lg:flex-row items-center justify-center">


    {/* Left Content */}
    <div className="w-full lg:w-1/1 text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
        <span className={`transition-opacity duration-1000 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {variants[currentVariant].heading}
          <span className="text-strip">{variants[currentVariant].highlight}</span>
        </span>
      </h1>
      <p className={`mt-4 text-black text-base sm:text-sm lg:text-base max-w-lg mx-auto lg:mx-0 transition-opacity duration-1000 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {variants[currentVariant].description}
      </p>

      {/* Filter Form */}
      <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
        <div className="min-w-[160px]">
          <Select options={years} placeholder="Select Year" styles={customStyles} />
        </div>
        <div className="min-w-[160px]">
          <Select options={makes} placeholder="Select Make" styles={customStyles} />
        </div>
        <div className="min-w-[160px]">
          <Select options={models} placeholder="Select Model" styles={customStyles} />
        </div>
        <button
          className="bg-strip text-white px-7 py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition"
          onClick={() => Navigate('/detail-search')}
        >
          Search
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <div className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[500px] h-[220px] sm:h-[160px] md:h-[200px] lg:h-[270px]">
        <img
          src={variants[currentVariant].image}
          alt="Hero"
          className={`w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        />
      </div>
    </div>
  </div>

  {/* Filter Strip */}
  <div className="mt-28 relative z-10">
    <FilterStrip />
  </div>
</section>

  );
};

export default Hero;