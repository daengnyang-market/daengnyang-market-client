import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { fadeOut } from '../../components/common/Animation/Animation';

import { LOGO_IMAGE, MAIN_TITLE_IMAGE, SUB_TITLE_IMAGE } from '../../styles/CommonImages';
import LoginMainPage from '../LoginMainPage/LoginMainPage';

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState();
  const tempToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWZiYWY0MTdhZTY2NjU4MWM3MzAyMSIsImV4cCI6MTY3NjU5NzIyMSwiaWF0IjoxNjcxNDEzMjIxfQ.H7gXKkMJDOyb0qO3_Zj-aDyFfzIWmVQdeCsyvQ9FEcY`;

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const goHome = () => {
    window.location.href = '/home';
  };

  const handleCheckToken = () => {
    // 토큰 검증
    const option = {
      url: 'https://mandarin.api.weniv.co.kr/user/checktoken',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tempToken}`,
        'Content-type': 'application/json',
      },
    };
    axios(option)
      .then((res) => {
        console.log(res);
        setIsValid(res.data.isValid);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => handleCheckToken(), []);

  if (isValid) {
    goHome();
  }

  return (
    <>
      {isLoading ? (
        <SplashScreenDiv>
          <SubTitleImg src={SUB_TITLE_IMAGE} alt='우리집 댕냥이를 위한 따뜻한 선물' />
          <MainLogoImg src={LOGO_IMAGE} alt='가져도댕냥 로고' />
          <MainTitleImg src={MAIN_TITLE_IMAGE} alt='가져도댕냥' />
        </SplashScreenDiv>
      ) : (
        <LoginMainPage />
      )}
    </>
  );
};

export default SplashScreen;

const SplashScreenDiv = styled.div`
  margin: 50vh auto 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeOut} 1500ms linear;
  animation-fill-mode: forwards;
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
