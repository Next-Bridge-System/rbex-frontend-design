

const items = [
  {
    id: 1,
    name: 'Modified LED Head Lamp – Toyota Hilux',
    price: '$456.00',
  
       
    image: 'hilux.png',
    sale: false,
  },
  {
    id: 2,
    name: 'Head Lamp – Suzuki Cultus 2018',
    price: '$36.00',
    originalPrice: '$53.00',
   
   
    image: 'discount.png',
    sale: true,
  },
  {
    id: 3,
    name: 'Head Lamp – Toyota Corolla 2014–2016',
    price: '$563.00',
     
   
    image: 'toyota.png',
    sale: false,    
  },
  {
    id: 4,
    name: 'Compact Car Condenser – Suzuki Alto',
    price: '$563.00',
    
   
    image: 'sportage.png',
    sale: false,
  },
  {
    id: 5,
    name: 'Mini Truck Condenser – Suzuki Ravi',
    price: '$65.00',

   
    image: 'ravi.png',
    sale: false,
  },
  {
    id: 6,
    name: 'Condenser with Dryer Attached – KIA Sportage',
    price: '$897.00',
    
   
    image: 'alto.png',
    sale: false,
  },
  {
    id: 7,
    name: 'Plastic Bumper Toyota Corolla 2014–2016',
    price: '$897.00',
    
   
    image: 'corolla.png',
    sale: false,
  },
  {
    id: 8,
    name: 'Rear plastic bumper Honda City 2017',
    price: '$897.00',
    
   
    image: 'city.png',
    sale: false,
  },
  {
    id: 9,
    name: 'Metal off-road bumper Jeep-style SUV.',
    price: '$897.00',
    
    
    image: 'jeep.png',
    sale: true,
  },
];

const Items = () => {
  return (
   <section className="bg-[#F4FDFF] px-4 py-10 flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {items.map(({ id, name, price, originalPrice,   image, sale }) => (
      <div
        key={id}
        className="w-full md:w-[390px] h-[110px] flex bg-white rounded-lg border border-gray-200 shadow hover:shadow-md py-2 px-2"
      >
        {/* Left: Image */}
        <div className="w-1/3 relative">
          <img
            src={`src/assets/${image}`}
            alt={name}
            className="w-full h-full object-contain"
          />
          {sale && (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-[11px] px-3 py-1 rounded-full z-10">
              Sale!
            </div>
          )}
        </div>

        {/* Center: Text */}
        <div className="w-1/1 ml-2 flex flex-col justify-center">
          <h3 className="text-[#333333] font-rubik text-[17px] ">{name}</h3>
          
          <div className="flex items-center gap-2">
            {sale && (
              <span className="text-xs  font-semibold text-[#FF0000] line-through mt-5">{originalPrice}</span>
            )}
            <span className="text-xs text-[#333333] font-medium font-rubik mt-5">{price}</span>
          </div>
        </div>

       
      </div>
    ))}
  </div>
</section>

  );
};

export default Items;
