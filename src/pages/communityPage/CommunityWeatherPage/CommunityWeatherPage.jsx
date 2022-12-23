import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import WeatherDescription from '../../../utils/WeatherDescription';
import CommunityLayout from '../CommunityLayout';
import DetailWeatherInfo from './DetailWeatherInfo';
import SummaryWeatherInfo from './SummaryWeatherInfo';

const CommunityWeatherPage = () => {
  const [location, setLocation] = useState({ longitude: 126.48911, latitude: 33.4698142 });
  const [dateInfo, setDateInfo] = useState({});
  const [districtInfo, setDistrictInfo] = useState('');
  const [weatherInfo, setWeatherInfo] = useState({});
  const [dustInfo, setDustInfo] = useState({});
  const [isLocationUpdate, setIsLocationUpdate] = useState(true);
  const [walkingScore, setWalkingScore] = useState(0);

  const KAKAOMAP_API = process.env.REACT_APP_KAKAOMAP_API;
  const OPEN_WEATHER_MAP_API = process.env.REACT_APP_OPEN_WEATHER_MAP_API;

  const handleSuccess = ({ coords }) => {
    const { longitude, latitude } = coords;

    setLocation({
      longitude,
      latitude,
    });

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
  }, []);

  useEffect(() => {
    const getDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      setDateInfo({ year, month, day });
    };

    const getUserDistrictData = async () => {
      const header = { headers: { Authorization: `KakaoAK ${KAKAOMAP_API}` } };

      await axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${location.longitude}&y=${location.latitude}`,
          header,
        )
        .then((res) => {
          setDistrictInfo(res.data.documents[1].address_name);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // TODO: 날씨 정보 받아오기
    const getWeahterData = async () => {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${OPEN_WEATHER_MAP_API}&units=metric`,
        )
        .then((res) => {
          const resData = res.data;

          getWeatherInfo(resData);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getWeatherInfo = (resData) => {
      setWeatherInfo({
        weather: WeatherDescription[resData.weather[0].id].title,
        weatherScore: WeatherDescription[resData.weather[0].id].score,
        temp: resData.main.temp.toFixed(1),
        tempMax: resData.main.temp_max.toFixed(1),
        tempMin: resData.main.temp_min.toFixed(1),
        windSpeed: resData.wind.speed.toFixed(1),
        humidity: resData.main.humidity,
      });
    };

    const getDustData = async () => {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${location.latitude}&lon=${location.longitude}&appid=${OPEN_WEATHER_MAP_API}`,
        )
        .then((res) => {
          const resData = res.data.list[0];

          setDustInfo({
            aqi: resData.main.aqi,
            pm2_5: Math.round(resData.components.pm2_5),
            pm10: Math.round(resData.components.pm10),
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if (Object.keys(location).length > 0) {
      getDate();
      getUserDistrictData();
      getWeahterData();
      getDustData();
    }
  }, [location]);

  useEffect(() => {
    const getWalkingScoreInfo = () => {
      const calculateTempScore = () => {
        if (weatherInfo.temp <= -9 || weatherInfo.temp >= 35) {
          return 10;
        }

        if (weatherInfo.temp <= -2 || weatherInfo.temp >= 27) {
          return 2;
        }

        if (weatherInfo.temp <= 6 || weatherInfo.temp >= 23) {
          return 1;
        }

        return 0;
      };

      const calculateWeatherScore = () => {
        return weatherInfo.weatherScore;
      };

      const calculateAirScore = () => {
        if (dustInfo.aqa === 5) {
          return 10;
        }

        if (dustInfo.aqi === 4) {
          return 2;
        }

        if (dustInfo.aqi >= 2) {
          return 1;
        }

        return 0;
      };

      let sumScore = 0;

      sumScore += calculateTempScore();
      sumScore += calculateWeatherScore();
      sumScore += calculateAirScore();

      setWalkingScore(sumScore);
    };

    if (Object.keys(weatherInfo).length > 0 && Object.keys(dustInfo).length) {
      getWalkingScoreInfo();
    }
  }, [weatherInfo, dustInfo]);

  return (
    <CommunityLayout currenttMenuId={1}>
      <WeatherSection>
        <h2 className='sr-only'>실시간 날씨 정보</h2>
        <SummaryWeatherInfo
          walkingScore={walkingScore}
          dateInfo={dateInfo}
          districtInfo={districtInfo}
          weather={weatherInfo.weather}
          locations={{ getLocation, isLocationUpdate, setIsLocationUpdate }}
        />
        <DetailWeatherInfo weatherInfo={weatherInfo} dustInfo={dustInfo} />
      </WeatherSection>
    </CommunityLayout>
  );
};

export default CommunityWeatherPage;

const WeatherSection = styled.section`
  position: relative;
  border-top: 1px solid var(--border-color);
`;
