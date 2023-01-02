import { createContext, useState } from 'react';

export const UserLocationContextStore = createContext({
  longitude: 126.48911,
  latitude: 33.4698142,
  district: '제주특별자치도 제주시 연동',
  error: false,
  errorCode: null,
  setLongitude: () => {},
  setLatitude: () => {},
  setDistirct: () => {},
  setError: () => {},
  setErrorCode: () => {},
});

const UserLocationContext = ({ children }) => {
  const [longitude, setLongitude] = useState(126.48911);
  const [latitude, setLatitude] = useState(33.4698142);
  const [district, setDistrict] = useState('제주특별자치도 제주시 연동');
  const [error, setError] = useState(false);
  const [errorCode, setErrorCode] = useState(null);

  return (
    <UserLocationContextStore.Provider
      value={{
        longitude,
        latitude,
        district,
        error,
        errorCode,
        setLongitude,
        setLatitude,
        setDistrict,
        setError,
        setErrorCode,
      }}
    >
      {children}
    </UserLocationContextStore.Provider>
  );
};

export default UserLocationContext;
