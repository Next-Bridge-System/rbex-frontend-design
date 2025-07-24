import React from 'react'
import { useNavigate } from 'react-router-dom'


const HeroBlogs = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-[#F4FDFF] relative pt-6 pb-12 px-4 sm:px-6 lg:px-16">
            {/* Layered Background Vectors */}
            <img
                src="/assets/bg1.png"
                alt="bg1"
                className="absolute top-0  left-0 w-[70%]  lg:w-[45%]  opacity-10 z-0 pointer-events-none"
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
            <div className="max-w-7xl mx-auto flex flex-col items-start">
                {/* Heading */}
                <h1 className="text-[26px] ml-6  sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#233D7B] leading-snug tracking-tight font-lato mb-4 sm:mb-8">
                    Blogs
                </h1>
                {/* Breadcrumb Links */}
                <div className="flex flex-wrap gap-2 lg:gap-0 ml-6  mb-9">
                    {/* Home Button */}
                    <div className="relative w-[142px] h-[30px] rounded-[3px]">
                        <img
                            src="/assets/Skewed Rectangle.png"
                            alt="Home Background"
                            className="absolute ml-6 inset-0 w-full h-full object-cover z-0"
                        />
                        <span className="absolute ml-5 inset-0 flex items-center cursor-pointer justify-center text-[#4D4D4D] text-lg font-semibold z-10"
                            onClick={() => {
                                navigate('/')
                                window.scrollTo(0, 0)
                            }}
                        >
                            Home
                        </span>
                    </div>

                    {/* Product Button */}
                    <div className="relative w-[162px] h-[30px] rounded-[3px]">
                        <img
                            src="/assets/Skewed Rectangle.png"
                            alt="Home Background"
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />
                        <span className="absolute inset-0 flex items-center cursor-pointer justify-center text-[#4D4D4D] text-lg font-semibold z-10"
                            onClick={() => {
                                navigate('/blogs')
                                window.scrollTo(0, 0)
                            }}
                        >
                            Blogs
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBlogs


