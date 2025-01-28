import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './components/Homepage';
import PrivateRoutes from './components/PrivateRoutes';
import Navbar from './components/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mens from './components/Mens';
const App = () => {



  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/mens' element={<Mens/>}/>

        <Route element={<PrivateRoutes />}>
        
        </Route>

       
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
