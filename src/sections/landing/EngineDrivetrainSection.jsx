import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Plastic Bumper Toyota Corolla 2014–2016',
        price: '$563.00',
        image: '/assets/corolla.png',
    },
    {
        id: 2,
        name: 'Rear plastic bumper Honda City 2017',
        price: '$563.00',
        image: '/assets/city.png',
    },
    {
        id: 3,
        name: 'Metal off-road bumper Jeep-style SUV.',
        price: '$2,356.00',
        image: '/assets/jeep.png',
    },
    {
        id: 4,
        name: 'Front Bumper Ford Mustang 2018',
        price: '$720.00',
        image: '/assets/corolla.png',
    },
    {
        id: 5,
        name: 'Rear Bumper BMW 3 Series 2019',
        price: '$890.00',
        image: '/assets/city.png',
    },
];

const EngineDrivetrainSection = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quantities, setQuantities] = useState(products.map(() => 0));
    const itemsToShow = 3; // Show 3 products at a time (aside + 2 products)

    const nextSlide = () => {
        setCurrentIndex(prev => 
            prev >= products.length - (itemsToShow - 1) ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex(prev => 
            prev <= 0 ? products.length - (itemsToShow - 1) : prev - 1
        );
    };

    const updateQuantity = (index, newQuantity) => {
        const newQuantities = [...quantities];
        newQuantities[index] = newQuantity;
        setQuantities(newQuantities);
    };

    return (
        <section className="text-gray-800 p-10 mb-10">
            {/* Top Heading */}
            <div className="w-full px-4 lg:px-16 lg:mb-0 mb-4">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:h-[120px] gap-6">
                    {/* Left: Category Buttons */}
                    <div className="flex gap-4 lg:ml-52">
                        <button 
                            className="bg-strip text-xs px-5 py-2 text-white rounded-full hover:bg-red-600"
                            onClick={() => {
                                navigate('/shop-by-category');
                                window.scrollTo(0, 0);
                            }}
                        >
                            Engine & Drivetrain
                        </button>
                    </div>

                    {/* Right: Arrows */}
                    <div className="flex items-center gap-4 mx-5 text-white">
                        <button 
                            onClick={prevSlide}
                            className="w-7 h-7 rounded-full bg-strip flex items-center justify-center hover:brightness-90"
                        >
                            <img
                                src="/assets/Vector.png"
                                alt="Left Arrow"
                                className="w-2 h-2 object-contain"
                            />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="w-7 h-7 rounded-full bg-strip flex items-center justify-center hover:brightness-90"
                        >
                            <img
                                src="/assets/Vector (1).png"
                                alt="Right Arrow"
                                className="w-2 h-2 object-contain"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Carousel */}
            <div className="relative overflow-hidden max-w-7xl mx-auto">
                <div className="flex transition-transform duration-300" style={{ 
                    transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                    width: `${(products.length + 1) * (100 / 8)}%` // +1 for the aside
                }}>
                    {/* Static Aside - not part of the carousel */}
                    <div className="w-1/3 px-2 flex-shrink-0">
                        <aside
                            className="w-full h-[470px] text-white p-4 rounded bg-cover bg-center flex flex-col justify-between"
                            style={{ backgroundImage: 'url(/assets/sidebar-bg.png)' }}
                        >
                            <div className='justify-center flex p-6'>
                                <div className='text-left'>
                                    <h1 className="font-rubik font-bold text-[42.83px] leading-[51.4px] tracking-[0px] align-middle">
                                        Find the Perfect Body Part For Your Car
                                    </h1>
                                </div>
                            </div>
                            <button
                                className="relative py-2 w-[55%] mx-auto mb-5 text-sm rounded text-white overflow-hidden group bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-700 hover:to-red-800 transition"
                                onClick={() => {
                                    navigate('/shop-by-category');
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <span className="relative z-10">Shop Now</span>
                                <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
                            </button>
                        </aside>
                    </div>

                    {/* Product Cards */}
                    {products.map(({ id, name, price, image }, index) => {
                        const quantity = quantities[index];
                        const increment = () => updateQuantity(index, quantity + 1);
                        const decrement = () => updateQuantity(index, Math.max(0, quantity - 1));

                        return (
                            <div
                                key={id}
                                className="w-1/3 px-2 flex-shrink-0"
                            >
                                <div className="w-full bg-white h-[450px] lg:h-[500px] shadow border-gray-200 border rounded p-3 hover:shadow-md">
                                    <div className="-mx-3 mb-2">
                                        <img
                                            src={image}
                                            alt={name}
                                            className="w-full h-[60%] object-cover border-b border-gray-200"
                                        />
                                    </div>

                                    <h3 className="text-[#414141] text-[20px] font-semibold font-roboto">{name}</h3>
                                    <p className="text-[#333333] font-rubik mt-5 font-medium text-[16px]">{price}</p>

                                    <div className="flex justify-center mt-6">
                                        {quantity === 0 ? (
                                            <button
                                                onClick={increment}
                                                className="bg-strip text-white py-2 px-7 text-xs lg:text-sm rounded hover:bg-red-600 transition-colors"
                                            >
                                                Add to cart
                                            </button>
                                        ) : (
                                            <div className="flex items-center border border-strip rounded">
                                                <button
                                                    onClick={decrement}
                                                    className="px-3 py-1 text-white bg-strip transition-colors"
                                                >
                                                    -
                                                </button>
                                                <span className="px-3 py-1 text-strip">{quantity}</span>
                                                <button
                                                    onClick={increment}
                                                    className="px-3 py-1 text-white bg-strip transition-colors"
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

export default EngineDrivetrainSection;