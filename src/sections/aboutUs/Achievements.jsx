import React from 'react'

const features = [
  { title: '120', desc: 'Stores around the world' },
  { title: '2,036', desc: 'Satisfied customers' },
  { title: '3,012', desc: 'Auto parts' },
  { title: '234', desc: 'Awards' },
];

const Achievements = () => {
  return (
    <section className="bg-feature py-10 px-4 mb-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          >
            <h3 className="text-[#333333] text-4xl sm:text-5xl font-rubik mb-1">{item.title}</h3>
            <p className="text-sm text-[#808080]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
