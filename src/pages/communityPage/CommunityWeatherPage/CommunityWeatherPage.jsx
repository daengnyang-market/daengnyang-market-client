import React, { useState } from 'react';
import styled from 'styled-components';
import CommunityLayout from '../CommunityLayout';
import DetailWeatherInfo from './DetailWeatherInfo';
import SummaryWeatherInfo from './SummaryWeatherInfo';

const CommunityWeatherPage = () => {
  const [getLocation, setGetLocation] = useState(true);
  const [walkScore, setWalkScore] = useState(8);
  const walkTextList = ['산책하기 좋은 날', '짧은 산책을 추천해요', '이불 속이 안전해'];

  return (
    <CommunityLayout>
      <WeatherSection>
        {getLocation ? (
          <>
            <h2 className='sr-only'>실시간 날씨 정보</h2>
            <SummaryWeatherInfo walkScore={walkScore} walkTextList={walkTextList} />
            <DetailWeatherInfo />
          </>
        ) : (
          <></>
        )}
      </WeatherSection>
    </CommunityLayout>
  );
};

export default CommunityWeatherPage;

const WeatherSection = styled.section`
  border-top: 1px solid var(--border-color);
`;
