import axios from 'axios';
import { useContext, useEffect } from 'react';
import { UserLocationContextStore } from '../context/UserLocationContext';

const useCurrentLocation = ({ isLocationUpdate, setIsLocationUpdate }) => {
  const { setLongitude, setLatitude, setDistrict, longitude, latitude } = useContext(UserLocationContextStore);
  const KAKAOMAP_API = process.env.REACT_APP_KAKAOMAP_API;

  const handleSuccess = ({ coords }) => {
    const { longitude, latitude } = coords;

    setLongitude(longitude);
    setLatitude(latitude);

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

  const getDistrict = async () => {
    const header = { headers: { Authorization: `KakaoAK ${KAKAOMAP_API}` } };

    await axios
      .get(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`, header)
      .then((res) => {
        setDistrict(res.data.documents[1].address_name);
      });
  };

  useEffect(() => {
    if (isLocationUpdate) {
      getLocation();
    }
  }, [isLocationUpdate]);

  useEffect(() => {
    getDistrict();
  }, [longitude, latitude]);
};

export default useCurrentLocation;
