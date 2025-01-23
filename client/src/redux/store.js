import counterReducer from './Slices/CounterSlice';
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Slices/LoginSlice'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    login : loginReducer
  },
});

export default store;
