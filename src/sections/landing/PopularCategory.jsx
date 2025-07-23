import React, { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: 'Head Lamp – Toyota Corolla 2014–2016',
    price: '$563.00',
    image: 'src/assets/toyota.png',
  
  },
  {
    id: 2,
    name: 'Head Lamp – Honda Civic 2017–2019',
    price: '$563.00',
    image: 'src/assets/civic.png',
  
  },
  {
    id: 3,
    name: 'Head Lamp – Suzuki Cultus 2018',
    price: '$2,356.00',
    image: 'src/assets/cultus.png',
  
  },
  {
    id: 4,
    name: 'Modified LED Head Lamp – Toyota Hilux',
    price: '$65.00',
    image: 'src/assets/hilux.png',
  
  },
  {
    id: 5,
    name: 'Head Lamp – Toyota Corolla 2014–2016',
    price: '$563.00',
    image: 'src/assets/toyota.png',
  
  },
  {
    id: 6,
    name: 'Head Lamp – Honda Civic 2017–2019',
    price: '$563.00',
    image: 'src/assets/civic.png',
  
  },
];

const PopularCategory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [quantityStates, setQuantityStates] = useState(products.map(() => 0));

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const itemsToShow = isMobile ? 1 : 4;
      return prevIndex >= products.length - itemsToShow ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const itemsToShow = isMobile ? 1 : 4;
      return prevIndex <= 0 ? products.length - itemsToShow : prevIndex - 1;
    });
  };

  const updateQuantity = (index, newQuantity) => {
    const newQuantityStates = [...quantityStates];
    newQuantityStates[index] = newQuantity;
    setQuantityStates(newQuantityStates);
  };

  const itemsToShow = isMobile ? 1 : 4;
  const itemWidth = 100 / itemsToShow;
  const containerWidth = products.length * itemWidth;

  return (
    <section className="text-gray-800 mt-20">
      {/* Top Heading */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 px-4 mb-6">
        {/* Heading */}
        <div className="w-full lg:w-auto text-center lg:text-left lg:ml-36">
          <h2 className="text-2xl font-bold text-[#333333]">Head Lamp category</h2>
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-4 justify-center lg:justify-end w-full lg:w-auto text-white lg:mr-36">
          <button 
            onClick={prevSlide}
            className="w-7 h-7 rounded-full bg-strip flex items-center justify-center hover:brightness-90"
          >
            <img
              src="src/assets/vector.png"
              alt="Left Arrow"
              className="w-3 h-3 object-contain"
            />
          </button>
          <button 
            onClick={nextSlide}
            className="w-7 h-7 rounded-full bg-strip flex items-center justify-center hover:brightness-90"
          >
            <img
              src="src/assets/vector (1).png"
              alt="Right Arrow"
              className="w-3 h-3 object-contain"
            />
          </button>
        </div>
      </div>

      {/* Product Carousel */}
      <div className="relative overflow-hidden max-w-7xl mx-auto mt-10">
        <div className="flex transition-transform duration-300" style={{ 
          transform: `translateX(-${currentIndex * itemWidth}%)`,
          width: `${products.length * (window.innerWidth < 768 ? 100 : 16.8)}%`
        }}>
          {products.map(({ id, name, price, image }, index) => {
            const quantity = quantityStates[index];
            const increment = () => updateQuantity(index, quantity + 1);
            const decrement = () => updateQuantity(index, Math.max(0, quantity - 1));

            return (
              <div
                key={id}
                className={`${isMobile ? 'w-full' : 'w-1/4'} px-2 flex-shrink-0`}
              >
                <div className="w-full lg:w-[295px] mx-7  max-w-[14%] lg:max-w-full lg:mx-0 bg-white lg:h-[490px] border border-gray-200 rounded-[10px] p-3 flex flex-col justify-between">
                  {/* Top Section */}
                  <div>
                    <div className="mb-2 -mx-3">
                      <img
                        src={image}
                        alt={name}
                        className="w-full h-[60%] object-cover border-b border-gray-200 rounded-t-[10px]"
                      />
                    </div>

                    <h3 className="text-[#333333] font-medium font-rubik text-[18px] line-clamp-2">
                      {name}
                    </h3>

                    <div className="flex items-center justify-between mt-3">
                      <p className="text-[#333333] font-rubik font-medium text-[16px]">{price}</p>
                    </div>
                  </div>

                  {/* Bottom Button */}
                  <div className="flex justify-center mt-5">
                    {quantity === 0 ? (
                      <button 
                        className="bg-strip text-white py-2 px-6 text-xs rounded hover:bg-red-600 mb-2"
                        onClick={increment}
                      >
                        Add to cart
                      </button>
                    ) : (
                      <div className="flex items-center border border-strip rounded mb-3">
                        <button 
                          className="px-3 py-1 text-strip hover:bg-red-50"
                          onClick={decrement}
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-strip">{quantity}</span>
                        <button 
                          className="px-3 py-1 text-strip hover:bg-red-50"
                          onClick={increment}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCategory;