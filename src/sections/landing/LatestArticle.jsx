import React from 'react';
import { useNavigate } from 'react-router-dom';


const articles = [
  {
    id: 1,
    date: 'May 20, 2020',
    image: 'latest1.png',
    title: 'Electric Cars Aren’t Pollution-Free; They Have To Get Thei...',
    author: '-Admin',
  },
  {
    id: 2,
    date: 'May 19, 2020',
    image: 'latest2.png',
    title: 'You Can Know Or Not Know How A Car Runs And Still Enjoy Ri...',
    author: '-Admin',
  },
  {
    id: 3,
    date: 'May 19, 2020',
    image: 'latest3.png',
    title: 'Race Cars, No Matter What Size Or Shape They Are, They Do...',
    author: '-Admin',
  },
];

const LatestArticle = () => {
  const navigate=useNavigate();
  return (
    <section className="bg-[#F4FDFF] px-4 py-10 flex justify-center">
      <div className="w-full max-w-[1200px]">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#333333]">Latest Article</h2>
          <button className="bg-[#BA2027] hover:bg-red-500 text-white text-xs font-semibold px-12 py-3 rounded-md"
             onClick={() => {
                navigate('/blogs')
                window.scrollTo(0,0)
              }}
          >
            Read Articles
          </button>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.map(({ id, date, image, title, author }) => (
            <div
              key={id}
              className="bg-white rounded-lg border border-gray-200 shadow hover:shadow-md  flex flex-col"
            >
              {/* Image */}
              <div className="relative object-contain h-[250px] mb-3">
                <img
                  src={`src/assets/${image}`}
                  alt={title}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute bottom-3 left-2 bg-[#E52727] text-[#FFFFFF] text-[10px]  px-3 py-2 rounded-full">
                  {date}
                </div>
              </div>

             

              {/* Author Row */}
              <div className="flex items-center gap-2  p-5">
                <img
                  src="src/assets/tb.png"
                  alt="TB Icon"
                  className="w-10 h-10 object-contain"
                />
                <p className="text-[15px]  text-[#333333] font-medium"><span className='text-[#E52727]  font-medium'>{author}</span> | Body Parts</p>
              </div>

             
              {/* Title */}
              <h3 className="text-xl text-[#333333] font-semibold p-5 leading-tight mb-10">
                {title}
              </h3>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticle;
