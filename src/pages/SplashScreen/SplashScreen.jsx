import React from 'react';
import styled from 'styled-components';

import { LOGO_IMAGE, MAIN_TITLE_IMAGE, SUB_TITLE_IMAGE } from '../../styles/CommonImages';

const SplashScreen = () => {
  return (
    <SplashScreenDiv>
      <SubTitleImg src={SUB_TITLE_IMAGE} alt='우리집 댕냥이를 위한 따뜻한 선물' />
      <MainLogoImg src={LOGO_IMAGE} alt='가져도댕냥 로고' />
      <MainTitleImg src={MAIN_TITLE_IMAGE} alt='가져도댕냥' />
    </SplashScreenDiv>
  );
};

export default SplashScreen;

const SplashScreenDiv = styled.div`
  margin: 50vh auto 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitleImg = styled.img`
  width: 280px;
`;

const MainLogoImg = styled.img`
  width: 160px;
  margin-top: 5.4rem;
  margin-bottom: 1.65rem;
`;

const MainTitleImg = styled.img`
  width: 215px;
`;
