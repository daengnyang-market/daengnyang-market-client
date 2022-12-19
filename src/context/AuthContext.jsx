import { createContext, useState } from 'react';

const AuthContext = createContext({
  token: null,
});

const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem('token');

  return <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
