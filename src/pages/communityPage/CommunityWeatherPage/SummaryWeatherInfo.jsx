import React from 'react';
import styled, { css } from 'styled-components';
import { WALKING_EASY_IMAGE, WALKING_NORMAL_IMAGE, WALKING_HARD_IMAGE } from '../../../styles/CommonImages';
import { UPDATE_ICON } from '../../../styles/CommonIcons';
import { spin } from '../../../components/common/Animation/Animation';

const SummaryWeatherInfo = ({ walkingScore, dateInfo, districtInfo, weather, locations }) => {
  const updateLocation = () => {
    locations.setIsLocationUpdate(true);
    locations.getLocation();
  };

  return (
    <SummaryInfoWrapper>
      <SummaryInfo>
        <Date dateTime='2022-11-06'>
          {dateInfo.year}년 {dateInfo.month}월 {dateInfo.day}일
        </Date>
        <DistrictWrapper>
          <LocationUpdateButton onClick={updateLocation} isUpdate={locations.isLocationUpdate}>
            <span className='sr-only'>현재 위치 갱신하기</span>
          </LocationUpdateButton>
          <District>{districtInfo}</District>
        </DistrictWrapper>
        <CurrentWeather>{weather}</CurrentWeather>
      </SummaryInfo>
      <div>
        <WalkImage
          src={walkingScore >= 5 ? WALKING_HARD_IMAGE : walkingScore >= 2 ? WALKING_NORMAL_IMAGE : WALKING_EASY_IMAGE}
          alt=''
        />
        <WalkText>
          <WalkLevel walkingScore={walkingScore}>
            산책 난이도 : <em>{walkingScore >= 5 ? '어려움' : walkingScore >= 2 ? '보통' : '쉬움'}</em>
          </WalkLevel>
          <WalkDescription>
            {walkingScore >= 5 ? '이불 밖은 위험하댕' : walkingScore >= 2 ? '산책 가도 괜찮댕' : '빨리 나가면 안댕?'}
          </WalkDescription>
        </WalkText>
      </div>
    </SummaryInfoWrapper>
  );
};

export default SummaryWeatherInfo;

const SummaryInfoWrapper = styled.div`
  padding: 4.5rem 3.5rem;
  text-align: center;
`;

const SummaryInfo = styled.div`
  margin-bottom: 3.5rem;
`;

const Date = styled.time`
  display: block;
  margin-bottom: 3rem;
  font-size: var(--fs-lg);
  color: var(--sub-text-color);
`;

const DistrictWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1.8rem;
`;

const LocationUpdateButton = styled.button`
  min-width: 1.8rem;
  min-height: 1.8rem;
  margin-right: 0.7rem;
  background: no-repeat center/contain url(${UPDATE_ICON});
  animation: ${(props) =>
    props.isUpdate &&
    css`
      ${spin} 2000ms linear infinite
    `};
`;

const District = styled.strong`
  display: block;
  font-size: 2rem;
  font-weight: 500;
`;

const CurrentWeather = styled.p`
  font-size: var(--fs-xl);
  color: #3f3f3f;
`;

const WalkImage = styled.img`
  width: 165px;
  height: auto;
  margin: 0 auto 2rem;
`;

const WalkText = styled.div`
  padding: 2.2rem 1.2rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const WalkLevel = styled.strong`
  display: block;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 500;

  & em {
    color: ${(props) => (props.walkingScore >= 5 ? '#eb5757' : props.walkingScore >= 2 ? '#54B435' : '#0280ff')};
  }
`;

const WalkDescription = styled.p`
  font-size: var(--fs-xl);
`;
