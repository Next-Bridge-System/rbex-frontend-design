import React from 'react';

import Carousal from '../suspension/Carousal';

const HeroCards = () => {
   const cards = [
  {
    image: '/assets/blogCar1.svg',
    icon: '/assets/blog1.png', head1: 'by admin',
    icon2: '/assets/blog2.png', head2: '2 Comments',
    icon3: '/assets/blog3.png', head3: 'body parts',
    title: "Electric cars aren't pollution-free; they have to get their energy from somewhere",
    title2: "Electric cars aren’t pollution-free;",
    date: 'May 20,2020',
  },
  {
    image: '/assets/blogCar2.svg',
    icon: '/assets/blog1.png', head1: 'by admin',
    icon2: '/assets/blog2.png', head2: '2 Comments',
    icon3: '/assets/blog3.png', head3: 'body parts',
    title: 'You can know or not know how a car runs and still enjoy riding in a car',
    title2: 'You can know or not know how a car',
    date: 'May 20,2020',
  },
  {
    image: '/assets/blogCar3.svg',
    icon: '/assets/blog1.png', head1: 'by admin',
    icon2: '/assets/blog2.png', head2: '2 Comments',
    icon3: '/assets/blog3.png', head3: 'body parts',
    title: 'Race cars, no matter what size or shape they are, they do the same things. It is not complicated',
    title2: 'Race cars, no matter what size or shape',
    date: 'May 20,2020',
  },
];


    return (
        <section className="bg-[#F4FDFF]   pb-16 px-4 sm:px-6 lg:px-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

                {/* Left Section */}
                <div className="w-full lg:w-2/3 space-y-10">
                    {cards.map((card, index) => (
                        <div key={index} className="overflow-hidden">

                            {/* Image with Date Overlay */}
                            <div className="relative w-full">
                                <img
                                    src={card.image}
                                    alt={`Card ${index + 1}`}
                                    className="w-full h-[400px] object-cover rounded-md"
                                />
                                <div className="absolute bottom-4 left-4 bg-red-600 text-white text-xs px-4 py-2 rounded-md shadow-md">
                                    {card.date}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-4">
                                <div className="flex items-center gap-2 mb-6">
                                    <img src={card.icon} alt={`Icon ${index + 1}`} className="w-5 h-5" />
                                    <span className="text-gray-500 text-sm">{card.head1}</span>
                                    <img src={card.icon2} alt={`Icon ${index + 1}`} className="w-5 h-5" />
                                    <span className="text-gray-500 text-sm">{card.head2}</span>
                                    <img src={card.icon3} alt={`Icon ${index + 1}`} className="w-5 h-5" />
                                    <span className="text-gray-500 text-sm">{card.head3}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">{card.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <button className="bg-[#E52727] text-white px-7 py-2 rounded-md text-xs hover:bg-red-600 transition">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                            

                {/* Right Section */}
                <div className="w-full lg:w-1/4 space-y-6">
                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <h4 className="text-xl font-light font-rubik text-[#333333] border-b p-2 mb-4">Recent Posts</h4>
                        {cards.map((card, index) => (
                            <div key={index} className="flex items-center gap-4 mb-4">
                                {/* Thumbnail Image */}
                                <img
                                    src={card.image}
                                    alt={`Recent ${index + 1}`}
                                    className="w-[100px] h-[80px] object-cover rounded-md"
                                />

                                {/* Title */}
                                <h5 className="text-sm  text-[#333333] leading-snug">
                                    {card.title2}
                                </h5>
                            </div>
                        ))}
                    </div>


                    {/* Banner */}
                    <div>
<img src="/assets/blogbanner.svg" alt="Blog Banner" className="w-full h-auto rounded-lg shadow" />
                    </div>
                    {/* categories */}
                    <div className=" bg-white p-4 rounded-xl  shadow-md">
                        <h4 className="text-xl font-light font-rubik text-[#333333] border-b p-2 mb-4">Categories</h4>
                        <ul className='list-disc pl-5 p-2 text-[#808080] space-y-3 text-sm'>
                            <li>Body Parts (3)</li>
                            <li>Engine & Drivetrain (3) </li>
                            <li>Interior Parts (4)</li>
                        </ul>
                    </div>
                    {/* tags */}
                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <h4 className="text-xl font-light font-rubik text-[#333333] border-b p-2 mb-4">Tags</h4>

                        <div className="flex flex-wrap gap-3">
                            <span className="bg-[#EFEFEF] px-3 py-1 rounded text-sm text-[#808080]">Air Filters</span>
                            <span className="bg-[#EFEFEF] px-3 py-1 rounded text-sm text-[#808080]">Brake Discs</span>
                            <span className="bg-[#EFEFEF] px-3 py-1 rounded text-sm text-[#808080]">Bumpers</span>
                            <span className="bg-[#EFEFEF] px-3 py-1 rounded text-sm text-[#808080]">Car Care</span>
                            <span className="bg-[#EFEFEF] px-3 py-1 rounded text-sm text-[#808080]">Car Covers</span>
                            <span className="bg-[#EFEFEF] px-3 py-1 rounded text-sm text-[#808080]">Cargo Accessories</span>
                            <span className="bg-[#EFEFEF] px-3 py-1 rounded text-sm text-[#808080]">Consoles & Organizers</span>
                            <span className="bg-[#EFEFEF] px-3 py-1 rounded text-sm text-[#808080]">Corner Lights</span>
                            <span className="bg-[#EFEFEF] px-3 py-1 rounded text-sm text-[#808080]">Floor Mats</span>
                            <span className="bg-[#EFEFEF] px-3 py-1 rounded text-sm text-[#808080]">Fog Lights</span>
                            <span className="bg-[#EFEFEF] px-3 py-1 rounded text-sm text-[#808080]">Hoods</span>
                            <span className="bg-[#EFEFEF] px-3 py-1 rounded text-sm text-[#808080]">Wheel Hubs</span>
                        </div>
                    </div>

                </div>
            </div>
             <Carousal/>
        </section>
    );
};

export default HeroCards;
