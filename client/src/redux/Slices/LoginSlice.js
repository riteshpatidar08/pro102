import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
};

export const login = createAsyncThunk('/login', async (data) => {
  const res = await axios.post('http://localhost:3000/auth/login', data);
  return res.data;
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        (state.loading = false), console.log(action.payload);
      });
  },
});

export default loginSlice.reducer;
