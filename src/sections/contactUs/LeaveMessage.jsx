import React, { useState } from 'react';

const LeaveMessage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, subject, message } = formData;
    if (!fullName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      alert('Please fill in all fields before sending your message.');
      return;
    }

    alert('Your Message Sent Successfully!');

    // 🧹 Clear inputs
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="relative w-full min-h-[891px] px-4 sm:px-6 lg:px-16 py-16">
      {/* Heading & Paragraph */}
      <div className="w-full mb-8">
        <h1 className="text-[24px] sm:text-[32px] md:text-[25px] lg:text-[48px] font-bold text-[#333333] leading-tight font-rubik text-center mb-4">
          Leave us a Message
        </h1>
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
        <div className="w-full h-[560px]">
          <img
            src="/assets/map.png"
            alt="Map"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Right: Form Block */}
        <div className="w-full bg-white shadow-[0px_1px_25px_0px_#00000026] rounded-md p-6 sm:p-10">
          <form
            className="w-full space-y-6 font-rubik font-normal text-[#757575]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full sm:w-1/2 px-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-text-strip"
                required
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full sm:w-1/2 px-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-text-strip"
                required
              />
            </div>

            <input
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-text-strip"
              required
            />

            <textarea
              name="message"
              rows="9"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-text-strip resize-none"
              required
            ></textarea>

            <div className="pt-6">
              <button
                type="submit"
                className="bg-strip text-white py-3 px-6 rounded-2xl text-sm hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeaveMessage;
