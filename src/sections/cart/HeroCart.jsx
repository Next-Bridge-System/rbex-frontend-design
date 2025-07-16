import React from 'react';
import { useNavigate } from 'react-router-dom';
import brakeImage from '../../assets/brake.png'; // product image

// Icons from assets folder
import trashIcon from '../../assets/cart1.png';
import upgradeIcon from '../../assets/cart2.png';
import closeIcon from '../../assets/cart3.png';
import cartIcon from '../../assets/cart4.png';
import truckIcon from '../../assets/cart5.png';
import paypalIcon from '../../assets/cart6.png';
import savingsBg from '../../assets/cart7.png';
import discountTag from '../../assets/polygon.png';

const CartItem = () => (
    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 p-2 sm:p-4 lg:p-6 bg-white rounded-lg shadow border relative hover:shadow-lg transition duration-300">

        {/* Remove Icon */}
        <button className="absolute top-1 right-1 sm:top-2 sm:right-2 text-red-600 text-lg sm:text-xl font-bold">
            <img src={closeIcon} alt="Close" className="w-4 sm:w-5" />
        </button>

        {/* Discount Tag */}
        <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16">
            <img src={discountTag} alt="Discount" className="w-full h-full" />
            <span className="absolute top-[10px] left-[1px] sm:top-[14px] sm:left-[2px] text-white text-[8px] sm:text-[10px] leading-tight rotate-[-45deg]">
                50% OFF
            </span>
        </div>

        {/* Product Image */}
        <img src={brakeImage} alt="Brake" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />

        {/* Product Info */}
        <div className="flex-1 min-w-0">
            <h3 className="text-[#004379] font-bold text-[32px] ">Brandix Brake</h3>
            <div className="text-yellow-500 text-xs sm:text-sm mb-1">★★★★★ 4.5</div>
            <p className="text-[15px]  text-gray-600 leading-snug">
                <strong>Brand:</strong> K & NB | <strong>Part Number:</strong> 33-3005,<br />
                <strong>Condition:</strong> New | <strong>Warranty:</strong> 2 Year Limited Warranty
            </p>
        </div>

        {/* Pricing & Actions */}
        <div className="flex flex-col justify-between items-end sm:items-start sm:ml-auto mt-2 sm:mt-0 space-y-1 sm:space-y-2 w-full sm:w-auto">
            {/* Price */}
            <div className="w-full flex justify-end text-right mt-1 sm:mt-5">
                <div>
                    <div className="text-[#004379] font-bold ">USD$234.00</div>
                    <div className="text-[#004379] line-through font-bold  text-[14px] ">USD$250.00</div>
                </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center flex-wrap gap-1 lg:gap-4 sm:gap-2 lg:pt-5 sm:pt-0 justify-end sm:justify-start">
                {/* Quantity */}
                <div className="flex items-center gap-1 sm:gap-2">
                    <button className="border px-1 sm:px-2 py-0 sm:py-1 rounded hover:bg-gray-100 text-xs sm:text-sm">−</button>
                    <span className="text-xs sm:text-sm">1</span>
                    <button className="border px-1 sm:px-2 py-0 sm:py-1 rounded hover:bg-gray-100 text-xs sm:text-sm">+</button>
                </div>

                {/* Add to Cart Button */}
                <button className="bg-red-600 text-white px-3 gap-3 sm:px-4 py-1 sm:py-1 rounded text-xs sm:text-sm flex items-center  hover:bg-red-700 transition">

                    Add to Cart
                    <img src={cartIcon} alt="cart" className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
            </div>
        </div>
    </div>
);


const HeroCart = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#F5FCFF]  px-4 mb-10 sm:px-6 lg:px-10 py-8">
            {/* Fast Shipping */}
            <div className="bg-white p-5 border w-full sm:w-[73%]  rounded-lg px-6 py-3 text-sm font-semibold mb-6 shadow-sm">
                Fast Shipping <br />
                <span className="font-normal text-gray-600">
                    Place Your Order by 1:00 PM EST, It Will Be Ship Today!
                </span>
            </div>

            <div className="lg:flex gap-6 w-full ">
                {/* Left Section */}
                <div className="flex-1 mb-4  border rounded-lg p-2 space-y-6 flex flex-col">
                    <div className="flex justify-between items-center">
                        <button className="flex items-center gap-2 text-sm font-semibold border px-3 py-2 rounded hover:bg-gray-100">
                            <img src={trashIcon} alt="trash" className="w-4" />
                            Empty Cart
                        </button>
                        <button className="flex items-center gap-2 text-sm font-semibold border px-3 py-2 rounded hover:bg-gray-100"
                        onClick={() => navigate('/shop-by-category')}>
                            <img src={upgradeIcon} alt="upgrade" className="w-4" />
                            Upgrade Cart
                        </button>
                    </div>

                    {/* Repeating Items */}
                    <CartItem />
                    <CartItem />
                </div>

                {/* Right Section: Order Summary */}
                <div className="bg-[#F9F9F9] border rounded-lg p-4 space-y-2 text-sm shadow-lg">
                    <h2 className="font-bold text-lg border-b  pb-2">Order Summary</h2>

                    <div className="flex items-center justify-between">
                        <span>Zip Code</span>
                        <button className="bg-yellow-300 font-bold text-sm px-2 py-1 rounded flex items-center gap-1 hover:bg-yellow-400 transition">
                            Get Shipping
                            <img src={truckIcon} alt="truck" className="w-5 h-4" />
                        </button>
                    </div>

                    <div className="flex justify-between border-t pt-2">
                        <span className='font-bold'>Subtotal</span>
                        <span className='font-bold'>$17.19</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='font-bold'>Shipping</span>
                        <span className="text-blue-600 underline cursor-pointer">Calculate Shipping</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='font-bold'>Tax</span>
                        <span className='font-bold'>$0.00</span>
                    </div>

                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Have Coupon Code?"
                            className="flex-1 px-2 py-1 border rounded"
                        />
                        <button className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition">Apply</button>
                    </div>

                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Total</span>
                        <span>$17.19</span>
                    </div>

                    {/* ✅ Green Savings Banner using Background Image */}
                    <div
                        className="text-green-700 text-sm font-semibold py-2 px-3 bg-no-repeat bg-contain bg-left-top rounded "
                        style={{ backgroundImage: `url(${savingsBg})` }}
                    >
                        Total savings of $3.03 on this order
                    </div>

                    <button className="w-full bg-red-600 text-white py-2 rounded text-sm font-bold hover:bg-red-700 transition"
                     onClick={() => navigate('/check-out')}
                    >
                        Proceed to check out &gt;
                    </button>

                    <div className="text-center text-sm text-gray-500">or</div>

                    <button className="w-full font-bold bg-yellow-400 flex items-center justify-center gap-2 py-2 rounded hover:bg-yellow-500 transition">

                        Check Out With PayPal
                        <img src={paypalIcon} alt="PayPal" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroCart;
