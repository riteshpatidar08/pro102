import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//create initial State ;
const initialState = {
  products: [],
  error: null,
  loading: false,
};

export const getProducts = createAsyncThunk(
  '/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('http://localhost:3000/api/products');
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
      });
  },
});
export default ProductSlice.reducer;
