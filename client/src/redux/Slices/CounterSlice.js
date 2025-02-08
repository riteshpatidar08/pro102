import { createSlice } from '@reduxjs/toolkit';

//create initial State ;
const initialState = {
  count: 0,
};

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: function (state) {
      state.count++;
    },
    decrement: function (state) {
      state.count--;
    },
  },
});

export default CounterSlice.reducer;
export const { increment, decrement } = CounterSlice.actions;
