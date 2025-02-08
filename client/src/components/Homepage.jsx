import React, { useEffect } from 'react';
import Carousel from './Carousel';
import GridSection from './GridSection';
import ProductCard from './ProductCard';
import { getProducts } from '../redux/Slices/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from './ProductList';
import { getCart } from '../redux/Slices/CartSlice';
function Homepage() {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.login);
  console.log(id);
  
  useEffect(() => {
    document.title = 'Home';
    dispatch(getProducts());
    if (id) {
      dispatch(getCart(id));
    }
  }, [id]);
  return (
    <div>
      <Carousel />
      <GridSection />
      <ProductList />
    </div>
  );
}

export default Homepage;
