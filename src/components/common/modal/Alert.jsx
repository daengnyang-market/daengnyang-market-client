import React from 'react';
import styled from 'styled-components';

const Alert = ({ summary, title, trigger, closeAlert = '', tiggerFunc }) => {
  return (
    <Section>
      <h2 className='sr-only'>{summary}</h2>

      <ContentsWrapper>
        <Title>{title}</Title>
        <ButtonWrapper>
          {closeAlert ? <button onClick={closeAlert}>취소</button> : <></>}
          <button onClick={tiggerFunc}>{trigger}</button>
        </ButtonWrapper>
      </ContentsWrapper>
    </Section>
  );
};

export default Alert;

const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9900;
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
`;

const Title = styled.strong`
  display: block;
  font-size: var(--fs-lg);
  font-weight: 500;
  text-align: center;
  padding: 2.2rem 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  border-top: 1px solid var(--border-color);

  & button {
    width: 100%;
    padding: 1.4rem 0;
    font-size: var(--fs-md);
  }

  & button:last-child {
    color: var(--main-color);
    border-left: 1px solid var(--border-color);
  }
`;
