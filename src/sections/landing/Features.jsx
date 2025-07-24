import React from 'react';


const features = [
  {
    icon: '/assets/shipping.png',
    title: 'Free Shipping',
    desc: 'For orders from $50',
  },
  {
    icon: '/assets/support.png',
    title: 'Support 24/7',
    desc: 'Call us anytime',
  },
  {
    icon: '/assets/safety.png',
    title: '100% Safety',
    desc: 'Only secure payments',
  },
  {
    icon: '/assets/offers.png',
    title: 'Hot Offers',
    desc: 'Discounts up to 90%',
  },
];


const Features = () => {
  return (
    <section className="bg-feature py-8 px-4 ">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-3 w-full justify-center text-center sm:text-left"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col">
              <h3 className="text-[#333333] font-medium text-sm">{item.title}</h3>
              <p className="text-xs text-[#808080]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
