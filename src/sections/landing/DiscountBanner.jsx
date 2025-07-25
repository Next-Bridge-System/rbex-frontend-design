const DiscountBanner = () => {
  return (

    
<div className="relative w-full  mx-auto h-[90px] sm:h-[150px] md:h-[200px] lg:h-[190px] mt-36">
    
      {/* Background Image */}
      <img
        src="/assets/Section.png"
        alt="Background"
        className="absolute  w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay */}
      <img
        src="/assets/Gradient.png"
        alt="Gradient Overlay"
        className="absolute  w-full  h-full object-cover z-10"
      />

      {/* Text Content */}
     <div className="absolute  inset-0 z-20 flex items-center justify-between px-4 sm:px-20">
     <div className="w-full max-w-8xl mx-auto flex items-center justify-between">
    {/* Left Text */}
    <div className="max-w-[230px] lg:max-w-[540px] lg:ml-9 sm:max-w-md">
      <h2 className="text-base sm:text-xl text-white md:text-3xl lg:text-3xl font-bold mb-2">
        Get 22% off
      </h2>
      <p className="text-xs text-white lg:text-[15px] sm:text-sm opacity-70">
        This discount is not valid in conjunction with other offers.
      </p>
    </div>

    {/* Right Disc Plate */}
    <img
      src="/assets/discount.png"
      alt="Disc Plate"
      className="h-[120px] sm:h-[180px] md:h-[200px] lg:h-[290px] object-contain"
    />
  </div>
</div>


    </div>
    
  );
};

export default DiscountBanner;
