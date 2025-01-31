import React from 'react';
import bigImage from './../assets/fitSection/bigmenimge.jpg';
import all_products from '../assets/all_product';
function GridSection() {
  const fourProduct = all_products.slice(0, 4);
  return (
    <div className="mt-14 px-9 py-12">
      <h1 className=" text-2xl font-normal mb-10 leading-wide text-center">
        STYLISH PICKS FOR EVERYTIME
      </h1>

      <div className="grid grid-cols-4 gap-6 grid-rows-2">
        <div className="col-span-2 row-span-2">
          <div className="relative">
            <img src={bigImage} />
            <button className="opacity-0 cursor-pointer bg-black  hover:opacity-60 absolute top-0 text-white w-full h-full">
              Grab Now
            </button>
          </div>
        </div>
        {fourProduct.map((product) => (
          <div className="relative">
            <img src={product.image} className="w-full h-full object-cover" />
            <button className="opacity-0 cursor-pointer transition-all ease-in-out duration-300 bg-black bg-opacity-50 hover:opacity-60 absolute top-0 text-white    w-full h-full">
              Grab Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridSection;
