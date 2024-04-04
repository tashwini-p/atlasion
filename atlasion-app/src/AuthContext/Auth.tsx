import React, { ReactNode, createContext, useContext, useState } from 'react';
import axios from "axios"


interface UserDetails {
    email: string;
    password: string;
  }
  interface AuthorisedData {
    email: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
    age: number;
    organization: string;
  }

interface AuthContextData {
    isAuthenticated: boolean;
    login: (userDetails: UserDetails) => void;
    handleLogout: () => void;
    userFullDetails:AuthorisedData
    setUserFullDetails:(details: AuthorisedData) => void;
  }


const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
  }
  const userDetails:AuthorisedData={
    "email": "",
    "password":"",
    "username": "",
    "firstName": "",
    "lastName": "",
    "age": 0,
    "organization": "",
 }
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userFullDetails,setUserFullDetails]= useState<AuthorisedData>(userDetails)
  interface UserDetails {
    email: string;
    password: string;
  }
  
  
//   const login = async (userData: UserDetails) => {
//     console.log(userData);
//     try{
//       const response = await axios.post('https://atlasion.onrender.com/login', userData);
//       const { token } = response.data;
//       if (token) {
//         console.log(token);
//         setIsAuthenticated(true);
//       } 
//       else {
//         throw new Error('Authentication failed');
//       }
//     } catch (error) {
//     console.log(error);
//     //   console.log(error?.message);
//     }
//   };

 const login=(userData:UserDetails)=>{
    axios.post("https://atlasion.onrender.com/login", userData)
    .then((res) => {
        console.log(res.data)
     setIsAuthenticated(true);
      
    })
    .catch((error) => {
      console.log(error);
    });

 }
        


  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserFullDetails(userDetails);
  };

  const value: AuthContextData = {
    isAuthenticated,
    login,
    handleLogout,
    userFullDetails,
    setUserFullDetails,
  };

  return <AuthContext.Provider value={value}>
            {children}
       </AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
