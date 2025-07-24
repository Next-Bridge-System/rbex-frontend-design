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
  const navigate = useNavigate();
  return (
    <section className="bg-[#F4FDFF] px-9 py-10 flex justify-center">
        <div className="  max-w-7xl justify-between items-center gap-4 lg:gap-0">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-col lg:flex-row px-12 justify-between items-center mb-8">
          <h2 className="text-2xl  font-semibold mb-5 lg:mb-0 text-[#333333]">Latest Article</h2>
          <button className="bg-[#BA2027] hover:bg-red-500 text-white text-xs lg:text-sm  px-7 py-2 rounded-md"
            onClick={() => {
              navigate('/blogs')
              window.scrollTo(0, 0)
            }}
          >
            Read Articles
          </button>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 "

        >
          {articles.map(({ id, date, image, title, author }) => (
            <div
              key={id}
              className="bg-white  ml-4 rounded-lg border border-gray-200 cursor-pointer shadow hover:shadow-md  flex flex-col"
              onClick={() => {
                navigate('/blogs')
                window.scrollTo(0, 0)
              }}
            >
              {/* Image */}
              <div className="relative object-contain h-[300px]  mb-3">
                <img
                  src={`/assets/${image}`}
                  alt={title}
                  className="w-full h-full object-cover rounded-md cursor-pointer"

                />
                <div className="absolute bottom-3 left-2 bg-[#E52727] text-[#FFFFFF] text-xs  px-2 py-1 rounded-full">
                  {date}
                </div>
              </div>



              {/* Author Row */}
              <div className="flex items-center gap-2  p-5">
                <img
                  src="/assets/tb.png"
                  alt="TB Icon"
                  className="w-8 h-8 object-contain"
                />
                <p className="text-sm  text-[#333333] font-medium"><span className='text-[#E52727]  font-medium'>{author}</span> | Body Parts</p>
              </div>


              {/* Title */}
              <h3 className="text-lg text-[#333333] font-semibold p-5 leading-tight mb-10">
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
