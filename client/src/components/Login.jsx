import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/Slices/LoginSlice';
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.login);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { email, password };
    await  dispatch(login(data));
      navigate('/');
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="text-3xl font-bold text-green-500">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{loading ? 'logging in ...' : 'Login'}</button>
      </form>
      
    </div>
  );
};

export default Login;

// CORS ERROR => https:localhost:5173 => http:localhost:3000

// same origin policy
