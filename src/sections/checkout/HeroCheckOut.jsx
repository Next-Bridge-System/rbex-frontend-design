import React from 'react';
import truck from '../../assets/truck.png';

const HeroCheckOut = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6 relative font-sans">
           {/* Coupon Section - Full Width */}
<div className="mb-8 bg-strip p-4 rounded-lg border border-red-100">
  <div className="flex flex-col md:flex-row items-center justify-between">
    <h1 className="text-xl text-[#FFFFFF] font-semibold mb-2 md:mb-0 text-center md:text-left">
      Have a coupon?
    </h1>
    <div className="w-full md:w-auto text-center">
      <p className='text-[#FFFFFF] border-b inline-block'>Click here to enter your code</p>
    </div>
  </div>
</div>

            {/* Main Grid - Shipping Form + Order Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 xl:gap-8">
                {/* Left Column - Shipping Details Form (wider on desktop) */}
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-2xl sm:text-[30px] font-semibold text-[#141414] mb-6 pb-2">Shipping Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        {/* Form fields remain the same */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                            <input type="text" className="w-full border border-gray-300 p-2 rounded" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                            <input type="text" className="w-full border border-gray-300 p-2 rounded" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                            <input type="email" className="w-full border border-gray-300 p-2 rounded" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                            <input type="tel" className="w-full border border-gray-300 p-2 rounded" required />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name <span className='text-red-500'>(Optional)</span></label>
                            <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Street Address <span className='text-red-500'>*</span></label>
                            <input type="text" className="w-full border border-gray-300 p-2 rounded" required />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Apartment, suite, unit etc. <span className='text-red-500'>(Optional)</span></label>
                            <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">ZIP*</label>
                            <input type="text" className="w-full border border-gray-300 p-2 rounded" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
                            <input type="text" className="w-full border border-gray-300 p-2 rounded" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">State*</label>
                            <select className="w-full border border-gray-300 p-2 rounded" required>
                                <option value="">Select</option>
                                {/* Add state options here */}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Country*</label>
                            <select className="w-full border border-gray-300 p-2 rounded" required>
                                <option value="">Select</option>
                                <option value="">USA</option>
                                <option value="">UK</option>
                                <option value="">UAE</option>
                            </select>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-6 sm:mt-8">
                        <h3 className="text-2xl sm:text-[30px] font-semibold mb-4">Additional information</h3>
                        <div>
                            <label className="block text-sm font-medium text-[#4C4C4C] mb-1">Order Notes (Optional)</label>
                            <textarea
                                className="w-full text-xs border border-gray-300 p-2 rounded h-28"
                                placeholder="Notes about your order..."
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* Right Column - Order Summary (narrower on desktop) */}
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 lg:max-w-md xl:max-w-lg h-fit sticky top-4">
                    <div className="w-full rounded bg-strip py-2 mb-4 sm:mb-6">
                        <h2 className="text-xl text-[#FAFAFA] text-center mx-auto">Order Summary</h2>
                    </div>
                    
                    <div className="space-y-2 text-sm sm:text-base">
                        <div className="flex justify-between border-b pb-2">
                            <span className='font-semibold'>Product</span>
                            <span className='font-semibold'>Total</span>
                        </div>
                        <div className="flex justify-between">
                            <span className='font-semibold'>Premium Guard® Engine Air Filter x1</span>
                            <span className='font-semibold'>$17.69</span>
                        </div>

                        <div className="flex justify-between border-t border-gray-200 pt-3">
                            <span>Subtotal</span>
                            <span>$17.69</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="flex items-center gap-2">
                                Shipping
                            </span>
                            <span>Calculate</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Tax</span>
                            <span>$0.00</span>
                        </div>

                        <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-3">
                            <span>TOTAL</span>
                            <span>$17.69</span>
                        </div>
                    </div>

                    {/* Savings Banner */}
                    <div className="mt-4 sm:mt-6 p-3 bg-green-50 border border-green-200 rounded-lg text-center">
                        <p className="text-green-700 font-medium text-sm sm:text-base">Total savings of $3.03 on this order</p>
                    </div>

                    {/* Card Details */}
                    <div className="mt-6 sm:mt-8">
                        <h3 className="text-lg font-semibold mb-3 sm:mb-4">Card Details</h3>
                        <div className="space-y-3 sm:space-y-4">
                            <div>
                                <label className="block text-sm font-medium text[#141414] mb-1">Credit Card Number*</label>
                                <input
                                    type="text"
                                    placeholder="1234 5678 9012 3456"
                                    className="w-full border border-gray-300 p-2 rounded text-sm sm:text-base"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                <div>
                                    <label className="block text-sm font-medium text[#141414] mb-1">Month</label>
                                    <select className="w-full border border-gray-300 p-2 rounded text-sm sm:text-base">
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i} value={i + 1}>{i + 1}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text[#141414] mb-1">Year</label>
                                    <select className="w-full border border-gray-300 p-2 rounded text-sm sm:text-base">
                                        {Array.from({ length: 10 }, (_, i) => (
                                            <option key={i} value={new Date().getFullYear() + i}>
                                                {new Date().getFullYear() + i}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text[#141414] mb-1">CVV</label>
                                    <input type="text" className="w-full border border-gray-300 p-2 rounded text-sm sm:text-base" />
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 italic">
                                Visa, Mastercard, Discover (It is always the last 3 digits in case of VISA and MasterCard.)<br />American Express (it can be a 4 digit code either on the front or back.)
                            </p>
                        </div>
                    </div>

                    {/* Place Order Button */}
                    <button className="w-full flex items-center justify-center bg-strip text-white py-3 px-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-red-600 mt-4 sm:mt-6 gap-2">
                        Place Order
                        <img src={truck} alt="truck" className="w-5 sm:w-7 h-5" />
                    </button>

                    {/* Shop With Confidence */}
                    <div className="mt-4 sm:mt-6 bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-[15px] sm:text-[16px] mb-1 sm:mb-2">Shop With Confidence</h4>
                        <p className="text-xs text-gray-600">
                            <span className='font-bold text-[#3A3A3A]'>Worried about Privacy</span> <br />
                            <span>We don't share any personal information View Our Privacy Policy. </span><br />
                            <span className="font-bold">What you thought?.</span><br />
                            Hassle Free & 30 days Easy ReturnView our return policy Need Help?
                            Please contact our support team Norton Secured Your information is protected by Norton Secured (powered by Symantec)encryption.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCheckOut;