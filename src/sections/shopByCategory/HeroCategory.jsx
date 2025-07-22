import React from 'react';
import SignForm from './SignForm';

import headlamp from '../../assets/headlamp.png';
import mirror from '../../assets/mirror.png';
import taillamp from '../../assets/taillamp.png';
import metalbumper from '../../assets/metalbumper.png';
import condenser from '../../assets/condenser.png';
import engine from '../../assets/engine.png';
import bumper from '../../assets/plasticBumper.png';
import fender from '../../assets/fender.png';
import finder from '../../assets/finder liner.png';
import generator from '../../assets/radiator2.png';
import radiator from '../../assets/radiator support.png'

import grille from '../../assets/grille.png';

import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";

const categories = [
    { label: 'Plastic Bumper', image: bumper },
    { label: 'Head Lamp', image: headlamp },
    { label: 'Mirrors', image: mirror },
    { label: 'Tail Lamp', image: taillamp },
    { label: 'Metal Bumper', image: metalbumper },
    { label: 'Hood', image: engine },
];

const secondCategories = [
    { label: 'Radiator', image: radiator },
    { label: 'Fender', image: fender },
    { label: 'Fender Liner', image: finder },
    { label: 'Generator', image: generator },
    { label: 'Condenser', image: condenser },
    { label: 'Grille', image: grille },
];

const HeroCategory = () => {
    return (
        <section className="bg-[#F4FDFF] relative pt-8 px-4 sm:px-6  overflow-hidden  lg:px-16 ">
      {/* Layered Background Vectors */}
            <img
              src={bg1}
              alt="bg1"
              className="absolute top-0  left-0 w-[70%]  lg:w-[45%]  opacity-10 z-0 pointer-events-none"
            />
            <img
              src={bg2}
              alt="bg2"
              className="absolute top-0 left-0 w-[60%] lg:w-[40%] opacity-10 z-0 pointer-events-none"
            />
            <img
              src={bg3}
              alt="bg3"
              className="absolute top-0 left-0 w-[50%] lg:w-[35%] opacity-10 z-0 pointer-events-none"
            />
            <div className="max-w-7xl z-10 mx-auto flex flex-col mt-6 items-start">
                {/* Heading */}
                <h1 className="text-[32px] ml-6 lg:ml-28 sm:text-[36px] md:text-[40px] font-bold text-[#233D7B] leading-[20px] tracking-tight font-lato mb-6 sm:mb-10">
                    Shop By Category
                </h1>

                {/* Breadcrumb Links */}
                <div className="flex flex-wrap gap-2 lg:gap-0   ml-6 lg:ml-28 mb-9">
                    {/* Home Button */}

                    <div className="relative   w-[142px] h-[30px] rounded-[3px]">
                        <img
                            src="src/assets/Skewed Rectangle.png"
                            alt="Home Background"
                            className="absolute ml-5 inset-0 w-full h-full object-cover z-0"
                        />
                        <span className="absolute  ml-5 inset-0 flex items-center justify-center text-[#4D4D4D] text-lg font-semibold z-10">
                            Home
                        </span>
                    </div>

                    {/* Shop by Category Button */}
                    <div className="relative w-[238px]  h-[30px] rounded-[3px]">
                        <img
                            src="src/assets/Skewed Rectangle (1).png"
                            alt="Shop by Category Background"
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-[#4D4D4D] text-lg font-semibold z-10">
                            Shop by category
                        </span>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid relative grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 mb-10 w-full max-w-[85%] mx-auto">
                    {categories.map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-lg overflow-hidden shadow-md bg-white hover:scale-[1.02] transition duration-300"
                        >
                            <img
                                src={item.image}
                                alt={item.label}
                                className="w-full h-[180px] sm:h-[200px] object-cover"
                            />
                            <div className="bg-strip text-white text-center py-3 font-medium text-sm">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Rust Image Block */}
                <div className="rounded-lg  lg:w-[85%]  overflow-hidden shadow-md bg-white hover:scale-[1.02] transition duration-300 md:col-span-3 flex flex-col justify-center mx-auto">
                    <img
                        src="src/assets/rust.png"
                        alt="Rust Replacement Panel"
                        className="w-full h-[230px] object-cover"
                    />
                    <div className="bg-strip text-white text-center py-3 font-medium text-sm">
                        Rust Replacement Panel
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 mb-10 w-full max-w-[85%] mx-auto mt-10">
                    {secondCategories.map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-lg overflow-hidden shadow-md bg-white hover:scale-[1.02] transition duration-300"
                        >
                            <img
                                src={item.image}
                                alt={item.label}
                                className="w-full h-[180px] sm:h-[200px] object-cover"
                            />
                            <div className="bg-strip text-white text-center py-3 font-medium text-sm">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
                <SignForm />
               <div className='w-full mb-16 '>
                    <img src='src/assets/Trustedshopping.png' alt='trust' className='w-full  object-cover ' />
                </div>
            </div>

        </section>
    );
};

export default HeroCategory;
