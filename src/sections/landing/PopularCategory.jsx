import React from 'react';

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
];

const PopularCategory = () => {
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

      {/* Product Grid */}
      <div className="flex mt-10 flex-wrap justify-center gap-4 ">
        {products.map(({ id, name, price, image}) => (
          <div
            key={id}
            className="w-full lg:w-[295px] mx-7 lg:mx-0  bg-white lg:h-[490px] border border-gray-200 rounded-[10px] p-3 flex flex-col justify-between"
          >
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
              <button className="bg-strip text-white py-2 px-6 text-xs rounded hover:bg-red-600 mb-2">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategory;
