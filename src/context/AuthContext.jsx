import { createContext, useState } from 'react';

export const AuthContextStore = createContext({
  token: localStorage.getItem('token') || null,
  setToken: () => {},
});

const AuthContext = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  return <AuthContextStore.Provider value={{ token, setToken }}>{children}</AuthContextStore.Provider>;
};

export default AuthContext;
