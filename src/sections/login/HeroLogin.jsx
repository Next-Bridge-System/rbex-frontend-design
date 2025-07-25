import React from 'react'
import { useNavigate } from 'react-router-dom'


const HeroLogin = () => {
    const navigate =useNavigate();
    return (
        <section className="bg-[#F4FDFF] relative pt-6 pb-12 px-4 sm:px-6 lg:px-16">
            {/* All your existing background vectors */}
            <img
                src="/assets/bg1.png"
                alt="bg1"
                className="absolute top-0 left-0 w-[70%] lg:w-[45%] opacity-10 z-0 pointer-events-none"
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
            {/* Main Div Starts from Here  */}
            <div className="max-w-7xl mx-auto flex flex-col items-start">
                {/* Your existing heading */}
                <h1 className="text-[26px] ml-6 sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#233D7B] leading-snug tracking-tight font-lato mb-4 sm:mb-8">
                    Log in
                </h1>

                {/* Your existing breadcrumb links */}
                <div className="flex flex-wrap gap-2 lg:gap-0 ml-6 mb-9">
                    <div className="relative w-[142px] h-[30px] rounded-[3px]">
                        <img
                            src="/assets/Skewed Rectangle.png"
                            alt="Home Background"
                            className="absolute ml-6 inset-0 w-full h-full object-cover z-0"
                        />
                        <span
                            className="absolute ml-5 inset-0 flex items-center justify-center text-[#4D4D4D] cursor-pointer text-lg font-semibold z-10"
                            onClick={() => navigate('/')}
                        >
                            Home
                        </span>
                    </div>

                    <div className="relative w-[142px] h-[30px] rounded-[3px]">
                        <img
                            src="/assets/Skewed Rectangle.png"
                            alt="Home Background"
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-[#4D4D4D] text-lg font-semibold z-10">
                            Log in
                        </span>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroLogin