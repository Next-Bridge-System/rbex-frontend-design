import React from 'react';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#1B1A1A]">
      <footer className="text-white px-4 py-10 border-b flex justify-center">
        <div className="w-full  grid grid-cols-1 ml-9  sm:grid-cols-3 gap-9 ">
          {/* Logo + Contact */}
          <div className="flex flex-col gap-4 ">
            <img
              src="/assets/Group.png"
              alt="Footer Logo"
              className="w-[100px] h-auto cursor-pointer"
              onClick={() => {
                navigate('/')
                window.scrollTo(0, 0)
              }}
            />
            <div className="flex items-center gap-2 text-sm text-[#BBBBBB]">
              <img src="/assets/location.png" alt="Location" />
              <span>Los Angeles, CA 90210</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#BBBBBB]">
              <img src="/assets/phone.png" alt="Phone" />
              <span>+1 (800) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#BBBBBB]">
              <img src="/assets/email.png" alt="Email" />
              <span>support@geauto.com</span>
            </div>
            <div className="flex gap-3 mt-2 ml-9">
              <a href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer">
                <img src="/assets/facebook.png" alt="Facebook" className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer">
                <img src="/assets/twitter.png" alt="Twitter" className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/instagram.png" alt="Instagram" className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200" />
              </a>
            </div>

          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2 ">
            <p className="text-sm text-[#BBBBBB] cursor-pointer"
              onClick={() => {
                navigate('/')
                window.scrollTo(0, 0)
              }}
            >
              Home
            </p>
            <p className="text-sm text-[#BBBBBB] cursor-pointer"
              onClick={() => {
                navigate('/products')
                window.scrollTo(0, 0)
              }}
            >Shop </p>
            <p className="text-sm text-[#BBBBBB] cursor-pointer"
              onClick={() => {
                navigate('/about')
                window.scrollTo(0, 0)
              }
              }
            >About Us</p>
            <p className="text-sm text-[#BBBBBB] cursor-pointer"
              onClick={() => {
                navigate('/blogs')
                window.scrollTo(0, 0)
              }}
            >Blog</p>
            <p className="text-sm text-[#BBBBBB] cursor-pointer"
              onClick={() => {
                navigate('/contact')
                window.scrollTo(0, 0)
              }}
            >Contact</p>
            <p className="text-sm text-[#BBBBBB] cursor-pointer"
              onClick={() => {
                navigate('/track-order')
                window.scrollTo(0, 0)
              }}
            >Track Order </p>
          </div>

          {/* Support + Payment */}
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-2">
              <p className="text-sm text-[#BBBBBB] cursor-pointer"
                onClick={() => {
                  navigate('/suspension')
                  window.scrollTo(0, 0)
                }}
              >Suspension</p>
              <p className="text-sm text-[#BBBBBB] cursor-pointer"
                onClick={() => {
                  navigate('/check-out')
                  window.scrollTo(0, 0)
                }}
              >Shipping Info</p>
              <p className="text-sm text-[#BBBBBB] cursor-pointer"
                onClick={() => {
                  navigate('/track-order')
                  window.scrollTo(0, 0)
                }}
              >Order Tracking</p>
              <p className="text-sm text-[#BBBBBB] cursor-pointer"
                onClick={() => {
                  navigate('/help-center')
                  window.scrollTo(0, 0)
                }}
              >FAQs</p>
            </div>
            <div className="flex justify-end mt-6 sm:mt-auto">
              <img src="/assets/payments.png" alt="Payments" className="w-full max-w-[290px]" />
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="w-full text-center px-4 py-6 text-xs text-[#888888]">
        © 2025 rbex Auto Parts. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
