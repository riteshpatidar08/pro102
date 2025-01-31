import React from 'react';
import product from './../assets/product_13.png';
function ProductCard() {
  return (
    <div>
      <div className="relative group">
        <img alt="image" src={product} className="" />
        <div className="bg-red-500 absolute top-2 p-1 left-2 opacity-50 text-white font-bold">
          50% off
        </div>
        <div className="absolute w-full transition-all ease-in-out duration-300 bottom-0 translate-y-full group-hover:-translate-y-0   opacity-0 group-hover:opacity-50">
          <button className="px-6 py-4 text-white cursor-pointer  bg-black">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h2>Shirt</h2>
        <div className="flex gap-3">
          <span className="text-red-500 line-through">Rs. 1499</span>
          <span>Rs. 500</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
