import React from 'react';

const products = [
    {
        id: 1,
        title: 'Aluminum Wheels Concav...',
        price: '$3,263.00',
        image: 'src/assets/related1.png',
    },
    {
        id: 2,
        title: 'Replace – OE Replaceme...',
        price: '$2,356.00',
        image: 'src/assets/related2.png',
    },
    {
        id: 3,
        title: 'Engine Block',
        price: '$326.00',
        image: 'src/assets/related3.png',
    },
    {
        id: 4,
        title: 'Radial Tires 165/70R13',
        price: '$365.00',
        image: 'src/assets/related4.svg',
    },
];

const RelatedProducts = () => {
    return (
        <section className="bg-[#F4FDFF] pt-6 pb-12 px-4 sm:px-6 mb-9 lg:px-16">
          {/* Top Heading */}
      <div className="flex flex-col lg:flex-row  justify-between items-center gap-4 px-4 mb-6">
        {/* Heading */}
        <div className="w-full lg:w-auto text-center lg:text-left">
          <h2 className="text-2xl font-bold text-[#333333]">Related Products</h2>
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-4 justify-center lg:justify-end w-full lg:w-auto text-white ">
          <div className="w-7 h-7 rounded-full bg-strip flex items-center justify-center hover:brightness-90">
            <img
              src="src/assets/vector.png"
              alt="Left Arrow"
              className="w-3 h-3 object-contain"
            />
          </div>
          <div className="w-7 h-7 rounded-full bg-strip flex items-center justify-center hover:brightness-90">
            <img
              src="src/assets/vector (1).png"
              alt="Right Arrow"
              className="w-3 h-3 object-contain"
            />
          </div>
        </div>
      </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                            className="relative min-w-[250px] shadow bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 flex flex-col justify-between mx-auto w-full max-w-[250px] sm:max-w-none h-auto sm:h-[450px]"            >
                            {/* Image */}
                        <div className="-m-2 sm:-m-3 mb-2">
                            <div className="border-b">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-[220px] sm:h-[220px] lg:h-[250px] object-cover rounded-[10px] border-gray-200"
                                />
                            </div>
                        </div>
                        {/* Title */}
                        <h3 className="font-rubik text-[#333333] font-light text-[14px] sm:text-[16px] lg:text-[18px] leading-tight mt-2">
                            {product.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                            <span className="text-[#333333] font-light font-rubik text-sm">{product.price}</span>
                        </div>

                        {/* Button */}
                        <div className="flex justify-center mt-4">
                            <button className="bg-[#E52727] text-white py-2 px-6 text-xs rounded-full hover:bg-red-600 transition-colors">
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RelatedProducts;
