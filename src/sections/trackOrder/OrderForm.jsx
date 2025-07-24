import React, { useState } from 'react';

const OrderForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cardNumber.trim() || !email.trim()) {
      alert('Please fill in both fields before tracking your order.');
      return;
    }

    alert('Your order is on the way!');

    // 🧹 Clear the input fields
    setCardNumber('');
    setEmail('');
  };

  return (
    <div className="flex items-center justify-center px-4 py-12 sm:py-10">
      <div className="w-full max-w-[699px] bg-white mb-9">
        {/* Header */}
        <div className="bg-strip text-white text-center text-[24px] sm:text-[30px] py-4 font-medium">
          Track Order
        </div>

        {/* Form Content */}
        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
          <div className="border-b mb-6">
            <p className="text-[16px] sm:text-[20px] mb-6 font-medium text-gray-700 text-center sm:text-left">
              Please enter the order ID and the email address used to create the order, and then click the "Track" button.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Credit Card Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Credit Card Number*
              </label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full px-4 py-2 bg-[#F0F0F0] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-text-strip"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-[#F0F0F0] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-text-strip"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-[500px] bg-strip text-white py-3 rounded-md flex items-center justify-center gap-2 mx-auto hover:bg-red-600 transition"
            >
              Track Order
              <img src="/assets/truck.png" alt="Truck Icon" className="mt-1 w-6 h-6 object-contain" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
