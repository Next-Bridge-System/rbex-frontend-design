import React from 'react'
import HeroCheckOut from './HeroCheckOut'

const CheckOutHeading = () => {
  return (
    <section className="bg-[#F4FDFF] pt-8 px-4  sm:px-6  lg:px-16   ">
            <div className="max-w-7xl mx-auto mt-6 px-4  sm:px-6 lg:px-10 flex flex-col items-start">                {/* Heading */}
                <h1 className="text-[32px] ml-6 lg:ml-20 sm:text-[36px] md:text-[40px] font-bold text-[#233D7B] leading-[20px] tracking-tight font-lato mb-6 sm:mb-10">
                    Checkout
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

                    {/* Cart Button */}
                    <div className="relative w-[182px] h-[30px] rounded-[3px]">
                        <img
                            src="src/assets/Skewed Rectangle.png"
                            alt="Home Background"
                            className="absolute  inset-0 w-full h-full object-cover z-0"
                        />
                        <span className="absolute  inset-0 flex items-center justify-center text-[#4D4D4D] text-lg font-semibold z-10">
                            Checkout
                        </span>
                    </div>

                </div>
            </div>
           {/* Hero Checkout component will here */}
          <HeroCheckOut/>

            <div className='w-full mb-16 '>
                <img src='src/assets/Trustedshopping.png' alt='trust' className='w-full  object-cover ' />
            </div>
        </section>
  )
}

export default CheckOutHeading