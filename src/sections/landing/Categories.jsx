import React from 'react';
import { useNavigate } from 'react-router-dom';

import condenser from '../../assets/condenser.png';
import headlamp from '../../assets/headlamp.png';
import mirror from '../../assets/mirror.png';
import taillamp from '../../assets/taillamp.png';
import metalbumper from '../../assets/metalbumper.png';
import engine from '../../assets/engine.png';

const categories = [
  { label: 'Condenser', image: condenser },
  { label: 'Head Lamp', image: headlamp },
  { label: 'Mirrors', image: mirror },
  { label: 'Tail Lamp', image: taillamp },
  { label: 'Metal Bumper', image: metalbumper },
  { label: 'Hood', image: engine },
];

const Categories = () => {
  const navigate=useNavigate();
  return (
    <section className="bg-[#F4FDFF] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col p-10 sm:flex-row justify-between items-center  gap-4 sm:gap-0">
          <h2 className="text-2xl font-medium text-[#333333] text-center sm:text-left">
            Shop by category
          </h2>
          <button className="bg-strip hover:bg-red-700 text-white px-7 py-1.5 rounded-lg text-sm font-medium"
          onClick={()=>navigate('/shop-by-category')}
          >
            View All
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1  w-[85%] mx-auto sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
          {categories.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden shadow-md bg-white hover:scale-[1.02] transition duration-300"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-strip text-white text-center py-3 font-medium text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
