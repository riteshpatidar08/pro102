import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes() {
  const token = localStorage.getItem('token');
  console.log(token);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PrivateRoutes;
