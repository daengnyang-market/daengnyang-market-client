import React from 'react';
import styled from 'styled-components';
import { WALK_ABLE_IMAGE, WALK_DISABLE_IMAGE } from '../../../styles/CommonImages';

const SummaryWeatherInfo = ({ walkLevel, walkTextList }) => {
  return (
    <SummaryInfoWrapper>
      <SummaryInfo>
        <Date dateTime='2022-11-06'>2022년 11월 6일</Date>
        <Location>제주도 제주시 무슨읍</Location>
        <CurrentWeather>구름 많음</CurrentWeather>
      </SummaryInfo>
      <div>
        <WalkImage src={walkLevel <= 50 ? WALK_ABLE_IMAGE : WALK_DISABLE_IMAGE} alt='' />
        <WalkText>
          <WalkLevel walkLevel={walkLevel}>
            산책 난이도 : <em>{walkLevel}점</em>
          </WalkLevel>
          <WalkDescription>{walkTextList[2].text}</WalkDescription>
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

const Location = styled.strong`
  display: block;
  margin-bottom: 1.3rem;
  font-size: 2.2rem;
  font-weight: 500;
`;

const CurrentWeather = styled.p`
  font-size: 2rem;
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
    color: ${(props) => (props.walkLevel >= 60 ? 'var(--alert-color)' : 'var(--login-bg-color)')};
  }
`;

const WalkDescription = styled.p`
  font-size: var(--fs-xl);
`;
