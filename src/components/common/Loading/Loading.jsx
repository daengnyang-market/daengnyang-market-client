import React from 'react';
import styled from 'styled-components';
import { spin } from '../Animation/Animation';
import { LOADING_ICON } from '../../../styles/CommonIcons';

const Loading = () => {
  return (
    <LoadingWrapper>
      <img src={LOADING_ICON} alt='로딩 중입니다. 잠시만 기다려주세요.' />
    </LoadingWrapper>
  );
};

export default Loading;

const LoadingWrapper = styled.div`
  width: 50px;
  height: 50px;
  animation: ${spin} 2000ms linear infinite;
`;
