import React from 'react';

const SignForm = () => {
  return (
    <div className="w-full flex justify-center  px-4 mb-24 mt-10">
      <div className="bg-[#F4FDFF]  rounded-lg p-6 sm:p-8 max-w-xl w-full text-center">
        {/* Logo */}
        <img
          src="/assets/SVG.png"
          alt="Logo"
          className="w-12 h-12 mx-auto mb-4"
        />

        {/* Heading */}
        <h2 className="text-[#000000] text-lg sm:text-xl font-bold mb-4">
          SIGN UP FOR INSTANT SAVINGS, OFFERS & EXCLUSIVES
        </h2>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[70%] px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-strip"
            required
          />
          <button
            type="submit"
            className="bg-strip text-white px-6 py-2 rounded-md text-sm hover:bg-red-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignForm;
