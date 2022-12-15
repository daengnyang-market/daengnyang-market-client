import React from 'react';
import styled from 'styled-components';

const DetailWeatherInfo = () => {
  return (
    <DetailInfoWrapper>
      <WeatherList>
        <CurrentTempWrapper>
          <dt className='sr-only'>현재 기온</dt>
          <CurrentTemp>
            -2<span className='sr-only'>도</span>
          </CurrentTemp>
        </CurrentTempWrapper>
        <HighLowTempWrapper>
          <dt className='sr-only'>최고/최저 기온</dt>
          <HightTemp aria-label='최고 기온'>
            6<span className='sr-only'>도</span>
          </HightTemp>
          <LowTemp aria-label='최저 기온'>
            -4<span className='sr-only'>도</span>
          </LowTemp>
        </HighLowTempWrapper>
        <FineDustWrapper>
          <dt>미세먼지</dt>
          <dd>좋음</dd>
        </FineDustWrapper>
        <UltraFineDustWrapper>
          <dt>초미세먼지</dt>
          <dd>좋음</dd>
        </UltraFineDustWrapper>
      </WeatherList>
    </DetailInfoWrapper>
  );
};

export default DetailWeatherInfo;

const DetailInfoWrapper = styled.div`
  padding: 5.3rem 3.5rem;
  border-top: 1px solid var(--border-color);
`;

const WeatherList = styled.dl`
  display: grid;
  grid-template-areas: 'currentTemp HighLowTemp' 'FindDust UltraFindDust';
  grid-row-gap: 3rem;
`;

const CurrentTempWrapper = styled.div`
  grid-area: currentTemp;
`;

const CurrentTemp = styled.dd`
  font-size: 4.8rem;

  &::after {
    content: '°';
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

const FineDustWrapper = styled.div`
  grid-area: FindDust;
  display: flex;
  font-size: var(--fs-md);

  & dt::after {
    content: ':';
    padding: 0 0.3rem;
  }
`;

const UltraFineDustWrapper = styled.div`
  grid-area: UltraFindDust;
  display: flex;
  justify-content: flex-end;
  font-size: var(--fs-md);

  & dt::after {
    content: ':';
    padding: 0 0.3rem;
  }
`;
