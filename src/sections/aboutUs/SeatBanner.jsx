import React from 'react';

const SeatBanner = () => {
  return (
    <div className="relative w-full h-[100px] sm:h-[150px] md:h-[180px] lg:h-[200px] mb-20 mt-10 overflow-visible">
      {/* Background Image */}
      <img
        src="src/assets/section.png"
        alt="Background"
        className="absolute w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay */}
      <img
        src="src/assets/gradient.png"
        alt="Gradient Overlay"
        className="absolute w-full h-full object-cover z-10"
      />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex items-center text-white px-4 sm:px-10">
  <div className="w-full max-w-[200px] xs:max-w-[220px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[580px]">
    <h2 className="text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-rubik font-semibold mb-1 sm:mb-2">
      Take care of your Seats <span className="text-yellow-300">22% off</span>
    </h2>
    <p className="text-[6px] font-rubik xs:text-xs sm:text-xs opacity-80">
      This discount is not valid in conjunction with other offers
    </p>
  </div>
</div>

      {/* Seat Image - Overlapping top and bottom */}
      <img
        src="src/assets/aboutSeat.svg"
        alt="Seat"
        className="absolute right-0 h-[140px] sm:h-[220px] md:h-[260px] lg:h-[300px] z-20 object-contain"
        style={{
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      />
    </div>
  );
};

export default SeatBanner;