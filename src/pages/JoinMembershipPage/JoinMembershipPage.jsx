import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/common/Button/Button';
import Input from '../../components/common/Input/Input';
const JoinMembershipPage = () => {
  // 유효성 검사에 따른, 페이지 이동을 설정하기위해서, Link 가 아닌 useNavigate 를 사용하였습니다.
  const navigate = useNavigate();

  const goToProfilePage = () => {
    navigate('/');
  };

  return (
    <Main>
      <Title>이메일로 회원가입</Title>
      <Input labelText='이메일' placeholder='이메일 주소를 입력해 주세요.'></Input>
      <Input labelText='비밀번호' placeholder='비밀번호를 설정해 주세요.'></Input>
      {/* disabled 상태를 관리하여, true 일 경우에는 버튼을 막고, false일 경우에는 활성화 한다. */}
      <Button disabled={true} size='L' onClick={goToProfilePage}>
        다음
      </Button>
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
