import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'sonner';


const initialState = {
  loading: false,
  error: null,
  token: localStorage.getItem('token') || null,
  role: localStorage.getItem('role') || null,
  name: null,
  id: null,
  avatar : null
};

export const login = createAsyncThunk(
  '/login',
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post('http://localhost:3000/auth/login', data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logOut: (state, action) => {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('role');
      localStorage.removeItem('name');
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        (state.loading = false), console.log(action.payload);
        localStorage.setItem('token', action.payload.data.token);
        state.token = action.payload.data.token;
        const { name, role, id } = jwtDecode(action.payload.data.token);
        state.role = role;
        localStorage.setItem('role', role);
        state.name = name;
        localStorage.setItem('name', name);
        state.id = id;
        localStorage.setItem('id', id);
        toast.success(action.payload.message);
        state.avatar = action.payload.data.avatar
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.error = action.payload.data.message;
      });
  },
});

export const { logOut } = loginSlice.actions;
export default loginSlice.reducer;
