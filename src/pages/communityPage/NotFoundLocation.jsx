import React from 'react';
import styled from 'styled-components';
import { EMPTY_POST_IMAGE } from '../../styles/CommonImages';

const NotFoundLocation = () => {
  return (
    <NotFoundLocationWrapper>
      <NotFoundLocationImage src={EMPTY_POST_IMAGE} alt='' />
      <NotFoundLocationText>
        위치를 찾을 수 없어요.
        <br />
        위치 정보 접근을 허용해주세요.
      </NotFoundLocationText>
    </NotFoundLocationWrapper>
  );
};

export default NotFoundLocation;

const NotFoundLocationWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const NotFoundLocationImage = styled.img`
  width: 160px;
  margin: 0 auto 2rem;
`;

const NotFoundLocationText = styled.p`
  font-size: var(--fs-md);
  line-height: calc(24 / 14);
  color: var(--sub-text-color);
`;
