import React from 'react';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#1B1A1A]">
      <footer className="text-white px-4 py-10 border-b flex justify-center">
        <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Contact */}
          <div className="flex flex-col gap-4">
            <img
              src="src/assets/Group.png"
              alt="Footer Logo"
              className="w-[100px] h-auto"
            />
            <div className="flex items-center gap-2 text-sm text-[#BBBBBB]">
              <img src="src/assets/location.png" alt="Location"  />
              <span>Los Angeles, CA 90210</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#BBBBBB]">
              <img src="src/assets/phone.png" alt="Phone"  />
              <span>+1 (800) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#BBBBBB]">
              <img src="src/assets/email.png" alt="Email"  />
              <span>support@geauto.com</span>
            </div>
            <div className="flex gap-3 mt-2 ml-9">
              <img src="src/assets/facebook.png" alt="Facebook" className="w-4 h-4" />
              <img src="src/assets/twitter.png" alt="Twitter" className="w-4 h-4" />
              <img src="src/assets/instagram.png" alt="Instagram" className="w-4 h-4" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2 ">
            <p className="text-sm text-[#BBBBBB] cursor-pointer"
             onClick={() => navigate('/')}
            >
            Home
            </p>
            <p className="text-sm text-[#BBBBBB] cursor-pointer"
            onClick={() => navigate('/products')}
            >Shop / Products</p>
            <p className="text-sm text-[#BBBBBB] cursor-pointer"
            onClick={() => navigate('/about')}
            >About Us</p>
            <p className="text-sm text-[#BBBBBB] cursor-pointer"
            onClick={()=> navigate('/blogs')}
            >Blog / Guides</p>
            <p className="text-sm text-[#BBBBBB] cursor-pointer">Contact</p>
            <p className="text-sm text-[#BBBBBB] cursor-pointer">Track Order / My Account</p>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#BBBBBB]">Brake System</p>
            <p className="text-sm text-[#BBBBBB]">Engine Parts</p>
            <p className="text-sm text-[#BBBBBB] cursor-pointer"
             onClick={() => navigate('/suspension')}
            >Suspension</p>
            <p className="text-sm text-[#BBBBBB]">Body & Exterior</p>
            <p className="text-sm text-[#BBBBBB]">Electrical Components</p>
          </div>

          {/* Support + Payment */}
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-2">
              <p className="text-sm text-[#BBBBBB]">Return & Refund</p>
              <p className="text-sm text-[#BBBBBB]">Policy</p>
              <p className="text-sm text-[#BBBBBB]">Shipping Info</p>
              <p className="text-sm text-[#BBBBBB]">Order Tracking</p>
              <p className="text-sm text-[#BBBBBB]">FAQs</p>
            </div>
            <div className="flex justify-end mt-6 sm:mt-auto">
              <img src="src/assets/payments.png" alt="Payments" className="w-full max-w-[290px]" />
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="w-full text-center px-4 py-6 text-xs text-[#888888]">
        © 2025 Next Bridge Auto Parts. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
