import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const signup = (userData)=>{
    setUser (userData);
  }
  const login = (userData) => {
    setUser(userData);
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, login, logout , signup}}>
      {children}
    </UserContext.Provider>
  );
};
export const User = () => {
  return useContext(UserContext);
};
