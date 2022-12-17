import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/common/Button/Button';
import Input from '../../components/common/Input/Input';
import JoinMembershipInput from './JoinMembershipInput';
const JoinMembershipPage = () => {
  // 유효성 검사에 따른, 페이지 이동을 설정하기위해서, Link 가 아닌 useNavigate 를 사용하였습니다.
  return (
    <Main>
      <Title>이메일로 회원가입</Title>
      <JoinMembershipInput />
      {/* disabled 상태를 관리하여, true 일 경우에는 버튼을 막고, false일 경우에는 활성화 한다. */}
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
