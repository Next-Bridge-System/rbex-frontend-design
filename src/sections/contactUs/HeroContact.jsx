import React from 'react'
import LeaveMessage from './LeaveMessage'

import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";


const HeroContact = () => {
    return (
        <section className="bg-[#F4FDFF] relative  pt-8 px-4  sm:px-6  lg:px-16 ">
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
           
            <div className="max-w-7xl  mx-auto mt-6 px-4 sm:px-6 lg:px-10 flex flex-col items-start">                {/* Heading */}
                <h1 className="text-[32px] ml-6 lg:ml-20 sm:text-[36px] md:text-[40px] font-bold text-[#233D7B] leading-[20px] tracking-tight font-lato mb-6 sm:mb-10">
                    Contact Us
                </h1>

                {/* Breadcrumb Links */}
                <div className="flex flex-wrap gap-4 lg:gap-0 mt-5 lg:mt-0  ml-6  lg:ml-20  ">
                    {/* Home Button */}

                    <div className="relative   w-[142px] h-[30px] rounded-[3px]">
                        <img
                            src="src/assets/Skewed Rectangle.png"
                            alt="Home Background"
                            className="absolute ml-5 inset-0 w-full h-full object-cover z-0"
                        />
                        <span className="absolute  ml-5 inset-0 flex items-center justify-center text-[#4D4D4D] text-lg font-semibold z-10">
                            Home
                        </span>
                    </div>

                    {/* Shop by Category Button */}
                    <div className="relative   w-[228px]  h-[30px] rounded-[3px]">
                        <img
                            src="src/assets/Skewed Rectangle (1).png"
                            alt="Shop by Category Background"
                            className="absolute inset-0 w-full h-full object-contain z-0"
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-[#4D4D4D] text-lg font-semibold z-10">
                            Contact Us
                        </span>
                    </div>

                </div>
                {/* Contact Form */}
                <LeaveMessage />
                <div className='w-full mb-16 '>
                    <img src='src/assets/Trustedshopping.png' alt='trust' className='w-full  object-cover ' />
                </div>

            </div>

        </section>
    )
}

export default HeroContact