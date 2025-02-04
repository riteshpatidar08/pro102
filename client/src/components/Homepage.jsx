import React, { useEffect } from 'react';
import Carousel from './Carousel';
import GridSection from './GridSection';
import ProductCard from './ProductCard';
import { getProducts } from '../redux/Slices/ProductSlice';
import { useDispatch } from 'react-redux';
import ProductList from './ProductList';
import { getCart } from '../redux/Slices/CartSlice';
function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = 'Home';
    dispatch(getProducts());
    if(localStorage.getItem('id')){
    dispatch(getCart(localStorage.getItem('id'))) }
  }, []);
  return (
    <div>
      <Carousel />
      <GridSection />
    <ProductList/>
    </div>
  );
}

export default Homepage;
