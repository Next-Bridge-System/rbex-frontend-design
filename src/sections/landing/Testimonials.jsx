import React, { useState } from 'react';
import MotionCard from '../../components/MotionCard';

const testimonials = [
  {
    id: 1,
    name: 'Jason P.',
    time: '2h ago',
    rating: 5,
    image: 'Ellipse.png',
    message:
      ' “Used them for a corporate event in Manhattan. The black car arrived on time, the driver  was in full suit, and the ride was clean and quiet — exactly what we needed for our executive  team.”',
  },
  {
    id: 2,
    name: 'Sarah K.',
    time: '1d ago',
    rating: 4,
    image: 'Ellipse.png',
    message:
      ' “Used them for a corporate event in Manhattan. The black car arrived on time, the driver  was in full suit, and the ride was clean and quiet — exactly what we needed for our executive  team.”'
  },
  {
    id: 3,
    name: 'David L.',
    time: '3h ago',
    rating: 5,
    image: 'Ellipse.png',
    message:
      ' “Used them for a corporate event in Manhattan. The black car arrived on time, the driver  was in full suit, and the ride was clean and quiet — exactly what we needed for our executive  team.”'
  },
  {
    id: 4,
    name: 'Emily R.',
    time: '5h ago',
    rating: 4,
    image: 'Ellipse.png',
    message:
      ' “Used them for a corporate event in Manhattan. The black car arrived on time, the driver  was in full suit, and the ride was clean and quiet — exactly what we needed for our executive  team.”'
  },
  {
    id: 5,
    name: 'Michael T.',
    time: '1w ago',
    rating: 5,
    image: 'Ellipse.png',
    message:
      ' “Used them for a corporate event in Manhattan. The black car arrived on time, the driver  was in full suit, and the ride was clean and quiet — exactly what we needed for our executive  team.”'
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const nextSlide = () => {
    if (startIndex + visibleCount < testimonials.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="bg-[#F4FDFF] px-9 py-10 flex justify-center">
      <div className="max-w-8xl   justify-between items-center gap-4 lg:gap-0">
        {/* Section Heading */}
        <h2 className="text-4xl font-semibold text-[#333333] mb-8">Testimonials</h2>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16 transition-all duration-300">
          {visibleTestimonials.map(({ id, name, time, rating, image, message }, index) => {
            const direction = index === 0 ? 'left' : index === 1 ? 'top' : 'right';
            return (
              <MotionCard key={id} direction={direction} delay={index * 0.2}>
                <div className="bg-[#F4FAFF] rounded-lg border border-gray-200 shadow hover:shadow-md p-4 relative flex flex-col items-start">
                  <span className="absolute top-2 right-2 text-[10px] text-[#8F8B8B]">{time}</span>
                  <div className="flex items-center gap-3 mb-2">
                    <img src={`/assets/${image}`} alt={name} className="w-12 h-12 object-cover rounded-full" />
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold text-[#333333]">{name}</h3>
                      <div className="flex items-center text-yellow-400 text-lg">
                        {[...Array(Math.floor(rating))].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-[#333333] leading-snug">{message}</p>
                </div>
              </MotionCard>
            );
          })}
        </div>

        {/* Carousel Navigation */}
        <div className="flex items-center mb-9 justify-center gap-5 mt-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={startIndex === 0}
            className={`w-8 h-8 rounded-full bg-strip text-white flex items-center justify-center hover:brightness-90 ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            <img src="/assets/Vector.png" alt="Left" className="w-3 h-3" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1">
            {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${i === startIndex ? 'bg-strip w-3 h-3' : 'bg-gray-300'
                  }`}
              ></span>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={startIndex + visibleCount >= testimonials.length}
            className={`w-8 h-8 rounded-full bg-strip text-white flex items-center justify-center hover:brightness-90 ${startIndex + visibleCount >= testimonials.length ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            <img src="/assets/Vector (1).png" alt="Right" className="w-3 h-3" />
          </button>
        </div>

        <div className=" mx-auto mt-20 ">
          <img
            src="/assets/Trustedshopping.png"
            alt="Trust"
            className="w-full object-cover mt-5"
          />

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
