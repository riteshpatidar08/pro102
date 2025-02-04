import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../redux/Slices/CartSlice';
import CartCard from './CartCard';
function CartPage() {
  const { totalItems, cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart(localStorage.getItem('id')));
  }, []);

  return (
    <div className=" p-4 mx-20 flex flex-col gap-4">
      {cartItems.map((item) => (
        <div className="border border-gray-200 p-2">
          <CartCard cartItem={item} />
        </div>
      ))}
    </div>
  );
}

export default CartPage;
