import React, { useState } from 'react';
import styled from 'styled-components';
import CommunityLayout from '../CommunityLayout';
import NotFoundLocation from '../NotFoundLocation';
import DetailWeatherInfo from './DetailWeatherInfo';
import SummaryWeatherInfo from './SummaryWeatherInfo';

const CommunityWeatherPage = () => {
  const [getLocation, setGetLocation] = useState(true);
  const [walkLevel, setWalkLevel] = useState(10);
  const walkTextList = [
    { id: 0, text: '산책하기 좋은 날' },
    { id: 1, text: '옷 입고 나가자' },
    { id: 2, text: '공기가 안 좋아' },
  ];

  return (
    <CommunityLayout>
      <WeatherSection>
        {getLocation ? (
          <>
            <h2 className='sr-only'>실시간 날씨 정보</h2>
            <SummaryWeatherInfo walkLevel={walkLevel} walkTextList={walkTextList} />
            <DetailWeatherInfo />
          </>
        ) : (
          <NotFoundLocation />
        )}
      </WeatherSection>
    </CommunityLayout>
  );
};

export default CommunityWeatherPage;

const WeatherSection = styled.section`
  border-top: 1px solid var(--border-color);
`;
