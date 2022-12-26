import { useContext, useEffect } from 'react';
import { UserLocationContextStore } from '../context/UserLocationContext';

const useLocation = ({ isLocationUpdate, setIsLocationUpdate }) => {
  const { setLongitude, setLatitude } = useContext(UserLocationContextStore);

  const handleSuccess = ({ coords }) => {
    const { longitude, latitude } = coords;

    setLongitude(longitude);
    setLatitude(latitude);

    console.log(longitude, latitude);

    setTimeout(() => {
      setIsLocationUpdate(false);
    }, 300);
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      throw new Error('위치 정보가 지원되지 않습니다.');
    }

    navigator.geolocation.getCurrentPosition(handleSuccess);
  };

  useEffect(() => {
    getLocation();
  }, [isLocationUpdate]);
};

export default useLocation;
