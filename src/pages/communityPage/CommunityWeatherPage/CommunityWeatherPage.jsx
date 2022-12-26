import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserLocationContextStore } from '../../../context/UserLocationContext';
import useLocation from '../../../hooks/useLocation';
import WeatherDescription from '../../../utils/WeatherDescription';
import CommunityLayout from '../CommunityLayout';
import DetailWeatherInfo from './DetailWeatherInfo';
import SummaryWeatherInfo from './SummaryWeatherInfo';

const CommunityWeatherPage = () => {
  const { longitude, latitude, setDistrict } = useContext(UserLocationContextStore);

  const KAKAOMAP_API = process.env.REACT_APP_KAKAOMAP_API;
  const OPEN_WEATHER_MAP_API = process.env.REACT_APP_OPEN_WEATHER_MAP_API;

  const [dateInfo, setDateInfo] = useState({});
  const [weatherInfo, setWeatherInfo] = useState({});
  const [dustInfo, setDustInfo] = useState({});
  const [isLocationUpdate, setIsLocationUpdate] = useState(true);
  const [walkingScore, setWalkingScore] = useState(0);

  const checkUserLocation = useLocation({ isLocationUpdate, setIsLocationUpdate });

  useEffect(() => {
    const getDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      setDateInfo({ year, month, day });
    };

    getDate();
  }, []);

  useEffect(() => {
    if (!longitude || !latitude) {
      return;
    }

    const getFetch = async () => {
      const districtHeader = { headers: { Authorization: `KakaoAK ${KAKAOMAP_API}` } };

      await axios
        .all([
          axios.get(
            `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`,
            districtHeader,
          ),
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_MAP_API}&units=metric`,
          ),
          axios.get(
            `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_MAP_API}`,
          ),
        ])
        .then(
          axios.spread((districtRes, weatherRes, dustRes) => {
            updateDistrictInfo(districtRes);
            updateWeatherInfo(weatherRes);
            updateDustInfo(dustRes);
          }),
        );
    };

    const updateDistrictInfo = (res) => {
      setDistrict(res.data.documents[1].address_name);
    };

    const updateWeatherInfo = (res) => {
      const weatherData = res.data;

      setWeatherInfo({
        weather: WeatherDescription[weatherData.weather[0].id].title,
        weatherScore: WeatherDescription[weatherData.weather[0].id].score,
        temp: weatherData.main.temp.toFixed(1),
        tempMax: weatherData.main.temp_max.toFixed(1),
        tempMin: weatherData.main.temp_min.toFixed(1),
        windSpeed: weatherData.wind.speed.toFixed(1),
        humidity: weatherData.main.humidity,
      });
    };

    const updateDustInfo = (res) => {
      const dustData = res.data.list[0];

      setDustInfo({
        aqi: dustData.main.aqi,
        pm2_5: Math.round(dustData.components.pm2_5),
        pm10: Math.round(dustData.components.pm10),
      });
    };

    getFetch();
  }, [longitude, latitude]);

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
          weather={weatherInfo.weather}
          locations={{ isLocationUpdate, setIsLocationUpdate }}
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
