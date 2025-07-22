import SignForm from '../shopByCategory/SignForm';
import Carousal from './Carousal';
import SuspensionCards from './SuspensionCards';

import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";


const HeroSuspension = () => {
  return (
    <section className="bg-[#F4FDFF] relative pt-6 pb-12 px-4 sm:px-6 lg:px-8">
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
      />
      <div className="max-w-7xl mx-auto flex flex-col items-center lg:items-start">
        {/* Heading - Centered on mobile, left-aligned on desktop */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#233D7B] mb-6 sm:mb-10 text-center lg:text-left w-full lg:ml-24">
          Breaks & Suspension
        </h1>

        {/* Breadcrumb Links - Centered container */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-0 mb-8 sm:mb-12 w-full px-4 lg:px-24">
          {/* Home Button */}
          <div className="relative w-[120px] sm:w-[142px] h-[30px]">
            <img
              src="src/assets/Skewed Rectangle.png"
              alt="Home Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center text-[#4D4D4D] text-sm sm:text-lg font-semibold">
              Home
            </span>
          </div>

          {/* Shop by Category Button */}
          <div className="relative w-[160px] sm:w-[200px] md:w-[238px] h-[30px]">
            <img
              src="src/assets/Skewed Rectangle (1).png"
              alt="Shop by Category Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center text-[#4D4D4D] text-sm sm:text-lg font-semibold">
              Shop by category
            </span>
          </div>

          {/* Suspension and brakes */}
          <div className="relative w-[170px] sm:w-[220px] md:w-[248px] h-[30px]">
            <img
              src="src/assets/Skewed Rectangle (1).png"
              alt="Shop by Category Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center text-[#4D4D4D] text-sm sm:text-lg font-semibold">
              Break and Suspension
            </span>
          </div>
        </div>

        {/* Content Sections - Full width */}
        <div className="w-full">
          <SuspensionCards />
          <Carousal />
          <SignForm />

          <div className='w-full mb-12 sm:mb-16'>
            <img
              src='src/assets/Trustedshopping.png'
              alt='trust'
              className='w-full max-w-7xl mx-auto object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSuspension