import React from 'react';
import { useSelector } from 'react-redux';

function CartCard({ cartItem }) {
  console.log(cartItem);

  const totalPricee = cartItem.productId.discountPrice * cartItem.quantity;
  const price = cartItem.productId.price * cartItem.quantity;
  return (
    <div className="flex gap-4 relative">
      <div>
        <img
          src={`http://localhost:3000/${cartItem.productId.image}`}
          className=" w-32"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xs font-bold">
          {cartItem.productId.name.toUpperCase()}
        </h1>
        <h1>{cartItem.productId.productDescription}</h1>
        <span className="bg-gray-200 p-1 font-semibold text-xs ">
          Qty:{cartItem.quantity}
        </span>

        <div className="flex justify-center items-center gap-2">
          <span className="text-xs font-semibold">Rs.{totalPricee}</span>
          <span className="text-xs font-semibold text-gray-500 line-through">
            Rs.{price}
          </span>
          <span className="text-red-500 font-semibold text-sm">
            {cartItem.productId.discountPercantage}% OFF
          </span>
        </div>
      </div>

      <span className="absolute cursor-pointer right-2 top-0">x</span>
    </div>
  );
}

export default CartCard;
