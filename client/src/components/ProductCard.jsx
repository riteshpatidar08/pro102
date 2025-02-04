import React from 'react';
import product from './../assets/product_13.png';
import { useDispatch } from 'react-redux';
import { addToCart, getCart } from '../redux/Slices/CartSlice';
function ProductCard({product}) {
  console.log(product)
  const dispatch = useDispatch()

  const handleClick = () => {
    const data = {
      userId : localStorage.getItem('id'),
      productId : product._id  ,
      quantity : 1
    }
dispatch(addToCart(data))
dispatch(getCart(localStorage.getItem('id')))
  }
   return (
    <div>
      <div className="relative  group">
        <div className="absolute top-2 left-2 bg-red-500 text-white font-semibold text-xs p-1">
          {`${product.discountPercantage}% off`}
        </div>
        <img
          className="h-full w-full object-cover"
          src={`http://localhost:3000/${product.image}`}
        />
        <div
          className=" absolute 
          bottom-0
          opacity-0 w-full  translate-y-full  group-hover:opacity-100 transition-all duration-200 ease-in-out group-hover:-translate-y-0"
        >
          <div className="mt-auto">
            <button onClick={handleClick}  className="bg-black bg-opacity-50 px-6 py-4 w-full text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h1>{product.name}</h1>
        <div className="flex gap-2">
          <span className=" text-red-500 line-through">Rs.{product.price}</span>
          <span className="">Rs.{product.discountPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
