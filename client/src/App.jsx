import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './components/Homepage';
import PrivateRoutes from './components/PrivateRoutes';
import Navbar from './components/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Mens from './components/Mens';
import { Toaster } from 'sonner';
import Footer from './components/Footer';
import CartPage from './components/CartPage';

const App = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mens" element={<Mens />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/cart" element={<CartPage />} />
        </Route>

        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
