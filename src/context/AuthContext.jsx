import { createContext } from 'react';

const AuthContext = createContext({
  token: localStorage.getItem('token'),
});

const AuthContextProvider = ({ children }) => {
  let token = localStorage.getItem('token');
  const setToken = (data) => {
    token = data;
  };

  return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
