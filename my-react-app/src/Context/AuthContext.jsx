import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || null
  );

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const login = (token) => {
    setIsLoggedIn(true);
    setAccessToken(token);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("accessToken", token);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setAccessToken(null);
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
