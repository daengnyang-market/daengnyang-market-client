import axios from 'axios';
import { useContext, useEffect } from 'react';
import { UserLocationContextStore } from '../context/UserLocationContext';

const useCurrentLocation = ({ isLocationUpdate, setIsLocationUpdate }) => {
  const { setLongitude, setLatitude, setDistrict, setError, setErrorCode, longitude, latitude, error } =
    useContext(UserLocationContextStore);
  const KAKAOMAP_API = process.env.REACT_APP_KAKAOMAP_API;

  const handleSuccess = ({ coords }) => {
    const { longitude, latitude } = coords;

    setLongitude(longitude);
    setLatitude(latitude);
    setError(false);
    setErrorCode(null);

    setTimeout(() => {
      setIsLocationUpdate(false);
    }, 300);
  };

  const handleError = (error) => {
    setLongitude(null);
    setLatitude(null);
    setDistrict(null);
    setError(true);
    setErrorCode(error.code);
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      throw new Error('위치 정보가 지원되지 않습니다.');
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
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
    if (!isLocationUpdate) {
      return;
    }

    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLocationUpdate]);

  useEffect(() => {
    if (error) {
      return;
    }

    getDistrict();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [longitude, latitude]);
};

export default useCurrentLocation;
