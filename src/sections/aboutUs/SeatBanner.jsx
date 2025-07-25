import React from 'react';

const SeatBanner = () => {
  return (
    <div className="relative w-full h-[100px] sm:h-[150px] md:h-[180px] lg:h-[200px] mb-20 mt-10 overflow-visible">
      {/* Background Image - Full width */}
      <img
        src="/assets/Section.png"
        alt="Background"
        className="absolute w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay - Full width */}
      <img
        src="/assets/Gradient.png"
        alt="Gradient Overlay"
        className="absolute w-full h-full object-cover z-10"
      />

      {/* Container for content and image */}
      <div className="container mx-auto relative h-full z-20 px-20">
        <div className="relative h-full flex items-center ">
          {/* Text Content */}
          <div className="w-full max-w-[200px] xs:max-w-[220px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[580px]">
            <h2 className="text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-rubik font-semibold mb-1 sm:mb-2 text-white">
              Take care of your Seats <span className="text-yellow-300">22% off</span>
            </h2>
            <p className="text-[6px] font-rubik xs:text-xs sm:text-xs opacity-80 text-white">
              This discount is not valid in conjunction with other offers
            </p>
          </div>

          {/* Seat Image - Overlapping top and bottom */}
          <img
            src="/assets/aboutSeat.svg"
            alt="Seat"
            className="absolute right-0 h-[140px] sm:h-[220px] md:h-[260px] lg:h-[300px] object-contain"
            style={{
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SeatBanner;