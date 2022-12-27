import { createContext, useState } from 'react';

export const UserLocationContextStore = createContext({
  longitude: 126.48911,
  latitude: 33.4698142,
  district: '제주특별자치도 제주시 연동',
  setLongitude: () => {},
  setLatitude: () => {},
  setDistirct: () => {},
});

const UserLocationContext = ({ children }) => {
  const [longitude, setLongitude] = useState(126.48911);
  const [latitude, setLatitude] = useState(33.4698142);
  const [district, setDistrict] = useState('제주특별자치도 제주시 연동');

  return (
    <UserLocationContextStore.Provider
      value={{ longitude, latitude, district, setLongitude, setLatitude, setDistrict }}
    >
      {children}
    </UserLocationContextStore.Provider>
  );
};

export default UserLocationContext;
