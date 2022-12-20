import { createContext, useState } from 'react';

export const AuthContextStore = createContext({
  token: localStorage.getItem('token') || null,
  accountname: localStorage.getItem('accountname') || null,
  setToken: () => {},
  setAccountname: () => {},
});

const AuthContext = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [accountname, setAccountname] = useState(localStorage.getItem('accountname') || null);

  return (
    <AuthContextStore.Provider value={{ token, setToken, accountname, setAccountname }}>
      {children}
    </AuthContextStore.Provider>
  );
};

export default AuthContext;
