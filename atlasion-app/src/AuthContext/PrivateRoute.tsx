import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

interface PrivateRouteProps {
    children: ReactNode;
}

export const PrivateRoute = ({ children}:PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();
  const navigate=useNavigate();

 useEffect(()=>{
  if(!isAuthenticated){
    return navigate("/logIn")
  }
 },[isAuthenticated])
 return <>{children}</>
};
