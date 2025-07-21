import React from 'react';
import SkewedRect from '../../assets/Skewed Rectangle.png'; // Adjust path if needed

const HeroDetail = () => {
  return (
    <section className="bg-[#F4FDFF] pt-6 pb-12 ml-5 lg:ml-0 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">

        {/* Top Row: Heading + Result Count */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Heading */}
          <h1 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#233D7B] leading-snug tracking-tight font-lato">
            Plastic Bumper
          </h1>

          {/* Result Count */}
          <div className="text-sm text-gray-600 mt-2 lg:mt-0">
            1 - 23 of <span className="font-medium text-[#233D7B]">159</span> Results
          </div>
        </div>

       {/* Responsive Breadcrumbs */}
<div className="flex flex-wrap ml-5 lg:ml-0 items-center gap-y-2">
  {[
    { label: 'Home', width: 'w-[140px] sm:w-[162px]' },
    { label: 'Shop by category', width: 'w-[180px] sm:w-[250px]' },
    { label: 'Plastic Bumper', width: 'w-[190px] sm:w-[200px]' },
  ].map((item, index) => (
    <div 
      key={index} 
      className={`relative ${item.width} h-[30px] rounded-[3px] ${index > 0 ? 'ml-[-20px] sm:ml-[-40px]' : ''}`}
      style={{ zIndex: 10 - index }}
    >
      <img
        src={SkewedRect}
        alt={`${item.label} Background`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center text-[#4D4D4D] text-sm sm:text-lg font-semibold px-1 truncate">
        {item.label}
      </span>
    </div>
  ))}
  
</div>
      </div>
    </section>
  );
};

export default HeroDetail;
