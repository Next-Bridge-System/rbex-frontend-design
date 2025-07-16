import Faqs from '../helpCenter/Faqs'
const HeroHelp = () => {
    return (
        <section className="bg-[#F4FDFF] pt-8 px-4  sm:px-6  lg:px-16 ">
            <div className="max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-10 flex flex-col items-start">                {/* Heading */}
                <h1 className="text-[32px] ml-6 lg:ml-20 sm:text-[36px] md:text-[40px] font-bold text-[#233D7B] leading-[20px] tracking-tight font-lato mb-6 sm:mb-10">
                    Help Center FAQs
                </h1>

                {/* Breadcrumb Links */}
                <div className="flex flex-wrap gap-2 lg:gap-0   ml-6 lg:ml-28 mb-9">
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
                    <div className="relative   w-[150px] h-[30px] rounded-[3px]">
                        <img
                            src="src/assets/Skewed Rectangle.png"
                            alt="Shop by Category Background"
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-[#4D4D4D] text-lg font-semibold z-10">
                            FAQs
                        </span>
                    </div>

                </div>
                {/* Faqs section component will set here  */}
                <Faqs />
               

            </div>

        </section>
    )
}
export default HeroHelp;