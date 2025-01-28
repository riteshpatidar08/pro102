import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = async (data) => {
    console.log(data.avatar[0]);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('password', data.password);
    formData.append('avatar', data.avatar[0]);
    console.log(formData);
    const res = await axios.post(
      'http://localhost:3000/auth/register',
      formData
    );
    console.log(res);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-sm font-semibold mb-2">Name</label>
        <input
          className="w-64 border border-slate-500 rounded-full p-2"
          placeholder="Enter name"
          type="text"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{errors.name.message}</p>
        )}
        <label className="block">Email</label>
        <input
          className="w-64 border border-slate-500 rounded-full p-2"
          type="email"
          {...register('email')}
        />
        <label className="block">Phone Number</label>
        <input
          className="w-64 border border-slate-500 rounded-full p-2"
          type="number"
          {...register('phoneNumber')}
        />
        <label className="block">Password</label>
        <input
          className="w-64 border border-slate-500 block rounded-full p-2"
          type="password"
          {...register('password')}
        />

        <label className="block">Profile</label>
        <input
          className="w-64 border border-slate-500 block rounded-full p-2"
          type="file"
          {...register('avatar')}
        />
        <button
          className="px-10 cursor-pointer py-2 bg-sky-500 text-white font-smibold rounded-full mt-2"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
