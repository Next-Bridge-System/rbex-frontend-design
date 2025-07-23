import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Plastic Bumper Toyota Corolla 2014–2016',
        price: '$563.00',
        image: 'src/assets/corolla.png',
    },
    {
        id: 2,
        name: 'Rear plastic bumper Honda City 2017',
        price: '$563.00',
        image: 'src/assets/city.png',
    },
    {
        id: 3,
        name: 'Metal off-road bumper Jeep-style SUV.',
        price: '$2,356.00',
        image: 'src/assets/jeep.png',
    },
];

const EngineDrivetrainSection = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-white text-gray-800 p-10 mb-10">
            {/* Top Heading */}
            <div className="w-full px-4 lg:px-16 lg:mb-0 mb-4">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:h-[120px] gap-6">
                    {/* Left: Category Buttons */}
                    <div className="flex gap-4 lg:ml-52">
                        <button className="bg-strip text-xs px-6 py-2 text-white rounded-full hover:bg-red-600">
                            Engine & Drivetrain
                        </button>
                        <button className="py-2 text-xs text-[#808080]">Tools & Garage</button>
                    </div>

                    {/* Right: Arrows */}
                    <div className="flex items-center gap-4 text-white">
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
            </div>

            {/* Product Grid including Sidebar */}
            <div className="flex flex-wrap justify-center gap-6">
                {/* Sidebar styled like a product card */}
                <aside
                    className="w-full lg:max-w-[270px] h-[470px] text-white p-4 rounded bg-cover bg-center flex flex-col justify-between"
                    style={{ backgroundImage: 'url(src/assets/sidebar-bg.png)' }}
                >
                    <div className='justify-center flex p-6'>
                        <div className='text-left'>
                            <h1 className="font-rubik font-bold text-[42.83px] leading-[51.4px] tracking-[0px] align-middle">
                                Find the Perfect Body Part For Your Car
                            </h1>
                        </div>
                    </div>
                    <button
                        className="relative py-3 w-[75%] mx-auto mb-5 text-xs rounded text-white overflow-hidden group bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-700 hover:to-red-800 transition"
                        onClick={() => {
                            navigate('/shop-by-category');
                            window.scrollTo(0, 0); // Scrolls to top
                        }}
                    >
                        <span className="relative z-10">Shop Now</span>
                        <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
                    </button>
                </aside>

                {/* Product Cards */}
                {products.map(({ id, name, price, image }) => {
                    const [quantity, setQuantity] = useState(0);

                    const increment = () => setQuantity(prev => prev + 1);
                    const decrement = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

                    return (
                        <div
                            key={id}
                            className="w-full lg:max-w-[290px] h-[550px] lg:h-[490px] shadow border-gray-200 border rounded p-3 hover:shadow-md"
                        >
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
                    );
                })}
            </div>
        </section>
    );
};

export default EngineDrivetrainSection;