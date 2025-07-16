import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import logo from '../assets/logo 6.png';
import cart from '../assets/cart.png';
import count from '../assets/count.png';


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-navbar shadow-md py-4 border text-navText">
      <div className="max-w-7xl px-6 flex justify-between items-center">
        {/* Left Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 font-roboto text-sm items-center">
          <li className=
            "cursor-pointer hover:text-strip"
            onClick={() => navigate('/')}
          >Home</li>
          <li className="relative flex items-center gap-1">

            {/* Navigate when clicking text */}
            <span className=
              "cursor-pointer"
              onClick={() => navigate('/shop-by-category')}
            >
              Shop By Category
            </span>
            <IoIosArrowDown
              className="cursor-pointer hover:text-strip text-lg"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <ul className="absolute top-8 left-0 bg-white border border-gray-200 rounded-md shadow-lg w-56 z-50">
                {['Condenser', 'Head Lamp', 'Mirrors', 'Bumper', 'Battery', 'AC Filters'].map(item => (
                  <li key={item} className="px-4 py-2 hover:bg-gray-100 text-xs cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li
            className="cursor-pointer hover:text-strip"
            onClick={() => navigate('/track-order')}
          >Track Order</li>
          <li className="cursor-pointer hover:text-strip"
            onClick={() => navigate('/contact')}
          >Contact Us</li>
          <li className="cursor-pointer hover:text-strip"
            onClick={() => navigate('/help-center')}
          >Help Centre</li>
        </ul>

        {/* Desktop Search & Cart */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative w-[440px]">
            <input
              type="text"
              placeholder="Year, make, model, part type, part number"
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 font-roboto"
            />
            <FaSearch className="absolute top-3 left-3 text-gray-500 text-sm" />
          </div>

          <div 
          className="flex items-center gap-2 cursor-pointer hover:text-red-600"
          onClick={() => navigate('/cart')}
          >
            {/* Cart Icon with Count Overlay */}
            <div className="relative w-7 h-7">
              <img src={cart} alt="Cart Icon" className="w-full h-full object-contain" />

              {/* Count Badge */}
              <div className="absolute -top-2 -right-2 w-5 h-5">
                <img
                  src={count}
                  alt="Count Background"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12px]  text-white">2</span>
                </div>
              </div>
            </div>

            {/* Cart Label and Price */}
            <div className="text-sm font-semibold font-roboto flex flex-col items-center">
              <span className='text-xs '>Cart</span>
              <span className=" text-gray-500 ml-1 ">$0.00</span>
            </div>
          </div>

        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-xl text-navText"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Full Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-6 pt-6 pb-8 space-y-6 font-roboto text-sm text-navText border-t bg-white z-50">
          {/* Navigation Items */}
          <div className="space-y-2">
            <p
              className="cursor-pointer hover:text-red-600"
              onClick={() => navigate('/')}
            >
              Home
            </p>
            <details>
              <summary className="flex items-center cursor-pointer hover:text-red-600"
                onClick={() => navigate('/shop-by-category')}
              >
                Shop By Category
                <IoIosArrowDown className="ml-1" />
              </summary>
              <ul className="mt-2 pl-4">
                {['Condenser', 'Head Lamp', 'Mirrors', 'Bumper', 'Battery', 'AC Filters'].map(item => (
                  <li key={item} className="py-1 hover:text-red-500 cursor-pointer text-xs">
                    {item}
                  </li>
                ))}
              </ul>
            </details>
            <p className="cursor-pointer hover:text-red-600" onClick={() => navigate('/track-order')}>Track Order</p>
            <p className="cursor-pointer hover:text-red-600" onClick={() => navigate('/contact')}>Contact Us</p>
            <p className="cursor-pointer hover:text-red-600" onClick={() => navigate('/help-center')} >Help Centre</p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full"
          
          >
            <input
              type="text"
              placeholder="Year, make, model, part type, part number"
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <FaSearch className="absolute top-3 left-3 text-gray-500 text-sm" />
          </div>

          {/* Cart */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-600"
           onClick={() => navigate('/cart')}
          >
            <FaShoppingCart className="text-xl" />
            <div className="text-sm font-semibold">
              <span>Cart</span> <span className="ml-1 text-gray-500">$0.00</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
