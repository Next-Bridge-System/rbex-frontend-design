import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Jason P.',
    time: '2h ago',
    rating: 5,
    image: 'ellipse.png',
    message:
      'Used them for a corporate event in Manhattan. The black car arrived on time, the driver was in full suit, and the ride was clean and quiet — exactly what we needed for our executive team.',
  },
  {
    id: 2,
    name: 'Jason P.',
    time: '2h ago',
    rating: 5,
    image: 'ellipse.png',
    message:
      'Used them for a corporate event in Manhattan. The black car arrived on time, the driver was in full suit, and the ride was clean and quiet — exactly what we needed for our executive team.',
  },
  {
    id: 3,
    name: 'Jason P.',
    time: '2h ago',
    rating: 5,
    image: 'ellipse.png',
    message:
      'Used them for a corporate event in Manhattan. The black car arrived on time, the driver was in full suit, and the ride was clean and quiet — exactly what we needed for our executive team.',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#F4FDFF] px-4 py-10 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-xl font-bold text-[#333333] mb-8">Testimonials</h2>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-8">
          {testimonials.map(({ id, name, time, rating, image, message }) => (
            <div
              key={id}
              className="bg-[#F4FAFF] rounded-lg border border-gray-200 shadow hover:shadow-md p-4 relative flex flex-col items-start"
            >
              {/* Time top-right */}
              <span className="absolute top-2 right-2 text-[10px] text-[#8F8B8B]">
                {time}
              </span>

              {/* Profile + Name + Rating */}
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={`src/assets/${image}`}
                  alt={name}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-[#333333]">{name}</h3>
                  <div className="flex items-center text-yellow-400 text-sm">
                    {[...Array(Math.floor(rating))].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                    {rating % 1 !== 0 && <span>☆</span>}
                    {/* <span className="text-[#333333] ml-1 text-xs font-semibold">{rating}</span> */}
                  </div>
                </div>
              </div>

              {/* Message */}
              <p className="text-sm text-[#333333] leading-snug">{message}</p>
            </div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <div className="flex items-center justify-center gap-5 mt-4">
          {/* Left Arrow */}
          <button className="w-6 h-6 rounded-full bg-strip text-white flex items-center justify-center hover:brightness-90">
            <img src="src/assets/vector.png" alt="Left" className="w-2 h-2" />
          </button>

          {/* Dot Indicator */}
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-3 h-3 bg-strip rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>

          {/* Right Arrow */}
          <button className="w-6 h-6 rounded-full bg-strip text-white flex items-center justify-center hover:brightness-90">
            <img src="src/assets/vector (1).png" alt="Right" className="w-2 h-2" />
          </button>
        </div>
        <div className='w-full mt-16 '>
            <img src='src/assets/Trustedshopping.png' alt='trust' className='w-full h-[200px] object-cover  mt-5' />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
