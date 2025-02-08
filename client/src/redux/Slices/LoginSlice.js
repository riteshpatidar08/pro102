import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'sonner';
import { auth, googleProvider } from './../../config/firebase';
import { signInWithPopup } from 'firebase/auth';
const initialState = {
  loading: false,
  error: null,
  token: localStorage.getItem('token') || null,
  role: localStorage.getItem('role') || null,
  name: null,
  id: localStorage.getItem('id') || null,
  avatar: null,
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

export const signInWithGoogle = createAsyncThunk('/googlelogin', async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result);
    const user = result.user;
    console.log(user);
    const idtoken = await user.getIdToken();
    console.log(idtoken);

    const response = await axios.post(
      'http://localhost:3000/auth/google-login',
      { idtoken }
    );
    return response.data.token;
  } catch (err) {}
});

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
    updateIdTokenRole: (state, action) => {
      console.log(action.payload);
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.id = action.payload.id;
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
        state.avatar = action.payload.data.avatar;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.error = action.payload.data.message;
      })
      .addCase(signInWithGoogle.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
       
        state.loading = false;
        console.log(action.payload);
        const { id, role } = jwtDecode(action.payload);
          state.id = id;
        state.role = role;
        state.token = action.payload;
        localStorage.setItem('token', action.payload);
        localStorage.setItem('id', id);
        localStorage.setItem('role', role);
      // window.location.href('/')
      });
  },
});

export const { logOut, updateIdTokenRole } = loginSlice.actions;
export default loginSlice.reducer;
