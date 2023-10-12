import React, { createContext, useContext, useState, useEffect } from "react";
import { user } from '../stores/userData'; 

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState('context');

  useEffect(()=>{
    user ? setUserData(user) : setUserData(null);
},[]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}