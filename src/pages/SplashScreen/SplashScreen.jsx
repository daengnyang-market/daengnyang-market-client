import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { fadeOut } from '../../components/common/Animation/Animation';
import { AuthContextStore } from '../../context/AuthContext';

import { LOGO_IMAGE, MAIN_TITLE_IMAGE, SUB_TITLE_IMAGE } from '../../styles/CommonImages';
import LoginMainPage from '../LoginPage/LoginMainPage/LoginMainPage';

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState();

  const { token } = useContext(AuthContextStore);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      handleCheckToken();

      if (isValid) {
        goHome();
        return;
      }
    }

    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValid]);

  const goHome = () => {
    navigate('/home');
  };
  const handleCheckToken = () => {
    const option = {
      url: 'https://mandarin.api.weniv.co.kr/user/checktoken',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    };
    axios(option)
      .then((res) => {
        setIsValid(res.data.isValid);
      })
      .catch((err) => console.error(err));
  };

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
