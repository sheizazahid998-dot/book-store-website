import { createContext, useContext, useState } from "react";

// 1. Create Context
const AuthContext = createContext();

// 2. Custom hook for easy access
export const useAuth = () => useContext(AuthContext);

// 3. Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // store user info here
  const [isAuthenticated, setIsAuthenticated] = useState(false); // track login state

  // Function to create/register a user
  const createAccount = (userData) => {
    setUser(userData);
  };
  const setLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider
      value={{ user, createAccount, isAuthenticated, setLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
