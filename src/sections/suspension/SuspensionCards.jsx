
const products = [
    {
        id: 1,
        name: '6 Speed Gearbox',
        price: '$563.00',
        image: '/assets/suspension1.svg',
    },
    {
        id: 2,
        name: '600-Series Floor Mount...',
        price: '$563.00',
        image: '/assets/suspension2.svg',
    },
    {
        id: 3,
        name: 'AC Delco 45H2130 Coil ...',
        price: '$2,356.00',
        image: '/assets/suspension11.svg',
    },
    {
        id: 4,
        name: 'Air filter',
        price: '$65.00',
        image: '/assets/suspension12.svg',
    },
    {
        id: 5,
        name: 'Air Intake Pump',
        price: '$563.00',
        image: '/assets/suspension3.svg',
    },
    {
        id: 6,
        name: 'Aluminum Wheels Concav...',
        price: '$563.00',
        image: '/assets/suspension4.svg',
    },
    {
        id: 7,
        name: 'Braking Blocks (Mainte...',
        price: '$2,356.00',
        image: '/assets/suspension5.svg',
    },
    {
        id: 8,
        name: 'Brandix Brake Kit',
        price: '$65.00',
        image: '/assets/suspension6.svg',
    },
    {
        id: 9,
        name: 'Car Sports Seat',
        price: '$563.00',
        image: '/assets/suspension7.svg',
    },
    {
        id: 10,
        name: 'Car Vacuum Cleaner 120W',
        price: '$563.00',
        image: '/assets/suspension8.svg',
    },
    {
        id: 11,
        name: 'Combo Sport Stereos fo...',
        price: '$2,356.00',
        image: '/assets/suspension9.svg',
    },
    {
        id: 12,
        name: 'DRL Bar Projector Head...',
        price: '$65.00',
        image: '/assets/suspension10.svg',
    },
];

const SuspensionCards = () => {
    // Calculate sale logic
    const productsWithSale = products.map((product) => {
        const isOnSale = [5, 7].includes(product.id);
        const numericPrice = parseFloat(product.price.replace(/[^0-9.]/g, ''));
        const originalPrice = isOnSale ? `$${(numericPrice * 1.2).toFixed(2)}` : null;
        const discount = isOnSale ? 'Sale!' : null;

        return { ...product, isOnSale, originalPrice, discount };
    });

    return (
        <section className="relative text-gray-800 pb-8 sm:pb-12 lg:pb-16">
            <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-5 lg:px-8">
                {/* Header */}
                <div className="bg-white p-3 sm:p-4 border rounded-2xl shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">

                        {/* Heading */}
                        <h1 className="text-lg sm:text-2xl font-rubik text-[#2D2D2D]">
                            Break & Suspension
                        </h1>

                        {/* Dropdown Wrapper */}
                        <div className="relative rounded  w-[200px] sm:w-[180px] bg-gray-100 border">
                        
                            <select
                                defaultValue=""
                                className="appearance-none  bg-gray-100 w-[150px] sm:w-[150px] text-xs sm:text-xs text-gray-700  px-3  py-2 p-5 pr-8 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 overflow-hidden truncate"
                            >
                                <option value="" disabled hidden>
                                    Select sorting
                                </option>
                                <option value="default">Default sorting </option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="rating">Sort by rating</option>
                                <option value="latest">Sort by latest</option>
                                <option value="low-to-high">Sort by price: low to high</option>
                                <option value="high-to-low">Sort by price: high to low</option>
                                
                            </select>
                           <span> ▼</span>

                        </div>

                    </div>
                </div>


                {/* Grid */}
                <div className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 px-2 sm:px-0">
                    {productsWithSale.map(({ id, name, price, image, isOnSale, originalPrice, discount }) => (
                        <div
                            key={id}
                            className="relative min-w-[280px] shadow bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 flex flex-col justify-between mx-auto w-full max-w-[300px] sm:max-w-none h-auto sm:h-[450px]"            >
                            {/* Sale Badge */}
                            {isOnSale && (
                                <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-rubik px-4 py-1 rounded-full">
                                    {discount}
                                </div>
                            )}

                            {/* Image */}
                            <div className="-m-2 sm:-m-3 mb-2">
                                <div className="border-b">
                                    <img
                                        src={image}
                                        alt={name}
                                        className="w-full h-[220px] sm:h-[220px] lg:h-[250px] object-cover rounded-[10px] border-gray-200"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="font-rubik text-[#333333] font-light text-[14px] sm:text-[16px] lg:text-[18px] leading-tight mt-2">
                                {name}
                            </h3>

                            {/* Price Section */}
                            <div className="mt-3">
                                {isOnSale ? (
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                        <span className="line-through text-[#E52727] text-xs">{originalPrice}</span>
                                        <span className="text-[#333333] font-rubik text-sm">{price}</span>
                                    </div>
                                ) : (
                                    <p className="text-[#333333] font-rubik text-sm">{price}</p>
                                )}
                            </div>

                            {/* Button */}
                            <div className="flex justify-center mt-4">
                                <button className="bg-[#E52727] text-white py-2 px-6 text-xs rounded-full hover:bg-red-600 transition-colors">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SuspensionCards;
