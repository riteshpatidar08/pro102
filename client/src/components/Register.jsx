import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  TextInput,
  PasswordInput,
  Button,
  FileInput,
  Container,
  Title,
  Text,
  Paper,
} from '@mantine/core';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    console.log(data.avatar[0]);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('password', data.password);
    formData.append('avatar', data.avatar[0]);

    const res = await axios.post(
      'http://localhost:3000/auth/register',
      formData
    );
    console.log(res);
  };

  return (
    <Container size={420} my={40}>
      <Title align="center">Sign Up for the Best Shopping Experience!</Title>
      <Text align="center" c="dimmed" size="sm" mb={20}>
        Create an account to explore exclusive deals and discounts
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Name"
          placeholder="Enter your name"
          {...register('name', { required: 'Name is required' })}
          error={errors.name?.message}
        />

        <TextInput
          mt="md"
          label="Email"
          placeholder="Enter your email"
          {...register('email', { required: 'Email is required' })}
          error={errors.email?.message}
        />

        <TextInput
          mt="md"
          label="Phone Number"
          placeholder="Enter your phone number"
          {...register('phoneNumber', { required: 'Phone number is required' })}
          error={errors.phoneNumber?.message}
        />

        <PasswordInput
          mt="md"
          label="Password"
          placeholder="Enter your password"
          {...register('password', { required: 'Password is required' })}
          error={errors.password?.message}
        />

        <label className="block">Profile</label>
        <input type="file" mt="md" {...register('avatar')} />

        <Button fullWidth mt="lg" type="submit" color="blue">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default Register;
