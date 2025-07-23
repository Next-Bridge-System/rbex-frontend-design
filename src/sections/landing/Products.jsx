import React, { useState, useEffect } from 'react';
import DiscountBanner from "./DiscountBanner";

const products = [
    {
        id: 1,
        name: 'Condenser with Dryer Attached – KIA Sportage',
        price: '$563.00',
        image: 'src/assets/sportage.png',
    },
    {
        id: 2,
        name: 'Compact Car Condenser – Suzuki Alto',
        price: '$563.00',
        image: 'src/assets/alto.png',
    },
    {
        id: 3,
        name: 'Mini Truck Condenser – Suzuki Ravi',
        price: '$2,356.00',
        image: 'src/assets/ravi.png',
    },
    {
        id: 4,
        name: 'Heavy-Duty Condenser – SUV / 4x4',
        price: '$65.00',
        image: 'src/assets/4x4.png',
    },
    {
        id: 5,
        name: 'Performance Condenser – Toyota Corolla',
        price: '$420.00',
        image: 'src/assets/corolla.png',
    },
    {
        id: 6,
        name: 'Premium Condenser – Honda Civic',
        price: '$580.00',
        image: 'src/assets/civic.png',
    },
    {
        id: 7,
        name: 'Economy Condenser – Daihatsu Mira',
        price: '$320.00',
        image: 'src/assets/sportage.png',
    },
    {
        id: 8,
        name: 'Luxury Condenser – Mercedes E-Class',
        price: '$850.00',
        image: 'src/assets/alto.png',
    },
];

const Products = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quantityStates, setQuantityStates] = useState(products.map(() => 0));
     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


     useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // Reset index when switching between mobile and desktop to prevent display issues
            setCurrentIndex(0);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const isMobile = window.innerWidth < 768;
            const itemsToShow = isMobile ? 1 : 4;
            return prevIndex >= products.length - itemsToShow ? 0 : prevIndex + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const isMobile = window.innerWidth < 768;
            const itemsToShow = isMobile ? 1 : 4;
            return prevIndex <= 0 ? products.length - itemsToShow : prevIndex - 1;
        });
    };

    const updateQuantity = (index, newQuantity) => {
        const newQuantityStates = [...quantityStates];
        newQuantityStates[index] = newQuantity;
        setQuantityStates(newQuantityStates);
    };

    return (
        <section className="bg-[#F4FDFF] text-gray-800 pb-16">
            {/* Top Heading */}
            <div className="w-full px-4 mb-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
                    {/* Left: Heading */}
                    <div className="flex gap-4 lg:ml-16">
                        <h2 className="text-2xl font-bold text-[#333333] text-center lg:text-left">
                            Featured Products
                        </h2>
                    </div>

                    {/* Right: Arrows */}
                    <div className="flex items-center gap-4 lg:mr-14 text-white">
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
            </div>

            {/* Product Carousel */}
            <div className="relative mt-10 overflow-hidden max-w-7xl mx-auto">
                <div className="flex transition-transform duration-300" style={{ 
                    transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 768 ? 1 : 4))}%)`,
                    width: `${products.length * (window.innerWidth < 768 ? 100 : 12.5)}%`
                }}>
                    {products.map(({ id, name, price, image }, index) => {
                        const quantity = quantityStates[index];
                        const increment = () => updateQuantity(index, quantity + 1);
                        const decrement = () => updateQuantity(index, Math.max(0, quantity - 1));

                        return (
                            <div
                                key={id}
                                className={`${window.innerWidth < 768 ? 'w-full' : 'w-1/4'} px-2 flex-shrink-0`}
                            >
                                <div className="bg-white h-[570px] max-w-[12%] lg:max-w-full lg:h-[470px] border border-gray-200 rounded-[10px] p-3 flex flex-col justify-between">
                                    <div>
                                        <div className="-m-3 mb-2">
                                            <img
                                                src={image}
                                                alt={name}
                                                className="w-full h-[60%] rounded-t-[10px] object-cover border-b border-gray-200"
                                            />
                                        </div>
                                        <h3 className="font-rubik font-light text-[18px] leading-[21.6px] tracking-[0px] align-middle">{name}</h3>
                                        <p className="text-[#333333] mt-5 font-medium font-rubik text-[16px]">{price}</p>
                                    </div>
                                    <div className="flex justify-center mt-6">
                                {quantity === 0 ? (
                                    <button
                                        onClick={increment}
                                        className="bg-strip text-white py-2 px-6 text-xs rounded hover:bg-red-600 transition-colors"
                                    >
                                        Add to cart
                                    </button>
                                ) : (
                                    <div className="flex items-center border border-strip rounded">
                                        <button
                                            onClick={decrement}
                                            className="px-3 py-1 text-white bg-strip  transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="px-3 py-1 text-strip">{quantity}</span>
                                        <button
                                            onClick={increment}
                                            className="px-3 py-1 text-white bg-strip  transition-colors"
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

            <div className="mt-10 sm:px-6 lg:px-0">
                <DiscountBanner />
            </div>
        </section>
    );
};

export default Products;