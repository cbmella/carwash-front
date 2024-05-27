// src/components/AuthRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export default AuthRoute;
