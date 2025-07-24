import { useNavigate } from "react-router-dom";

const HeroProduct = () => {
  const navigate =useNavigate();
  return (
    <section className="bg-[#F4FDFF] relative  pt-6 pb-12 px-4 sm:px-6 lg:px-16">
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
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Heading */}
        <h1 className="text-[26px] ml-6  sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#233D7B] leading-snug tracking-tight font-lato mb-4 sm:mb-8">
          Bumper
        </h1>

        {/* Breadcrumb Links */}
        <div className="flex flex-wrap gap-2 lg:gap-0 ml-6  mb-9">
          {/* Home Button */}
          <div className="relative w-[142px] h-[30px] rounded-[3px]">
            <img
              src="/assets/Skewed Rectangle.png"
              alt="Home Background"
              className="absolute ml-6 inset-0 w-full h-full object-cover z-0"
            />
            <span className="absolute ml-5 inset-0 flex items-center justify-center text-[#4D4D4D] cursor-pointer text-lg font-semibold z-10"
             onClick={()=>navigate('/')}
            >
              Home
            </span>
          </div>

          {/* Product Button */}
          <div className="relative w-[300px] h-[30px] rounded-[3px]">
            <img
              src="/assets/Skewed Rectangle.png"
              alt="Home Background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <span className="absolute inset-0 flex items-center justify-center text-[#4D4D4D] text-lg font-semibold z-10">
              Front plastic car bumper
            </span>
          </div>
        </div>

        {/* Product Content Section */}
        <div className="w-full relative flex flex-col lg:flex-row items-stretch justify-between gap-6 sm:gap-10 lg:gap-10">
          {/* Left Content - Product Images */}
          <div className="w-full lg:w-1/3 justify-between flex flex-col">
            {/* Main Product Image */}
            <div className="w-full mt-9  border-gray-200 rounded-lg overflow-hidden">
              <img
                src="/assets/ProductPic.svg"
                alt="Main Product"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-3 mt-5 sm:mt-0">
              <img
                src="/assets/product1.png"
                alt="Product 1"
                className="w-20 h-20  cursor-pointer"
              />
              <img
                src="/assets/product2.png"
                alt="Product 2"
                className="w-20 h-20  rounded cursor-pointer"
              />
              <img
                src="/assets/product3.png"
                alt="Product 3"
                className="w-20 h-20  rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Right Content - Product Details */}
          <div className="w-full lg:w-1/2 ">
            <h2 className="text-2xl sm:text-3xl font-rubik font-bold text-[#333333] mb-2">
              Front plastic car bumper
              Toyota Corolla 2014–2016.
            </h2>

            {/* Review and Price Row */}
            <div className="flex  flex-col  mb-4">
              <p className="text-xl font-bold font-rubik mt-3 text-[#333333]">$3,021.00</p>
            </div>

            {/* Description */}
            <div className="text-[#808080] text-sm font-rubik sm:text-base space-y-4 mb-6">
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. My injected humour, or randomised words much short back even slightly noticeable. If you are going to use a passage of Lorem Ipsum, you need to fix sure there isn't anything embarrassing hidden in the middle of text.
              </p>
            </div>

            {/* Action Buttons */}
            <div className='flex items-center mb-9 justify-between'>
              <div className="flex items-center gap-4 ">
                <h1 className="bg-white border text-[#3A3A3A] py-2.5 px-6 sm:px-8 rounded-xl text-sm sm:text-base  transition">1</h1>

                <button className="bg-[#E52727] text-white py-2.5 px-6 sm:px-8 rounded-xl text-sm sm:text-base hover:bg-red-600 transition">
                  Add to cart
                </button>
              </div>

              <div className='flex  items-center'>
                <button className="p-2  hover:bg-gray-100">
                  <img src="/assets/heart.svg" alt="Add to wishlist" className="w-5 h-5" />
                </button>
                <p className='text-lg text-[#E52727] font-rubik'>Add to wishlist</p>
              </div>
            </div>

            {/* Product Meta */}
            <div className="border-t border-b border-gray-200 py-7">
              <div className="mb-3">
                <span className=" text-[#333333]">Category:</span>
                <span className="ml-2  text-sm text-[#333333] font-rubik bg-[#F5F5F5] p-3 m-5 rounded-full">Body Parts</span>
              </div>
              <div className='mt-9'>
                <span className=" text-[#333333]">Tags:</span>
                <span className="ml-2 text-sm  text-[#333333] bg-[#F5F5F5] p-3 font-rubik rounded-full">Accessories</span>
                <span className="ml-2 text-sm text-[#333333] bg-[#F5F5F5] p-3 font-rubik  rounded-full">Wheels</span>

              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3 justify-end">

              <img src="/assets/ItemLink.svg" alt="Social 1" className="w-8 h-8 cursor-pointer" />
              <img src="/assets/ItemLink2.svg" alt="Social 1" className="w-8 h-8 cursor-pointer" />
              <img src="/assets/ItemLink3.svg" alt="Social 2" className="w-8 h-8 cursor-pointer" />
              <img src="/assets/ItemLink4.svg" alt="Social 3" className="w-8 h-8 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProduct;