import React from 'react';
import styled from 'styled-components';
import DustBadge from './DustBadgeStyled';

const DetailWeatherInfo = ({ weatherInfo, dustInfo }) => {
  const getDustIndex = (dustType, dustInfo) => {
    if (dustType === 'pm10') {
      if (dustInfo <= 30) {
        return <DustBadge index='good'>좋음 ({dustInfo})</DustBadge>;
      }

      if (dustInfo <= 50) {
        return <DustBadge index='notBad'>보통 ({dustInfo})</DustBadge>;
      }

      if (dustInfo <= 100) {
        return <DustBadge index='bad'>나쁨 ({dustInfo})</DustBadge>;
      }

      return <DustBadge index='veryBad'>매우 나쁨 ({dustInfo})</DustBadge>;
    }

    if (dustType === 'pm2_5') {
      if (dustInfo <= 15) {
        return <DustBadge index='good'>좋음 ({dustInfo})</DustBadge>;
      }

      if (dustInfo <= 25) {
        return <DustBadge index='notBad'>보통 ({dustInfo})</DustBadge>;
      }

      if (dustInfo <= 50) {
        return <DustBadge index='bad'>나쁨 ({dustInfo})</DustBadge>;
      }

      return <DustBadge index='veryBad'>매우 나쁨 ({dustInfo})</DustBadge>;
    }
  };

  return (
    <DetailInfoWrapper>
      <WeatherList>
        <CurrentTempWrapper>
          <dt className='sr-only'>현재 기온</dt>
          <CurrentTemp>
            {weatherInfo.temp}
            <span className='sr-only'>도</span>
          </CurrentTemp>
        </CurrentTempWrapper>
        <HighLowTempWrapper>
          <dt className='sr-only'>최고/최저 기온</dt>
          <HightTemp aria-label='최고 기온'>
            {weatherInfo.tempMax}
            <span className='sr-only'>도</span>
          </HightTemp>
          <LowTemp aria-label='최저 기온'>
            {weatherInfo.tempMin}
            <span className='sr-only'>도</span>
          </LowTemp>
        </HighLowTempWrapper>
        <WindSpeedWrapper>
          <dt>풍속</dt>
          <dd>{weatherInfo.windSpeed} m/s</dd>
        </WindSpeedWrapper>
        <HumidityWrapper>
          <dt>습도</dt>
          <dd>{weatherInfo.humidity} %</dd>
        </HumidityWrapper>
        <FineDustWrapper>
          <dt>미세먼지</dt>
          {getDustIndex('pm10', dustInfo.pm10)}
        </FineDustWrapper>
        <UltraFineDustWrapper>
          <dt>초미세먼지</dt>
          {getDustIndex('pm2_5', dustInfo.pm2_5)}
        </UltraFineDustWrapper>
      </WeatherList>
    </DetailInfoWrapper>
  );
};

export default DetailWeatherInfo;

const DetailInfoWrapper = styled.div`
  padding: 4.5rem 3.5rem;
  border-top: 1px solid var(--border-color);
`;

const WeatherList = styled.dl`
  display: grid;
  grid-template-areas: 'CurrentTemp HighLowTemp' 'WindSpeed FindDust' 'Humidity UltraFindDust';
  grid-row-gap: 1.5rem;
`;

const CurrentTempWrapper = styled.div`
  grid-area: CurrentTemp;
`;

const CurrentTemp = styled.dd`
  font-size: 4.8rem;

  &::after {
    content: '°';
    position: relative;
    top: 0.3rem;
    left: 0.3rem;
  }
`;

const HighLowTempWrapper = styled.div`
  grid-area: HighLowTemp;
  display: flex;
  justify-content: flex-end;
  font-size: var(--fs-lg);
  text-align: right;

  & dd::after {
    content: '°';
  }
`;

const HightTemp = styled.dd`
  padding-right: 2rem;
  margin-right: 2rem;
  border-right: 2px solid var(--sub-text-color);

  &::before {
    display: block;
    content: 'max';
    color: var(--sub-text-color);
    margin-bottom: 1.4rem;
  }
`;

const LowTemp = styled.dd`
  &::before {
    display: block;
    content: 'min';
    color: var(--sub-text-color);
    margin-bottom: 1.4rem;
  }
`;

const WindSpeedWrapper = styled.div`
  grid-area: WindSpeed;
  display: flex;
  align-items: center;
  font-size: var(--fs-md);
  margin-top: 2rem;

  & dt::after {
    content: '';
    padding: 0 0.3rem;
  }

  & dd {
    background-color: #9d9d9d;
    color: var(--main-bg-color);
    border-radius: 3px;
    padding: 0.5rem;
  }
`;

const HumidityWrapper = styled.div`
  grid-area: Humidity;
  display: flex;
  align-items: center;
  font-size: var(--fs-md);

  & dt::after {
    content: '';
    padding: 0 0.3rem;
  }

  & dd {
    background-color: #9d9d9d;
    color: var(--main-bg-color);
    border-radius: 3px;
    padding: 0.5rem;
  }
`;

const FineDustWrapper = styled.div`
  grid-area: FindDust;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: var(--fs-md);
  margin-top: 2rem;

  & dt::after {
    content: '';
    padding: 0 0.3rem;
  }
`;

const UltraFineDustWrapper = styled.div`
  grid-area: UltraFindDust;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: var(--fs-md);

  & dt::after {
    content: '';
    padding: 0 0.3rem;
  }
`;
