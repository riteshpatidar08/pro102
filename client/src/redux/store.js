import counterReducer from './Slices/CounterSlice';
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Slices/LoginSlice';
import productReducer from './Slices/ProductSlice';
import cartReducer from './Slices/CartSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
