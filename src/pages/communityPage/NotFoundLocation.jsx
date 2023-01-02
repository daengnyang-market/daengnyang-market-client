import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button/Button';
import { UserLocationContextStore } from '../../context/UserLocationContext';
import { EMPTY_POST_IMAGE } from '../../styles/CommonImages';

const NotFoundLocation = () => {
  const { errorCode } = useContext(UserLocationContextStore);

  return (
    <NotFoundLocationWrapper>
      <NotFoundLocationImage src={EMPTY_POST_IMAGE} alt='' />
      <NotFoundLocationDescription>
        위치를 찾을 수 없어요.
        <br />
        {errorCode === 1 ? (
          <>
            <Emphasis>위치 정보 접근 허용</Emphasis> 후 페이지를 새로고침 해주세요.
            <Button size='M' onClickHandler={() => window.location.reload()}>
              새로고침
            </Button>
          </>
        ) : (
          <>
            <Emphasis>다른 브라우저</Emphasis>를 이용해주세요.
          </>
        )}
      </NotFoundLocationDescription>
    </NotFoundLocationWrapper>
  );
};

export default NotFoundLocation;

const NotFoundLocationWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 35rem;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const NotFoundLocationImage = styled.img`
  width: 160px;
  margin: 0 auto 2rem;
`;

const NotFoundLocationDescription = styled.p`
  font-size: var(--fs-md);
  line-height: calc(24 / 14);
  color: var(--sub-text-color);

  & > button {
    margin-top: 3rem;
  }
`;

const Emphasis = styled.strong`
  font-weight: 700;
`;
