import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../components/common/Input/Input';
import Button from '../../components/common/Button/Button';

const EmailLoginPage = () => {
  return (
    <Main>
      <Title>로그인</Title>

      <LoginInputWrapper>
        <Input labelText='이메일' inputType='email' id='inputEmail' placeholder='이메일을 입력해주세요.' />
        <Input labelText='비밀번호' inputType='password' id='inputPassword' placeholder='비밀번호를 입력해주세요.' />
      </LoginInputWrapper>

      <Button size='L'>로그인</Button>

      <JoinLink to='#'>이메일로 회원가입</JoinLink>
    </Main>
  );
};

export default EmailLoginPage;

const Main = styled.main`
  padding: 3rem 3.4rem 0;
`;

const Title = styled.h1`
  margin-bottom: 4rem;
  font-size: 2.4rem;
  font-weight: 500;
  text-align: center;
`;

const LoginInputWrapper = styled.div`
  margin-bottom: 3rem;

  & > div:not(:last-of-type) {
    margin-bottom: 1.6rem;
  }
`;

const JoinLink = styled(Link)`
  display: block;
  margin-top: 2rem;
  color: var(--sub-text-color);
  font-size: var(--fs-sm);
  text-align: center;
`;
