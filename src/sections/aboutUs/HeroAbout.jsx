import AboutCar from '../../assets/aboutCar.svg';

const HeroAbout = () => {
  return (
   <section className="bg-[#F4FDFF] pt-6 pb-12 px-4 sm:px-6 lg:px-16">
  <div className="max-w-7xl mx-auto flex flex-col items-start">
    
    {/* Heading */}
    <h1 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#233D7B] leading-snug tracking-tight font-lato mb-4 sm:mb-8">
      About Us
    </h1>

    {/* Breadcrumb Links */}
    <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
      {['Home', 'About'].map((label, idx) => (
        <div key={idx} className="relative w-[120px] sm:w-[130px] h-[30px] rounded-[3px]">
          <img
            src="src/assets/Skewed Rectangle.png"
            alt={`${label} Background`}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <span className="absolute inset-0 flex items-center justify-center text-[#4D4D4D] text-sm sm:text-base font-semibold z-10">
            {label}
          </span>
        </div>
      ))}
    </div>

    {/* Hero Content Section */}
    <div className="w-full flex flex-col lg:flex-row items-stretch gap-6 sm:gap-10 lg:gap-12">
      
      {/* Left Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#333333] mb-4 sm:mb-6">
          About Rbex
        </h2>
        <div className="text-[#808080] text-sm sm:text-base space-y-4">
          <p>
            The more we drive the car the better they seem to operate. No noise, just stopping power! Ouis autem vel eum iure reprehenderit qui in ea voluptate verit esse quam nihil molestiae, consequatur,
          </p>
          <p>
            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit qui in ea voluptate verit qui in ea voluptate vele.
          </p>
        </div>
        <button
          type="button"
          className="bg-[#E52727] mt-6 sm:mt-8 text-white py-2.5 px-6 sm:px-8 rounded-xl text-sm sm:text-base hover:bg-red-600 transition"
        >
          Send a Message
        </button>
      </div>

      {/* Right Content - Image */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img
          src={AboutCar}
          alt="About Rebex"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</section>

  )
}

export default HeroAbout;