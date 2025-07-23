import { useState } from 'react';
// import { motion } from 'framer-motion';
import ListIcon from '../../assets/list.svg';
import GridIcon from '../../assets/grid.svg';
import cartIcon from '../../assets/button2.png';
import cartIcon1 from '../../assets/button2 (2).png';
// import discountTag from '../../assets/polygon.png';
import closeIcon from '../../assets/close.png';
import detail1 from '../../assets/detail1.svg';
import detail2 from '../../assets/detail2.svg';
import detail3 from '../../assets/detail3.png';
import Corolla from '../../assets/corolla.png';
import Jeep from '../../assets/jeep.png';
import city from '../../assets/city.png';
import civic from '../../assets/civicbumper.svg';
import Ok from '../../assets/ok.png';


import dropdownArrow from '../../assets/dropdown.png'
import selectvehicle from '../../assets/selectvehicle.png'


// Helper component (put right above DetailCards)

//Modal Component here
const Modal = ({ title, image, onClose }) => {
    const [activeTab, setActiveTab] = useState('fitments');

    const tabs = [
        { key: 'fitments', label: 'Fitments' },
        { key: 'oem', label: 'OEM / Alt Numbers' },
        { key: 'designations', label: 'Designations' },
    ];

    const data = {
        features: [
            'HIGH-GRADE ABS PLASTIC',
            'PRE-PRIMED READY TO PAINT',
            'DIRECT OEM FITMENT',
            'IMPACT-RESISTANT AND FLEXIBLE'
        ],
        fitments: [
            '2016 TOYOTA COROLLA SEDAN',
            '2015 TOYOTA COROLLA SEDAN',
            '2014 TOYOTA COROLLA SEDAN',
            '2016 HONDA CIVIC SEDAN',
            '2015 HONDA CIVIC SEDAN',
            '2014 HONDA CIVIC SEDAN',
        ],
        oem: ['1524-01729C', '31663900', '316639004', 'VO1070111'],
        designations: [
            'PBM24601',
            'PLASTIC BUMPER',
            'HIGH-GRADE ABS PLASTIC',
            'PRE-PRIMED READY TO PAINT',
        ],
    };

    return (
        <div>
            <div className="fixed  inset-0 z-50 bg-black/50 flex items-center justify-center p-2 sm:p-4">
                {/* Responsive width - full on mobile, 90% on small, 80% on medium, 60% on large */}
                <div className="bg-white rounded-xl w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] max-h-[90vh] overflow-x-hidden flex flex-col shadow-2xl">

                    {/* Header */}
                    <div className="flex items-center bg-[#BA2027] justify-between px-4 py-3 border-b">
                        <h2 className="text-base sm:text-lg text-[#FAFAFA] font-rubik">{title}</h2>
                        <button
                            className="text-2xl text-[#FAFAFA] hover:text-red-300 transition-colors"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                    </div>

                    {/* Image + Features - Stack on mobile, side-by-side on larger screens */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-4 border-b">
                        {/* Image - full width on mobile, half on larger screens */}
                        <div className="md:col-span-2 flex items-center justify-center ">
                            <img
                                src={image}
                                alt={title}
                                className="w-full max-w-[150px] sm:max-w-[180px] object-contain"
                            />
                        </div>

                        {/* Features - full width on mobile, half on larger screens */}
                        <div className="md:col-span-2 text-[#000000] font-rubik space-y-1 sm:space-y-2 text-xs sm:text-sm flex flex-col justify-center">
                            {data.features.map((txt) => (
                                <div key={txt} className="flex items-start gap-2">
                                    <img src={Ok} alt="ok" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>{txt}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tabs - responsive font size and padding */}
                    <div className="flex border-b">
                        {tabs.map(({ key, label }) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`flex-1 py-2 text-xs sm:text-sm font-medium transition
                ${activeTab === key
                                        ? 'border-b-2 border-red-600 text-red-600'
                                        : 'text-gray-600 hover:text-red-500'}`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Tab content - responsive padding and font size */}
                    <div className="p-2 sm:p-4 text-xs sm:text-sm space-y-1 overflow-y-auto max-h-[30vh]">
                        {activeTab === 'fitments' &&
                            data.fitments.map((f) => <div key={f} className="text-xs">• {f}</div>)}

                        {activeTab === 'oem' &&
                            data.oem.map((o) => <div key={o} className="">{o}</div>)}

                        {activeTab === 'designations' &&
                            data.designations.map((d) => <div key={d} className="py-1">✓ {d}</div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};


const bumperParts = [
    {
        id: 1,
        title: 'Plastic Bumper Toyota Corolla 2014-2016',
        portNumber: '33-3035',
        OEMPartNo: '1524.0172XC, 31663903, 31663908A, V01/07/11',
        yourPrice: '$200.00',
        listPrice: '$250.00',
        image: Corolla,
        details: [detail1, detail2, detail3]
    },
    {
        id: 2,
        title: 'Rear plastic bumper Honda City 2017',
        portNumber: '33-3035',
        OEMPartNo: '1524.0172XC, 31663903, 31663908A, V01/07/11',
        yourPrice: '$234.00',
        listPrice: '$290.00',
        image: city,
        details: [detail1, detail3]
    },
    {
        id: 3,
        title: 'Metal off-road bumper Jeep-style SUV',
        portNumber: '33-3035',
        OEMPartNo: '1524.0172XC, 31663903, 31663908A, V01/07/11',
        yourPrice: '$224.00',
        listPrice: '$290.00',
        image: Jeep,
        details: [detail2, detail3]
    },
    {
        id: 4,
        title: 'Modified Honda Civic fiber body kit bumper',
        portNumber: '33-3035',
        OEMPartNo: '1524.0172XC, 31663903, 31663908A, V01/07/11',
        yourPrice: '$200.00',
        listPrice: '$290.00',
        image: civic,
        details: [detail1, detail2]
    }
];

const DetailCards = () => {
    const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
    const [openModalId, setOpenModalId] = useState(null);
    const openModal = (id) => setOpenModalId(id);
    const closeModal = () => setOpenModalId(null);

    const activePart = bumperParts.find(p => p.id === openModalId);
    const [filters, setFilters] = useState({
        yearMade: '',
        vehicleMake: '',
        vehicleModel: '',
        category: '',
        partNumber: '',
        options: {
            CAPA: false,
            'Non-CAPA': false,
            DSC: false,
            OE: false,
            CU: false,
            U: false
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOptionToggle = (option) => {
        setFilters(prev => ({
            ...prev,
            options: {
                ...prev.options,
                [option]: !prev.options[option]
            }
        }));
    };

    const clearFilter = (filterName) => {
        setFilters(prev => ({
            ...prev,
            [filterName]: ''
        }));
    };

    const toggleViewMode = (mode) => {
        setViewMode(mode);
    };

    const [showDropdown, setShowDropdown] = useState(false);


    return (
        <div className="relative px-4 mb-10 sm:px-6 lg:px-10 py-8">
            <div className="flex justify-end">
                <div className="bg-[#EAEAEA] text-[#686868] font-roboto border w-full sm:w-[76%] rounded-lg px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm   mb-4 sm:mb-6 shadow-sm flex items-center justify-between">
                    {/* Sort Label and Dropdown */}
                    <div className="flex  items-center gap-2 ">
                        <span className="text-[#686868]  font-light text-base sm:text-lg whitespace-nowrap">
                            Sort By:
                        </span>
                        <select className="p-2   w-[150px]  lg:w-full font-regular text-[#686868] border rounded-2xl text-xs sm:text-sm">
                            <option className='font-regualar text-xs'>Updated data : Recent First</option>
                            <option className='text-xs'>Price: low to high</option>
                            <option className='text-xs'>Price: high to low</option>
                        </select>
                    </div>

                    {/* View Icons */}
                    <div className="flex items-center gap-2 bg-[#F3F3F3] p-1 rounded">
                        <div
                            className={`flex items-center gap-1 cursor-pointer ${viewMode === 'list' ? 'text-blue-600' : 'text-gray-600'}`}
                            onClick={() => toggleViewMode('list')}
                        >
                            <img
                                src={ListIcon}
                                alt="List View"
                                className="w-4 h-4 sm:w-5 sm:h-5"
                            />
                            <span className='text-xs sm:text-sm'>List</span>
                        </div>
                        <div
                            className={`flex items-center gap-1 cursor-pointer ${viewMode === 'grid' ? 'text-blue-600' : 'text-gray-600'}`}
                            onClick={() => toggleViewMode('grid')}
                        >
                            <img
                                src={GridIcon}
                                alt="Grid View"
                                className="w-3 h-3 sm:w-4 sm:h-4"
                            />
                            <span className='text-xs sm:text-sm'>Grid</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex gap-6 w-full">
                {/* Left Section */}
                <div className="bg-[#FFFFFF] border rounded-lg mb-9 p-2 w-[70%] mx-auto h-[95%] lg:w-[25%] space-y-4 text-sm shadow-lg">
                    {/* Header */}
                    <div className='bg-[#B5151E] flex justify-center  text-white w-full p-3 rounded-t-lg'>
                        <h1 className="text-[#FFFFFF] font-lato text-[15px]  font-semibold">SHOW RESULTS BY:</h1>
                    </div>

                    {/* Search Part Number */}
                    <div className="relative flex flex-col mb-5 justify-center">
                        <label htmlFor="partNumber" className="block text-center  font-bold font-lato text-[15px]  ml-0   text-[#393C3D] mb-3">SEARCH PART NUMBER</label>
                        <div className="flex">
                            <input
                                type="text"
                                id="partNumber"
                                name="partNumber"
                                placeholder="e.g. 3350,5604"
                                className="w-full border rounded-l px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={filters.partNumber}
                                onChange={handleChange}
                            />
                            <button
                                className="bg-[#B5151E] text-white px-4 py-2 rounded-r hover:bg-[#003366] transition-colors"
                                onClick={() => console.log('Search:', filters.partNumber)}
                            >
                                Go
                            </button>
                        </div>
                    </div>

                    {/* Year Made */}
                    <div className="relative">
                        <label htmlFor="yearMade" className="block font-medium text-[#393C3D] mb-1 ">
                            YEAR MADE
                        </label>

                        {/* Select with custom arrow */}
                        <div className="relative">
                            <select
                                id="yearMade"
                                name="yearMade"
                                className="appearance-none w-full border rounded px-3 py-2  text-sm text-[#393C3D] pr-10"
                                value={filters.yearMade}
                                onChange={handleChange}
                            >
                                <option value="">Select Year</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                            </select>

                            {/* Custom arrow icon */}
                            <img
                                src={dropdownArrow}
                                alt="Dropdown Arrow"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none "
                            />
                        </div>

                        {/* Selected Year Display */}
                        {filters.yearMade && (
                            <div className="flex items-center justify-between px-3 py-1 mt-1 mb-5 rounded text-sm">
                                <span>{filters.yearMade}</span>
                                <button onClick={() => clearFilter('yearMade')}>
                                    <img src={closeIcon} alt="Remove" />
                                </button>
                            </div>
                        )}
                    </div>


                    {/* Vehicle Make */}
                    <div className="relative">
                        <label htmlFor="vehicleMake" className="block font-medium text-[#393C3D] mb-1">
                            VEHICLE MAKE
                        </label>

                        {/* Select with custom dropdown arrow */}
                        <div className="relative">
                            <select
                                id="vehicleMake"
                                name="vehicleMake"
                                className="appearance-none w-full border rounded px-3 py-2 text-sm text-[#393C3D] pr-10"
                                value={filters.vehicleMake}
                                onChange={handleChange}
                            >
                                <option value="">Select Make</option>
                                <option value="Toyota">Toyota</option>
                                <option value="Honda">Honda</option>
                                <option value="Ford">Ford</option>
                            </select>

                            {/* Custom arrow icon */}
                            <img
                                src={dropdownArrow}
                                alt="Dropdown Arrow"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none "
                            />
                        </div>

                        {/* Selected value display */}
                        {filters.vehicleMake && (
                            <div className="flex items-center justify-between mb-5 px-3 py-1 mt-1 rounded text-sm">
                                <span>{filters.vehicleMake}</span>
                                <button onClick={() => clearFilter('vehicleMake')}>
                                    <img src={closeIcon} alt="Remove" />
                                </button>
                            </div>
                        )}
                    </div>


                    {/* Vehicle Model */}
                    <div className="relative">
                        <label htmlFor="vehicleModel" className="block font-medium text-[#393C3D] mb-1">
                            SELECT MODEL
                        </label>

                        {/* Select with custom dropdown arrow */}
                        <div className="relative">
                            <select
                                id="vehicleModel"
                                name="vehicleModel"
                                className="appearance-none w-full border rounded px-3 py-2 text-sm text-[#393C3D] pr-10"
                                value={filters.vehicleModel}
                                onChange={handleChange}
                            >
                                <option value="">Select Model</option>
                                <option value="Corolla">Corolla</option>
                                <option value="Civic">Civic</option>
                                <option value="Focus">Focus</option>
                            </select>

                            {/* Custom arrow icon */}
                            <img
                                src={dropdownArrow}
                                alt="Dropdown Arrow"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none "
                            />
                        </div>

                        {/* Selected model display */}
                        {filters.vehicleModel && (
                            <div className="flex items-center justify-between mb-5  px-3 py-1 mt-1 rounded text-sm">
                                <span>{filters.vehicleModel}</span>
                                <button onClick={() => clearFilter('vehicleModel')}>
                                    <img src={closeIcon} alt="Remove" />
                                </button>
                            </div>
                        )}
                    </div>


                    {/* Category */}
                    <div className="relative">
                        <label htmlFor="category" className="block font-medium text-[#393C3D] mb-1">
                            SELECT CATEGORY
                        </label>

                        {/* Select with custom dropdown arrow */}
                        <div className="relative">
                            <select
                                id="category"
                                name="category"
                                className="appearance-none w-full border rounded px-3 py-2 text-sm text-[#393C3D] pr-10"
                                value={filters.category}
                                onChange={handleChange}
                            >
                                <option value="">Select Category</option>
                                <option value="Head Lamp">Head Lamp</option>
                                <option value="Bumper">Bumper</option>
                                <option value="Mirror">Mirror</option>
                            </select>

                            {/* Custom arrow icon */}
                            <img
                                src={dropdownArrow}
                                alt="Dropdown Arrow"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                            />
                        </div>

                        {/* Selected category display */}
                        {filters.category && (
                            <div className="flex items-center justify-between px-3 mb-5 py-1 mt-1 rounded text-sm">
                                <span>{filters.category}</span>
                                <button onClick={() => clearFilter('category')}>
                                    <img src={closeIcon} alt="Remove" />
                                </button>
                            </div>
                        )}
                    </div>



                    {/* Toggles - Responsive grid */}
                    <div className="grid grid-cols-1 gap-3">
                        {Object.entries(filters.options).map(([label, checked]) => (
                            <div key={label} className="flex font-roboto font-medium text-[#393C3D] justify-between items-center">
                                <span className="text-sm font- text-[#393C3D] ">{label}</span>
                                <label className="relative inline-flex items-center cursor-pointer ">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={checked}
                                        onChange={() => handleOptionToggle(label)}
                                    />
                                    {/* Constant track background */}
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer">
                                        {/* Thumb with color change */}
                                        <div className={`absolute top-0.5 left-[2px] h-5 w-5 rounded-full shadow-md
            transform transition-transform duration-200
            ${checked ? 'translate-x-5 bg-blue-500' : 'translate-x-0 bg-[#C3C4C5]'}`}
                                        />
                                    </div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 mb-4 rounded-lg space-y-6 flex flex-col">
                    {/* Right Section with dropdown functionality */}
                    <div className="flex justify-between items-center relative">
                        <h2 className="flex items-center gap-2 text-2xl font-lato text-[#353535] font-bold">
                            Select a vehicle to check if these parts fit
                        </h2>

                        {/* Select Vehicle Button */}
                        <button
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="flex items-center gap-2 text-sm text-white bg-[#0072EF] border px-3 py-1 rounded hover:shadow-md"
                        >
                            Select vehicle
                            <img src={selectvehicle} alt="Arrow Icon" />
                        </button>

                        {/* Dropdown Option */}
                        {showDropdown && (
                            <div className="absolute right-0 top-full mt-2 bg-white border rounded shadow-md z-10 w-[135px] text-sm">
                                <button
                                    onClick={() => {
                                        console.log('Selected: BMW');
                                        setShowDropdown(false);
                                    }}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                 BMW
                                </button>
                            </div>
                        )}
                    </div>




                     {/* Product Display Area */}
            {viewMode === 'list' ? (
                <div className="space-y-6">
                    {bumperParts.map((part, index) => (
                        <motion.div
                            key={part.id}
                            className="relative flex flex-col sm:flex-row items-start gap-4 p-7 bg-white rounded-lg shadow border hover:shadow-lg transition"
                            whileHover={{ scale: 1.01 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            {/* Discount ribbon - only for first and fourth items */}
                            {(index === 0 || index === 3) && (
                                <motion.div
                                    className="absolute top-0 left-0 w-20 h-20 pointer-events-none"
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <svg
                                        viewBox="0 0 100 100"
                                        className="absolute inset-0 w-full h-full fill-[#BA2027] drop-shadow"
                                    >
                                        <path d="M0 0 L100 0 L0 100 Z" />
                                    </svg>
                                    <span className="absolute top-4 left-1.5 font-roboto text-white text-xs transform -rotate-45">
                                        50% off
                                    </span>
                                </motion.div>
                            )}
                            
                            {/* Rest of your card content */}
                            <img
                                src={part.image}
                                alt={part.title}
                                className="w-24 h-24 object-contain"
                            />
                            <div className="flex-1 min-w-0">
                                <h3
                                    className="text-[#004379] font-semibold text-lg cursor-pointer hover:underline"
                                    onClick={() => openModal(part.id)}
                                >
                                    {part.title}
                                </h3>
                                <div className="flex gap-2 mt-2">
                                    {part.details.map((icon, idx) => (
                                        <img key={idx} src={icon} alt="detail" />
                                    ))}
                                </div>
                                <p className="text-sm text-[#4D4D4D] mt-1">
                                    <strong>Part Number:</strong> {part.portNumber}<br />
                                    <strong>OEM Part No:</strong> {part.OEMPartNo}
                                </p>
                            </div>
                            <div className="flex flex-col items-end sm:items-end mt-2 sm:mt-0 w-full sm:w-auto">
                                <div className="text-right">
                                    <p className="text-[#004379] font-semibold">
                                        Your Price {part.yourPrice}
                                    </p>
                                    <p className="text-sm">
                                        List Price <span className="line-through">{part.listPrice}</span>
                                    </p>
                                </div>
                                <button className="bg-[#BA2027] text-white px-7 py-2 rounded text-sm flex items-center hover:bg-red-700 transition mt-3">
                                    Add to Cart
                                    <img src={cartIcon1} alt="cart" className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {bumperParts.map((part, index) => (
                        <motion.div
                            key={part.id}
                            className="relative flex flex-col bg-white rounded-lg shadow-md overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            {/* Discount ribbon - only for first and fourth items */}
                            {(index === 0 || index === 3) && (
                                <motion.div
                                    className="absolute top-0 left-0 w-24 h-24"
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <svg
                                        viewBox="0 0 100 100"
                                        className="absolute inset-0 w-full h-full fill-[#BA2027] drop-shadow"
                                    >
                                        <path d="M0 0 L100 0 L0 100 Z" />
                                    </svg>
                                    <span className="absolute top-4 left-1.5 text-white font-bold text-xs transform -rotate-45">
                                        50%<br />SALE
                                    </span>
                                </motion.div>
                            )}

                            {/* Rest of your card content */}
                            <div className="p-4 flex justify-center">
                                <img
                                    src={part.image}
                                    alt={part.title}
                                    className="w-40 h-40 object-contain"
                                />
                            </div>
                            <div className="px-4 flex flex-col items-start space-y-2">
                                <h3
                                    className="font-semibold text-lg text-[#004379] cursor-pointer hover:underline"
                                    onClick={() => openModal(part.id)}
                                >
                                    {part.title}
                                </h3>
                                <div className="flex gap-2">
                                    {part.details.map((icon, idx) => (
                                        <img key={idx} src={icon} alt="detail" className="w-6 h-6" />
                                    ))}
                                </div>
                                <p className="text-xs text-[#4D4D4D]">
                                    <strong>Part Number:</strong> {part.portNumber}<br />
                                    <strong>OEM Part No:</strong> {part.OEMPartNo}
                                </p>
                                <div>
                                    <p className="text-[#004379] font-bold text-lg">
                                        Your Price {part.yourPrice}
                                    </p>
                                    <p className="text-sm">
                                        List Price <span className="line-through">{part.listPrice}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="px-4 pb-4 mt-4 space-y-2">
                                <button className="w-full bg-[#BA2027] text-white py-2 rounded text-sm font-semibold hover:bg-red-800 transition">
                                    Buy Now!
                                </button>
                                <button className="w-full border border-[#BA2027] text-[#BA2027] py-2 rounded text-sm font-semibold flex items-center justify-center hover:shadow-md transition">
                                    Add to Cart
                                    <img src={cartIcon} alt="cart" className="ml-2 w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {activePart && (
                <Modal
                    title={activePart.title}
                    image={activePart.image}
                    onClose={closeModal}
                />
            )}
        


                </div>
            </div>
        </div>
    );
};

export default DetailCards;