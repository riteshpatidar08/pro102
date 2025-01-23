import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './components/Homepage';
import PrivateRoutes from './components/PrivateRoutes';
import { useSelector , useDispatch } from 'react-redux';
import { increment ,decrement } from './redux/Slices/CounterSlice';
const App = () => {
  const dispatch = useDispatch()
  const { count } = useSelector((state) => {
    console.log(state);
    return state.counter;
  });
  console.log(count);
  const handleClick = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }
  return (
    <div>
      
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Homepage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
