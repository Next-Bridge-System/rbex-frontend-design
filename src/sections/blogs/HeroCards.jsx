import { useEffect, useState } from 'react';
import Carousal from '../suspension/Carousal';


const HeroCards = () => {
    const [expandedCards, setExpandedCards] = useState({});
    const [currentPage, setCurrentPage] = useState(() => {
        const searchParams = new URLSearchParams(window.location.search);
        return parseInt(searchParams.get('page')) || 1;
    });

    const cardsPerPage = 3;

    const allCards = [
        {
            id: 1,
            image: '/assets/blogCar1.svg',
            icon: '/assets/blog1.png', head1: 'by admin',
            icon2: '/assets/blog2.png', head2: '2 Comments',
            icon3: '/assets/blog3.png', head3: 'body parts',
            title: "Electric cars aren't pollution-free; they have to get their energy from somewhere",
            title2: "Electric cars aren't pollution-free;",
            date: 'May 20,2020',
            shortContent: "Electric vehicles (EVs) are often touted as zero-emission vehicles, but the reality is more complex...",
            fullContent: "Electric vehicles (EVs) are often touted as zero-emission vehicles, but the reality is more complex. While they don't emit pollutants directly, the electricity they use often comes from power plants that may burn fossil fuels. The environmental impact depends on how the electricity is generated in your region. Additionally, manufacturing EV batteries has its own environmental footprint. However, even accounting for these factors, EVs typically have a smaller carbon footprint over their lifetime compared to conventional vehicles. This makes them an important part of the transition to sustainable transportation, especially as renewable energy sources become more prevalent in power grids worldwide."
        },
        {
            id: 2,
            image: '/assets/blogCar2.svg',
            icon: '/assets/blog1.png', head1: 'by admin',
            icon2: '/assets/blog2.png', head2: '2 Comments',
            icon3: '/assets/blog3.png', head3: 'body parts',
            title: 'You can know or not know how a car runs and still enjoy riding in a car',
            title2: 'You can know or not know how a car',
            date: 'May 20,2020',
            shortContent: "Modern cars are marvels of engineering that most people use daily without understanding their inner workings...",
            fullContent: "Modern cars are marvels of engineering that most people use daily without understanding their inner workings. This is a testament to good design - when technology becomes so intuitive that users don't need to understand its complexity to benefit from it. However, basic knowledge of car maintenance can help prevent breakdowns and save money. Things like checking tire pressure, understanding warning lights, and knowing when to change oil can make car ownership much smoother. The average driver doesn't need to be a mechanic, but understanding fundamental concepts like how engines convert fuel to motion, how braking systems work, and the importance of regular maintenance can lead to safer driving and lower ownership costs."
        },
        {
            id: 3,
            image: '/assets/blogCar3.svg',
            icon: '/assets/blog1.png', head1: 'by admin',
            icon2: '/assets/blog2.png', head2: '2 Comments',
            icon3: '/assets/blog3.png', head3: 'body parts',
            title: 'Race cars, no matter what size or shape they are, they do the same things. It is not complicated',
            title2: 'Race cars, no matter what size or shape',
            date: 'May 20,2020',
            shortContent: "All race cars share the same fundamental purpose: to go fast and win races...",
            fullContent: "All race cars share the same fundamental purpose: to go fast and win races. Whether it's a Formula 1 car, a NASCAR stock car, or a rally car, they all need to accelerate quickly, brake effectively, and corner precisely. The differences in design come from optimizing for specific race conditions. Aerodynamics, weight distribution, and power delivery are tailored to each racing discipline, but the core principles remain the same. This is why racing skills are often transferable between different types of race cars. The driver's ability to find the perfect racing line, manage tire wear, and make split-second decisions is what ultimately determines success on the track, regardless of the vehicle's specific configuration."
        },
        {
            id: 4,
            image: '/assets/blogCar2.svg',
            icon: '/assets/blog1.png', head1: 'by admin',
            icon2: '/assets/blog2.png', head2: '2 Comments',
            icon3: '/assets/blog3.png', head3: 'body parts',
            title: "Fourth blog post about car maintenance",
            title2: "Fourth blog post",
            date: 'June 15,2020',
            shortContent: "Regular car maintenance is crucial for vehicle longevity and safety...",
            fullContent: "Regular car maintenance is crucial for vehicle longevity and safety. Following the manufacturer's recommended service schedule can prevent costly repairs down the road. Key maintenance tasks include regular oil changes, which lubricate engine components and prevent wear; tire rotations to ensure even tread wear; brake inspections to maintain stopping power; and fluid checks for coolant, transmission, and brake fluids. Seasonal maintenance is also important - preparing your car for winter with proper tires and antifreeze, or summer with AC checks. Modern cars with maintenance reminder systems take much of the guesswork out of scheduling, but understanding these basic needs helps owners make informed decisions about their vehicle care."
        },
        {
            id: 5,
            image: '/assets/blogCar3.svg',
            icon: '/assets/blog1.png', head1: 'by admin',
            icon2: '/assets/blog2.png', head2: '2 Comments',
            icon3: '/assets/blog3.png', head3: 'body parts',
            title: 'Fifth post about automotive technology',
            title2: 'Fifth post about cars',
            date: 'July 10,2020',
            shortContent: "Automotive technology has advanced dramatically in recent years...",
            fullContent: "Automotive technology has advanced dramatically in recent years, with innovations improving safety, efficiency, and comfort. Advanced driver-assistance systems (ADAS) like automatic emergency braking, lane-keeping assist, and adaptive cruise control are becoming standard. Electric vehicle technology continues to evolve with longer ranges and faster charging. Connectivity features now allow for over-the-air updates and real-time traffic information. Under the hood, engine management systems have become more sophisticated, optimizing performance while reducing emissions. These technological advancements are making cars safer, more environmentally friendly, and more enjoyable to drive, while paving the way for fully autonomous vehicles in the future."
        },
        {
            id: 6,
            image: '/assets/blogCar1.svg',
            icon: '/assets/blog1.png', head1: 'by admin',
            icon2: '/assets/blog2.png', head2: '2 Comments',
            icon3: '/assets/blog3.png', head3: 'body parts',
            title: 'Sixth post about racing techniques',
            title2: 'Sixth racing post',
            date: 'August 5,2020',
            shortContent: "Mastering racing techniques requires both skill and understanding of physics...",
            fullContent: "Mastering racing techniques requires both skill and understanding of physics. Professional drivers use techniques like trail braking (gradually releasing brakes while turning into a corner) to maintain optimal speed. Smooth steering inputs prevent loss of traction, while proper throttle application ensures power is delivered effectively. Understanding weight transfer helps drivers anticipate how the car will behave in different situations. Racing lines are carefully chosen to maximize speed through corners - often entering wide, hitting the apex, and exiting wide. These techniques, combined with precise car control and the ability to read track conditions, separate amateur drivers from professionals. While these skills are honed on the track, many can improve everyday driving as well."
        }
    ];

    // Calculate total pages
    const totalPages = Math.ceil(allCards.length / cardsPerPage);

    // Update URL when page changes
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('page', currentPage);
        window.history.pushState({}, '', `?${searchParams.toString()}`);
    }, [currentPage]);

    // Get current page cards
    const currentCards = allCards.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage
    );

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            // Reset expanded cards when page changes
            setExpandedCards({});
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const toggleCardExpansion = (cardId) => {
        setExpandedCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }));
    };
      // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        },
        exit: { 
            opacity: 0, 
            y: -20,
            transition: { duration: 0.2 }
        }
    };

    const contentVariants = {
        collapsed: { height: 0, opacity: 0 },
        expanded: { height: 'auto', opacity: 1 }
    };

    return (
        <section className="bg-[#F4FDFF] pb-16 px-4 sm:px-6 lg:px-16">
            <div className="max-w-7xl relative mx-auto flex flex-col lg:flex-row gap-10">
                {/* Left Section */}
                <div className="w-full lg:w-2/3 space-y-10">
                    {currentCards.map((card) => (
                        <div key={card.id} className="overflow-hidden bg-white rounded-lg shadow-md">
                            {/* Image with Date Overlay */}
                            <div className="relative w-full">
                                <img
                                    src={card.image}
                                    alt={`Card ${card.id}`}
                                    className="w-full h-[400px] object-cover"
                                />
                                <div className="absolute bottom-4 left-4 bg-red-600 text-white text-xs px-4 py-2 rounded-md shadow-md">
                                    {card.date}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-6 flex-wrap">
                                    <img src={card.icon} alt="Author"  />
                                    <span className="text-[#333333] text-sm">{card.head1}</span>
                                    <img src={card.icon2} alt="Comments"  />
                                    <span className="text-[#333333] text-sm">{card.head2}</span>
                                    <img src={card.icon3} alt="Category"  />
                                    <span className="text-[#333333] text-sm">{card.head3}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-[#333333] text-[28px] font-roboto mb-4">{card.title}</h3>
                                <p className="text-[#808080] font-rubik text-[16px] mb-4">
                                    {expandedCards[card.id] ? card.fullContent : card.shortContent}
                                </p>
                                <button
                                    onClick={() => toggleCardExpansion(card.id)}
                                    className="bg-[#E52727] text-white px-6 py-2 rounded-md text-sm hover:bg-red-600 transition"
                                >
                                    {expandedCards[card.id] ? 'Read Less' : 'Read More'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/4 space-y-6">
                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <h4 className="text-xl font-light font-rubik text-[#333333] border-b p-2 mb-4">Recent Posts</h4>
                        {allCards.slice(0, 3).map((card) => (
                            <div key={card.id} className="flex items-center gap-4 mb-4">
                                <img
                                    src={card.image}
                                    alt={`Recent ${card.id}`}
                                    className="w-[100px] h-[80px] object-cover rounded-md"
                                />
                                <h5 className="text-sm text-[#333333] leading-snug">
                                    {card.title2}
                                </h5>
                            </div>
                        ))}
                    </div>

                    <div>
                        <img src="/assets/blogbanner.svg" alt="Blog Banner" className="w-full h-auto rounded-lg shadow" />
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <h4 className="text-xl font-light font-rubik text-[#333333] border-b p-2 mb-4">Categories</h4>
                        <ul className='list-disc pl-5 p-2 text-[#808080] space-y-3 text-sm'>
                            <li>Body Parts (3)</li>
                            <li>Engine & Drivetrain (3)</li>
                            <li>Interior Parts (4)</li>
                        </ul>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <h4 className="text-xl font-light font-rubik text-[#333333] border-b p-2 mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-3">
                            {['Air Filters', 'Brake Discs', 'Bumpers', 'Car Care', 'Car Covers', 'Cargo Accessories',
                                'Consoles & Organizers', 'Corner Lights', 'Floor Mats', 'Fog Lights', 'Hoods', 'Wheel Hubs']
                                .map(tag => (
                                    <span key={tag} className="bg-[#EFEFEF] px-3 py-1 rounded text-sm text-[#808080]">
                                        {tag}
                                    </span>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousal with pagination */}
            <Carousal
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </section>
    );
};

export default HeroCards;