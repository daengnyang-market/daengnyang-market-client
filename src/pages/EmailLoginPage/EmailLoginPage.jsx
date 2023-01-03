import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useInput from '../../hooks/useInput';
import Button from '../../components/common/Button/Button';
import EmailLoginInput from './EmailLoginInput';
import styled from 'styled-components';
import { AuthContextStore } from '../../context/AuthContext';

const EmailLoginPage = () => {
  const navigate = useNavigate();
  const { setUserToken, setUserAccountname } = useContext(AuthContextStore);

  const [loginFail, setLoginFail] = useState(false);

  const inputList = [
    {
      id: 0,
      label: '이메일',
      type: 'email',
      inputId: 'emailInput',
      name: 'email',
    },
    {
      id: 1,
      label: '비밀번호',
      type: 'password',
      inputId: 'passwordInput',
      name: 'password',
    },
  ];

  const [alertMessage, setAlertMessage] = useState({
    emailAlertMessage: '',
    passwordAlertMessage: '',
  });

  const [inputsValidState, setInputsValidState] = useState({ email: false, password: false });

  const ChangeLoginFailStateToFail = () => {
    setLoginFail(false);
  };

  const { ...useInputData } = useInput({
    initailValues: { email: '', password: '' },
    inputsValidState,
    setInputsValidState,
    alertMessage,
    setAlertMessage,
    ChangeLoginFailStateToFail,
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const option = {
      url: 'https://mandarin.api.weniv.co.kr/user/login',
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      data: {
        user: {
          email: useInputData.values['email'],
          password: useInputData.values['password'],
        },
      },
    };

    axios(option)
      .then((res) => {
        if (res.data.status === 422) {
          setLoginFail(true);
          return;
        }

        saveUserInfo(res);
        goHome();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const saveUserInfo = (res) => {
    const token = res.data.user.token;
    const accountname = res.data.user.accountname;

    localStorage.setItem('token', token);
    localStorage.setItem('accountname', accountname);

    setUserToken(token);
    setUserAccountname(accountname);
  };

  const goHome = () => {
    navigate('/home');
  };

  return (
    <Main>
      <Title>로그인</Title>

      <form onSubmit={onSubmitHandler}>
        <EmailLoginInput inputList={inputList} useInputData={useInputData} alertMessage={alertMessage} />
        {loginFail ? <LoginFailAlert>* 아이디, 비밀번호가 일치하지 않습니다.</LoginFailAlert> : <></>}

        <Button size='L' disabled={useInputData.disabledSubmitButton}>
          로그인
        </Button>
      </form>

      <JoinLink to='/join'>이메일로 회원가입</JoinLink>
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

const JoinLink = styled(Link)`
  display: block;
  margin-top: 2rem;
  color: var(--sub-text-color);
  font-size: var(--fs-sm);
  text-align: center;
`;

const LoginFailAlert = styled.strong`
  position: absolute;
  margin-top: -30px;
  font-size: var(--fs-sm);
  font-weight: 500;
  color: var(--alert-color);
`;
