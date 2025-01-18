import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { email, password };
      const res = await axios.post('http://localhost:3000/auth/login', data);
      if (res.status === 200) {
        setSuccess(res.data.message);
        navigate('/home');
      }
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
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
        <button type="submit">Login</button>
      </form>
      <h2>{success}</h2>
    </div>
  );
};

export default Login;

// CORS ERROR => https:localhost:5173 => http:localhost:3000

// same origin policy
