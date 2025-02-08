import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/Slices/LoginSlice';
import { Loader } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithGoogle } from '../redux/Slices/LoginSlice';
import {
  TextInput,
  PasswordInput,
  Button,
  Container,
  Paper,
  Title,
  Text,
} from '@mantine/core';
import { SocialButtons } from './SocialIcons';

const Login = ({ close }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { email, password };
      await dispatch(login(data));
      close();
      navigate('/');
    } catch (error) {}
  };

  return (
    <Container size={420} my={40}>
      <Title align="center">Welcome Back to Shopping</Title>
      <Text align="center" c="dimmed" size="sm" mb={20}>
        Please log in to access your account
      </Text>

      <form onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          mt="md"
          label="Password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Text size="xs" mt="sm">
          By clicking Login, you agree to the{' '}
          <Text span color="red">
            Terms and Conditions
          </Text>{' '}
          &{' '}
          <Text span color="red">
            Privacy Policy
          </Text>{' '}
          of JobFinder.com
        </Text>

        <Button fullWidth mt="lg" type="submit" color="blue">
          {loading ? <Loader color="white" size="sm" /> : 'Login'}
        </Button>
        <SocialButtons handleGoogleClick={()=>dispatch(signInWithGoogle())}/>
      </form>
    </Container>
  );
};

export default Login;
