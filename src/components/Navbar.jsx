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
    <nav className="bg-navbar shadow-md py-2 md:py-4 border text-navText">
      <div className="container mx-auto px-4">
        {/* Main Navbar Content */}
        <div className="flex items-center justify-between">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto" />
            <button
              className="lg:hidden text-xl text-navText"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Menu and Search */}
          <div className="hidden lg:flex items-center  flex-1 justify-between ml-8">
            {/* Desktop Navigation */}
            <ul className="flex gap-4 xl:gap-6 font-semibold font-roboto text-[#393C3D]  text-sm items-center">
              <li className="cursor-pointer  hover:text-strip" onClick={() => navigate('/')}>
                Home
              </li>
              <li className="relative flex items-center gap-1">
                <span className="cursor-pointer" onClick={() => navigate('/shop-by-category')}>
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
              <li className="cursor-pointer hover:text-strip" onClick={() => navigate('/track-order')}>
                Track Order
              </li>
              <li className="cursor-pointer hover:text-strip" onClick={() => navigate('/contact')}>
                Contact Us
              </li>
              <li className="cursor-pointer hover:text-strip" onClick={() => navigate('/help-center')}>
                Help Centre
              </li>
            </ul>

            {/* Desktop Search */}
            <div className="flex items-center ml-4">
              <div className="relative w-[300px] xl:w-[440px]">
                <input
                  type="text"
                  placeholder="Year, make, model, part type, part number"
                  className="w-full pl-10 pr-4 py-1 md:py-2 text-xs md:text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 font-roboto"
                />
                <FaSearch className="absolute top-2 md:top-3 left-3 text-gray-500 text-sm" />
              </div>
            </div>
          </div>

          {/* Cart Button - Visible on all screens */}
          <div 
            className="flex items-center gap-1 md:gap-2 cursor-pointer hover:text-red-600"
            onClick={() => navigate('/cart')}
          >
            {/* Cart Icon with Count Overlay */}
            <div className="relative w-6 h-6 md:w-7 md:h-7">
              <img src={cart} alt="Cart Icon" className="w-full h-full object-contain" />
              <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-5 md:h-5">
                <img src={count} alt="Count Background" className="w-full h-full object-contain" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] md:text-[12px] text-white">2</span>
                </div>
              </div>
            </div>
            {/* Cart Label and Price - Hidden on smallest screens */}
            <div className="hidden sm:flex flex-col items-center">
              <span className='text-xs'>Cart</span>
              <span className="text-gray-500 text-xs md:text-sm">$0.00</span>
            </div>
          </div>
        </div>

        {/* Mobile Full Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 space-y-4 font-roboto text-sm text-navText border-t border-gray-200 bg-white z-50">
            {/* Navigation Items */}
            <div className="space-y-3">
              <p className="cursor-pointer hover:text-red-600" onClick={() => navigate('/')}>
                Home
              </p>
              <details>
                <summary className="flex items-center cursor-pointer hover:text-red-600">
                  Shop By Category
                  <IoIosArrowDown className="ml-1" />
                </summary>
                <ul className="mt-2 pl-4 space-y-2">
                  {['Condenser', 'Head Lamp', 'Mirrors', 'Bumper', 'Battery', 'AC Filters'].map(item => (
                    <li key={item} className="py-1 hover:text-red-500 cursor-pointer text-xs">
                      {item}
                    </li>
                  ))}
                </ul>
              </details>
              <p className="cursor-pointer hover:text-red-600" onClick={() => navigate('/track-order')}>
                Track Order
              </p>
              <p className="cursor-pointer hover:text-red-600" onClick={() => navigate('/contact')}>
                Contact Us
              </p>
              <p className="cursor-pointer hover:text-red-600" onClick={() => navigate('/help-center')}>
                Help Centre
              </p>
            </div>

            {/* Mobile Search Bar */}
            <div className="relative w-full mt-4">
              <input
                type="text"
                placeholder="Year, make, model, part type, part number"
                className="w-full pl-10 pr-4 py-2 text-xs border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <FaSearch className="absolute top-2 left-3 text-gray-500 text-sm" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;