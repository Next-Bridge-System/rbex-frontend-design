import React from 'react';
import heroImg from '../../assets/hero.png';
import FilterStrip from './FilterStrip';
import Select from 'react-select';

// Dropdown Options
const years = [
  { value: '2002', label: '2002' },
  { value: '2005', label: '2005' },
  { value: '2010', label: '2010' },
  { value: '2015', label: '2015' },
];

const makes = [
  { value: 'corolla', label: 'Corolla' },
  { value: 'city', label: 'City' },
  { value: 'ford', label: 'Ford' },
  { value: 'honda', label: 'Honda' },
];

const models = [
  { value: 'rebirth', label: 'Rebirth' },
  { value: 'reborn', label: 'Reborn' },
  { value: 'markx', label: 'MarkX' },
];

// Custom Styling
const customStyles = {
  control: (base) => ({
    ...base,
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    padding: '2px 5px',
    borderColor: '#d1d5db',
    fontSize: '14px',
  }),
  menu: (base) => ({
    ...base,
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginTop: '4px',
  }),
  option: (base, { isFocused }) => ({
    ...base,
    padding: '10px 10px',
    fontSize: '14px',
    backgroundColor: isFocused ? '#fdecea' : 'white',
    color: '#333333',
    cursor: 'pointer',
  }),
};

const Hero = () => {
  return (
    <section className="bg-[#F4FDFF] py-12 ">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center ">
        {/* Left Content */}
        <div className="w-full lg:w-1/1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Best Parts Purchase <span className="text-strip">Experience</span>
          </h1>
          <p className="mt-4 text-black text-base  sm:text-sm lg:text-base max-w-lg mx-auto lg:mx-0">
            Easily find the exact parts your vehicle needs in seconds. Search by make, model, year,
            and engine type to ensure perfect fitment, improved performance, and a hassle-free
            shopping experience every time.
          </p>

          {/* Filter Form */}
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="min-w-[160px]">
              <Select options={years} placeholder="Select Year" styles={customStyles} />
            </div>
            <div className="min-w-[160px]">
              <Select options={makes} placeholder="Select Make" styles={customStyles} />
            </div>
            <div className="min-w-[160px]">
              <Select options={models} placeholder="Select Model" styles={customStyles} />
            </div>
            <button className="bg-strip text-white px-7 py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition">
              Search
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 text-center ">
          <img src={heroImg} alt="Hero" className="w-full   max-w-[500px] mx-auto" />
        </div>
      </div>

      {/* Filter Strip */}
      <div className="mt-28">
        <FilterStrip />
      </div>
    </section>
  );
};

export default Hero;
