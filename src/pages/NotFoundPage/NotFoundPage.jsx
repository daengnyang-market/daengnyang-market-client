import React from 'react';
import { ERROR_IMAGE } from '../../styles/CommonImages';
import Button from '../../components/common/Button/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <ErrorPage>
      <h1 className='sr-only'>404 페이지 에러 </h1>
      <img src={ERROR_IMAGE} alt='에러 이미지' />
      <span>페이지를 찾을 수 없어요</span>

      <Button size='M' onClickHandler={handleGoBack}>
        이전 페이지
      </Button>
    </ErrorPage>
  );
};

export default NotFoundPage;

const ErrorPage = styled.div`
  margin: 50vh auto 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 160px;
    height: 160px;
    margin-right: 5em;
  }

  & span {
    margin: 2em 0;
    color: var(--sub-text-color);
    font-size: 1.4em;
  }
  & button {
    padding: 1.3em 0;
  }
`;
