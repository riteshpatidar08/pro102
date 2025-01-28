import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/Slices/LoginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput ,PasswordInput } from '@mantine/core';
import { Button } from '@mantine/core';
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
       <div className="flex flex-col gap-1 my-6">
        <h1 className="text-sm font-semibold">
          Welcome back to <span className="text-red">Shopping</span>
        </h1>
        <p className="text-sm font-medium text-gray-alpha">
          Please log in to access your account
        </p>
      </div>
      <form onSubmit={handleSubmit}>
       
        <TextInput
        label="Email"
          type="email"
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       
        <PasswordInput
          label='Password'
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <p className="text-[11px] font-normal">
          By clicking Login, you agree to the{' '}
          <span className="text-red">Terms and Conditions</span> &{' '}
          <span className="text-red">Privacy Policy</span> of JobFinder.com
        </p>
        <Button className="mt-5 px-10 py-2 bg-sky-500 text-white" type="submit">{loading ? 'logging in ...' : 'Login'}</Button>
      </form>
      
    </div>
  );
};

export default Login;

// CORS ERROR => https:localhost:5173 => http:localhost:3000

// same origin policy
