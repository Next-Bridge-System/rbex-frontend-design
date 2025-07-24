import { useNavigate } from 'react-router-dom';
import SignForm from './SignForm';
import MotionCard from '../../components/MotionCard';




const categories = [
  { label: 'Plastic Bumper', image: '/assets/plasticBumper.png' },
  { label: 'Head Lamp', image: '/assets/headlamp.png' },
  { label: 'Mirrors', image: '/assets/mirror.png' },
  { label: 'Tail Lamp', image: '/assets/taillamp.png' },
  { label: 'Metal Bumper', image: '/assets/metalbumper.png' },
  { label: 'Hood', image: '/assets/engine.png' },
];


const secondCategories = [
  { label: 'Radiator', image: '/assets/radiator support.png' },
  { label: 'Fender', image: '/assets/fender.png' },
  { label: 'Fender Liner', image: '/assets/finder liner.png' },
  { label: 'Generator', image: '/assets/radiator2.png' },
  { label: 'Condenser', image: '/assets/condenser.png' },
  { label: 'Grille', image: '/assets/grille.png' },
];


const HeroCategory = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F4FDFF] relative pt-8 px-4 sm:px-6  overflow-hidden  lg:px-16 ">
      {/* Layered Background Vectors */}
      <img
        src="/assets/bg1.png"
        alt="bg1"
        className="absolute top-0  left-0 w-[70%]  lg:w-[45%]  opacity-10 z-0 pointer-events-none"
      />
      <img
        src="/assets/bg2.png"
        alt="bg2"
        className="absolute top-0 left-0 w-[60%] lg:w-[40%] opacity-10 z-0 pointer-events-none"
      />
      <img
        src="/assets/bg3.png"
        alt="bg3"
        className="absolute top-0 left-0 w-[50%] lg:w-[35%] opacity-10 z-0 pointer-events-none"
      />
      <div className="max-w-7xl z-10 mx-auto flex flex-col mt-6 items-start">
        {/* Heading */}
        <h1 className="text-[32px] ml-6 lg:ml-28 sm:text-[36px] md:text-[40px] font-bold text-[#233D7B] leading-[20px] tracking-tight font-lato mb-6 sm:mb-10">
          Shop By Category
        </h1>

        {/* Breadcrumb Links */}
        <div className="flex flex-wrap gap-2 lg:gap-0   ml-6 lg:ml-28 mb-9">
          {/* Home Button */}

          <div className="relative   w-[142px] h-[30px] rounded-[3px]">
            <img
              src="/assets/Skewed Rectangle.png"
              alt="Home Background"
              className="absolute ml-5 inset-0 w-full h-full object-cover z-0"
            />
            <span className="absolute  ml-5 inset-0 flex items-center justify-center cursor-pointer text-[#4D4D4D] text-lg font-semibold z-10"
              onClick={() => navigate('/')}
            >
              Home
            </span>
          </div>

          {/* Shop by Category Button */}
          <div className="relative w-[238px]  h-[30px] rounded-[3px]">
            <img
              src="/assets/Skewed Rectangle (1).png"
              alt="Shop by Category Background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <span className="absolute inset-0 flex items-center justify-center text-[#4D4D4D] text-lg font-semibold z-10">
              Shop by category
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid relative grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 mb-10 w-full max-w-[85%] mx-auto">
          {categories.map((item, idx) => {
            const direction = idx % 3 === 0 ? 'left' : idx % 3 === 1 ? 'bottom' : 'right';
            return (
              <MotionCard key={idx} direction={direction} delay={idx * 0.1}>
                <div className="rounded-lg overflow-hidden shadow-md bg-white hover:scale-[1.02] transition duration-300">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-[180px] sm:h-[200px] object-cover"
                  />
                  <div className="bg-strip text-white text-center py-3 font-medium text-sm">
                    {item.label}
                  </div>
                </div>
              </MotionCard>
            );
          })}

        </div>
        {/* Rust Image Block */}
        <div className="rounded-lg  lg:w-[85%]  overflow-hidden shadow-md bg-white hover:scale-[1.02] transition duration-300 md:col-span-3 flex flex-col justify-center mx-auto">
          <img
            src="/assets/rust.png"
            alt="Rust Replacement Panel"
            className="w-full h-[230px] object-cover"
          />
          <div className="bg-strip text-white text-center py-3 font-medium text-sm">
            Rust Replacement Panel
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 mb-10 w-full max-w-[85%] mx-auto mt-10">
          {secondCategories.map((item, idx) => {
            const direction = idx % 3 === 0 ? 'left' : idx % 3 === 1 ? 'bottom' : 'right';
            return (
              <MotionCard key={idx} direction={direction} delay={idx * 0.1}>
                <div className="rounded-lg overflow-hidden shadow-md bg-white hover:scale-[1.02] transition duration-300">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-[180px] sm:h-[200px] object-cover"
                  />
                  <div className="bg-strip text-white text-center py-3 font-medium text-sm">
                    {item.label}
                  </div>
                </div>
              </MotionCard>
            );
          })}

        </div>
        <SignForm />
        <div className='w-full mb-16 '>
          <img src='/assets/Trustedshopping.png' alt='trust' className='w-full  object-cover ' />
        </div>
      </div>

    </section>
  );
};

export default HeroCategory;
