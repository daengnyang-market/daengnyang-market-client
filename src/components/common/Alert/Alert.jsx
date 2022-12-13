import React from 'react';
import styled from 'styled-components';

const Alert = ({ onClick }) => {
  return (
    <Section>
      <h2 className='sr-only'>상품 삭제 알림창</h2>

      <ContentsWrapper>
        <Title>상품을 삭제할까요?</Title>
        <ButtonWrapper>
          <button onClick={onClick}>취소</button>
          <button>삭제</button>
        </ButtonWrapper>
      </ContentsWrapper>
    </Section>
  );
};

export default Alert;

const Section = styled.section`
  width: 100%;
  height: 100%;
`;

const ContentsWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25.5rem;
  border-radius: 1rem;
  background-color: var(--main-bg-color);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 200;
`;

const Title = styled.strong`
  display: block;
  font-size: var(--fs-lg);
  font-weight: 500;
  text-align: center;
  padding: 2.2rem 2rem;
`;

const ButtonWrapper = styled.div`
  border-top: 1px solid var(--border-color);

  & button {
    padding: 1.4rem 5rem;
    font-size: var(--fs-md);
  }

  & button:last-child {
    color: var(--main-color);
    border-left: 1px solid var(--border-color);
  }
`;
