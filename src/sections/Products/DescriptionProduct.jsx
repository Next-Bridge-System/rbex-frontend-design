import React from 'react';

const DescriptionProduct = () => {
  return (
    <section className="bg-[#F4FDFF] pt-6 pb-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        
        {/* Section Heading */}
        <div className=' w-full '>
        <h2 className="text-[#E52727] text-2xl font-rubik mb-4">Description</h2>
        </div>

        {/* Main Description */}
        <p className="text-[#808080] mb-4 border-t pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna iaculis in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
        </p>

        {/* Subheading */}
        <h3 className="text-[#333333] text-xl font-roboto mb-2">Etiam lacus lacus mollis in mattis</h3>

        {/* Supporting Paragraph */}
        <p className="text-[#808080] mb-4">
          Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan. Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a, rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur porta vulputate augue, at sollicitudin nisi molestie eget.
        </p>

        {/* Final Paragraph */}
        <p className="text-[#808080]">
          Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium ipsum risus ac neque. Morbi eu facilisis purus. Quisque in tortor, cursus in nulla ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet fringilla odio scelerisque non.
        </p>
      </div>
    </section>
  );
};

export default DescriptionProduct;
