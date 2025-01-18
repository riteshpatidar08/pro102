import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const res = await axios.post('http://localhost:3000/auth/register', data);

    console.log(res);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" {...register('name')} />
        <label>Email</label>
        <input type="email" {...register('email')} />
        <label>Phone Number</label>
        <input type="number" {...register('phoneNumber')} />
        <label>Password</label>
        <input type="password" {...register('password')} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
