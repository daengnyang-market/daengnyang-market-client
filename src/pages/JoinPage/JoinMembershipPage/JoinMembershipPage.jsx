import React from 'react';
import styled from 'styled-components';
import JoinMembershipInput from './JoinMembershipInput';

const JoinMembershipPage = () => {
  return (
    <Main>
      <Title>이메일로 회원가입</Title>
      <JoinMembershipInput />
    </Main>
  );
};

export default JoinMembershipPage;

const Main = styled.main`
  padding-top: 5.4rem;
  padding-left: 3.4rem;
  padding-right: 3.4rem;
  align-items: center;
  > * {
    &:nth-child(1) {
      margin-bottom: 4rem;
    }
    &:nth-child(2) {
      margin-bottom: 1.6rem;
    }
    &:nth-child(3) {
      margin-bottom: 3rem;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
`;
