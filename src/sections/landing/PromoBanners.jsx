import React from 'react';

const bannerData = [
  {
    id: 1,
    title: 'Power tools of next level',
    heading: 'Mega Sale',
    image: 'src/assets/car1.png',
  },
  {
    id: 2,
    title: 'For Any Vehicle',
    heading: 'Body Parts',
    image: 'src/assets/car2.png',
  },
];

const PromoBanners = () => {
  return (
    <section className="flex flex-col md:flex-row bg-[#F4FDFF] px-4 sm:px-6 lg:px-10 py-10 mt-20 gap-6">
      {bannerData.map(({ id, title, heading, image }) => (
        <div
          key={id}
          className="relative w-full max-w-[580px] h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] rounded-lg overflow-hidden mx-auto"
        >
          {/* Background Image */}
          <img
            src={image}
            alt={heading}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Gradient Overlay */}
          <img
            src="src/assets/carGradient.png"
            alt="Gradient"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />

          {/* Content */}
          <div className="absolute z-20 left-4 sm:left-6 top-6 sm:top-10 text-white">
            <p className="text-xs sm:text-sm opacity-80">{title}</p>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold my-1 mt-4">{heading}</h1>
            <button className="mt-6 sm:mt-10 bg-strip hover:bg-red-700 text-white py-2 px-6 text-xs rounded">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PromoBanners;
