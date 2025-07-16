import React from 'react';
import map from '../../assets/map.png'; // Replace with your actual map image path

const LeaveMessage = () => {
  return (
    <section className="bg-[#F4FDFF] w-full min-h-[891px] px-4 sm:px-6 lg:px-16 py-16">
        {/* Heading & Paragraph */}
        <div className="w-full mb-8">
  {/* Heading */}
  <h1 className="text-[24px] sm:text-[32px] md:text-[25px] lg:text-[30px] font-bold text-[#333333] leading-tight font-rubik text-center mb-4">
    Leave us a Message
  </h1>

  {/* Paragraph */}
  <div className="max-w-[800px] mx-auto px-4">
    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#403F3F] leading-[26px] font-normal font-rubik text-left">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.
      Start working with Landrick that can provide everything.
    </p>
  </div>
</div>


      {/* Grid Layout */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Map Image */}
        <div className="w-full h-[530px]">
          <img
            src={map}
            alt="Map"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Right: Form Block */}
        <div className="w-full  bg-white shadow-[0px_1px_25px_0px_#00000026] rounded-md p-6 sm:p-10 flex flex-col justify-between">
          <form className="w-full space-y-6">
            {/* Row: Full Name & Email */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full sm:w-1/2 px-4 py-3 border border-gray-300 rounded-full text-sm bg-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-text-strip"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full sm:w-1/2 px-4 py-3 border border-gray-300 rounded-full text-sm bg-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-text-strip"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-full text-sm bg-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-text-strip"
              required
            />
            <textarea
              placeholder="Message"
              rows="9"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm bg-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-text-strip resize-none"
              required
            ></textarea>
          </form>

          {/* Button Bottom Left */}
          <div className="pt-6">
            <button
              type="submit"
              className="bg-strip text-white py-3 px-6 rounded-xl text-sm hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaveMessage;
