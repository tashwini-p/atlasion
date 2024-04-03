import React, { ReactNode } from 'react';
import { LoginPage } from '../HomePage/Component/Navbar';
import { useAuth } from './Auth';

interface PrivateRouteProps {
    children: ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return (
    isAuthenticated ? (
      <>{children}</>
    ) : (
      <LoginPage />
    )
  );
};
