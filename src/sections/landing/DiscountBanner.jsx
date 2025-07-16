// import React from 'react';

// const DiscountBanner = () => {
//   return (
//     <div className="relative w-full h-[200px]  mt-16 mb-10">
//   {/* Background Image */}
//   <img
//     src="src/assets/section.png"
//     alt="Background"
//     className="absolute top-10 left-0  w-full h-full object-cover z-0"
//   />

//   {/* Gradient Overlay */}
//   <img
//     src="src/assets/gradient.png"
//     alt="Gradient Overlay"
//     className="absolute left-0 top-10 w-full h-full object-cover z-10"
//   />

//   {/* Text Content */}
//   {/* Text Content */} 
//   <div className="absolute z-20 left-10 top-1/2 transform -translate-y-1/2 text-white max-w-md">
//    <h2 className="text-3xl mt-16 font-bold mb-2">Get 22% off</h2>
//     <p className="text-sm text-white opacity-70"> 
//     This discount is not valid in conjunction with other offers. 
//     </p>
//      </div>

//   {/* Disk Plate Image */}
//   <img src="src/assets/discount.png" alt="Disc Plate"
//    className="absolute h-[300px] sm:h-[200px] md:h-[300px] z-20 object-contain" />
// </div>

//   );
// };

// export default DiscountBanner;

const DiscountBanner = () => {
  return (
<div className="relative w-full h-[90px] sm:h-[150px] md:h-[200px] lg:h-[200px] mt-36   ">
      {/* Background Image */}
      <img
        src="src/assets/section.png"
        alt="Background"
        className="absolute  w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay */}
      <img
        src="src/assets/gradient.png"
        alt="Gradient Overlay"
        className="absolute  w-full  h-full object-cover z-10"
      />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex items-center text-white  px-4 sm:px-10">
        <div className="max-w-[220px] sm:max-w-md">
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            Get 22% off
          </h2>
          <p className="text-xs sm:text-sm opacity-70">
            This discount is not valid in conjunction with other offers.
          </p>
        </div>
      </div>

      {/* Disc Plate Image */}
      
      <img
        src="src/assets/discount.png"
        alt="Disc Plate"
className="absolute right-2 sm:right-10 bottom-0 h-[120px] sm:h-[180px] md:h-[200px] lg:h-[250px] z-20 object-contain"
      />
    
    </div>
  );
};

export default DiscountBanner;
