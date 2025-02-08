import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//create initial State ;
const initialState = {
  cartItems: [],
  totalItems: 0,
  loading: false,
  totalPrice: 0,
  error: null,
};

export const addToCart = createAsyncThunk(
  '/addToCart',
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post('http://localhost:3000/api/cart', data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const getCart = createAsyncThunk(
  '/getCart',
  async (userId, { rejectWithValue }) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/cart/${userId}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearTotalItems: function (state, action) {
      state.totalItems = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      })
      .addCase(getCart.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.totalItems = action.payload.totalItems;
        state.cartItems = action.payload.cart.items;
        state.totalPrice = action.payload.cart.totalPrice;
      });
  },
});

export default cartSlice.reducer;
export const { clearTotalItems } = cartSlice.actions;
