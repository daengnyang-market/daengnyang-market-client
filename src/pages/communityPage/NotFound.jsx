import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/common/Button/Button';
import { UserLocationContextStore } from '../../context/UserLocationContext';
import { EMPTY_POST_IMAGE } from '../../styles/CommonImages';

// [notFoundType]
// 0 - 위치 오류
// 1 - URL 오류
const NotFound = ({ notFoundType }) => {
  const { errorCode } = useContext(UserLocationContextStore);
  const navigate = useNavigate();

  return (
    <NotFoundWrapper>
      <NotFoundImage src={EMPTY_POST_IMAGE} alt='' />
      <NotFoundDescription>
        {notFoundType === 0 ? (
          <>
            위치를 찾을 수 없어요.
            <br />
            {errorCode === 1 ? (
              <>
                <Emphasis>위치 정보 접근 허용</Emphasis> 후 페이지를 새로고침 해주세요.
                <Button size='L' onClickHandler={() => window.location.reload()}>
                  새로고침
                </Button>
              </>
            ) : (
              <>
                <Emphasis>다른 브라우저</Emphasis>를 이용해주세요.
              </>
            )}
          </>
        ) : (
          <>
            페이지 출력에 실패했어요.
            <Button size='L' onClickHandler={() => navigate('/community/hospital')}>
              동물병원 목록 페이지로 이동
            </Button>
          </>
        )}
      </NotFoundDescription>
    </NotFoundWrapper>
  );
};

export default NotFound;

const NotFoundWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 35rem;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const NotFoundImage = styled.img`
  width: 160px;
  margin: 0 auto 2rem;
`;

const NotFoundDescription = styled.p`
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
