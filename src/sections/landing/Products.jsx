import DiscountBanner from "./DiscountBanner";

const products = [
    {
        id: 1,
        name: 'Condenser with Dryer Attached – KIA Sportage',
        price: '$563.00',
        image: 'src/assets/sportage.png',
    },
    {
        id: 2,
        name: 'Compact Car Condenser – Suzuki Alto',
        price: '$563.00',
        image: 'src/assets/alto.png',
    },
    {
        id: 3,
        name: 'Mini Truck Condenser – Suzuki Ravi',
        price: '$2,356.00',
        image: 'src/assets/ravi.png',
    },
    {
        id: 4,
        name: 'Heavy-Duty Condenser – SUV / 4x4',
        price: '$65.00',
        image: 'src/assets/4x4.png',
    },
    

];



const Products = () => {
    return (
        <section className="bg-[#F4FDFF]  text-gray-800 pb-16">
            {/* Top Heading */}
            <div className="w-full px-4 mb-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">

                    {/* Left: Heading */}
                    <div className="flex gap-4 lg:ml-16">
                        <h2 className="text-2xl font-bold text-[#333333] text-center lg:text-left">
                            Featured Products
                        </h2>
                    </div>

                    {/* Right: Arrows */}
                    <div className="flex items-center gap-4 lg:mr-14 text-white">
                        <div className="w-7 h-7 rounded-full bg-strip flex items-center justify-center hover:brightness-90">
                            <img
                                src="src/assets/vector.png"
                                alt="Left Arrow"
                                className="w-3 h-3 object-contain"
                            />
                        </div>
                        <div className="w-7 h-7 rounded-full bg-strip flex items-center justify-center hover:brightness-90">
                            <img
                                src="src/assets/vector (1).png"
                                alt="Right Arrow"
                                className="w-3 h-3 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Grid including Sidebar */}
            <div className="flex mt-10 flex-wrap justify-center gap-4">

                {/* Product Cards */}
                {products.map(({ id, name, price, image }) => (
                    <div
                        key={id}
                        className="w-full  lg:max-w-[290px]  bg-white  h-[530px] lg:h-[450px] border border-gray-200 rounded-[10px] mx-9 lg:mx-0 p-3 flex flex-col justify-between"
                    >
                        <div>
                            {/* Image */}
                            <div className="-m-3  mb-2 ">
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-full h-[60%] rounded-t-[10px]
                                    object-cover border-b border-gray-200"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="font-rubik font-light text-[18px] leading-[21.6px] tracking-[0px] align-middle">{name}</h3>

                            {/* Price */}
                            <p className="text-[#333333] mt-5 font-semibold text-xs">{price}</p>
                        </div>

                        {/* Button always pinned at the bottom */}
                        <div className="flex justify-center">
                            <button className="bg-strip  mb-3 text-white py-2 px-6 text-xs rounded hover:bg-red-600">
                                Add to cart
                            </button>
                        </div>
                    </div>

                ))}
            </div>

            <div className="mt-10  sm:px-6 lg:px-0">
                <DiscountBanner />
            </div>



        </section>
    )
}

export default Products