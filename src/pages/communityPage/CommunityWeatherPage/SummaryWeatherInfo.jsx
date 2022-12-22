import React from 'react';
import styled from 'styled-components';
import { WALK_ABLE_IMAGE, WALK_DISABLE_IMAGE } from '../../../styles/CommonImages';

const SummaryWeatherInfo = ({ walkScore, walkTextList, dateInfo, districtInfo, weather }) => {
  return (
    <SummaryInfoWrapper>
      <SummaryInfo>
        <Date dateTime='2022-11-06'>
          {dateInfo.year}년 {dateInfo.month}월 {dateInfo.day}일
        </Date>
        <District>{districtInfo}</District>
        <CurrentWeather>{weather}</CurrentWeather>
      </SummaryInfo>
      <div>
        <WalkImage src={walkScore >= 8 ? WALK_DISABLE_IMAGE : WALK_ABLE_IMAGE} alt='' />
        <WalkText>
          <WalkLevel walkScore={walkScore}>
            산책 난이도 : <em>{walkScore >= 8 ? '어려움' : walkScore >= 5 ? '보통' : '쉬움'}</em>
          </WalkLevel>
          <WalkDescription>
            {walkScore >= 8 ? walkTextList[2] : walkScore >= 5 ? walkTextList[1] : walkTextList[0]}
          </WalkDescription>
        </WalkText>
      </div>
    </SummaryInfoWrapper>
  );
};

export default SummaryWeatherInfo;

const SummaryInfoWrapper = styled.div`
  padding: 5.3rem 3.5rem;
  text-align: center;
`;

const SummaryInfo = styled.div`
  margin-bottom: 5rem;
`;

const Date = styled.time`
  display: block;
  margin-bottom: 3rem;
  font-size: var(--fs-lg);
  color: var(--sub-text-color);
`;

const District = styled.strong`
  display: block;
  margin-bottom: 1.5rem;
  font-size: 2.2rem;
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
    color: ${(props) => (props.walkScore >= 8 ? '#eb5757' : props.walkScore >= 5 ? '#766eeb' : '#0280ff')};
  }
`;

const WalkDescription = styled.p`
  font-size: var(--fs-xl);
`;
