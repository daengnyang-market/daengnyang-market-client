import { createContext } from 'react';

const AuthContext = createContext({
  token: localStorage.getItem('token'),
});

const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem('token');

  return <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
