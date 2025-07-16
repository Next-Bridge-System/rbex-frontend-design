import React, { useState } from 'react';

const faqData = [
  { id: 1, question: 'How can I get help by Sayara?', answer: 'Visit our Help Center or live chat for support.' },
  { id: 2, question: 'How do I track my Sayara order?', answer: 'Go to the "Track Order" page with your order ID and email.' },
  { id: 3, question: 'Can I finance a car with Sayara?', answer: 'Yes, financing options are available at checkout.' },
  { id: 4, question: 'How can I open a new account?', answer: 'Click "Sign Up" and complete the registration.' },
  { id: 5, question: 'Are there hidden fees?', answer: 'No hidden charges. Everything is shown before payment.' },
  { id: 6, question: 'When will my car be delivered?', answer: 'Typically within 3–5 business days.' },
  { id: 7, question: 'Can I cancel my order?', answer: 'Yes, within 24 hours. Contact support for help.' },
  { id: 8, question: 'Is my data secure?', answer: 'Absolutely — we use encryption and follow GDPR standards.' },
];

const Faqs = () => {
  const [activeId, setActiveId] = useState(null);
  const toggleAnswer = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-10 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqData.map((item) => (
          <div
            key={item.id}
            className={`bg-white shadow-md rounded-md border border-gray-200 transition-all duration-300 ${
              activeId === item.id ? 'h-auto' : 'h-[62px]  overflow-hidden'
            }`}
          >
            <button
              onClick={() => toggleAnswer(item.id)}
              className={`w-full flex justify-between items-center border-b px-4 py-4     text-left cursor-pointer ${
                activeId === item.id ? 'mb-2' : ''
              }`}
            >
              <h3 className="text-[#333333] text-base   font-rubik">
                {item.question}
              </h3>
              <span className="text-[#333333] text-xl font-bold">
                {activeId === item.id ? '−' : '+'}
              </span>
            </button>

            <div className="px-4 pb-4">
              <p className="text-sm text-gray-600 leading-relaxed font-rubik">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;