import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useInput from '../../hooks/useInput';
import Button from '../../components/common/Button/Button';
import EmailLoginInput from './EmailLoginInput';
import styled from 'styled-components';
import { AuthContext } from '../../context/AuthContext';

const EmailLoginPage = () => {
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);
  const [loginFail, setLoginFail] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const inputList = [
    {
      id: 0,
      label: '이메일',
      type: 'email',
      inputId: 'emailInput',
      name: 'email',
      ref: emailInputRef,
    },
    {
      id: 1,
      label: '비밀번호',
      type: 'password',
      inputId: 'passwordInput',
      name: 'password',
      ref: passwordInputRef,
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

  const { values, onBlurHandler, onFocusHandler, onChangeHandler, disabledSubmitButton } = useInput({
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
          email: values['email'],
          password: values['password'],
        },
      },
    };

    axios(option)
      .then((res) => {
        if (res.data.status === 422) {
          setLoginFail(true);
          return;
        }

        saveToken(res);
        goHome();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const saveToken = (res) => {
    const token = res.data.user.token;

    if (token) {
      localStorage.setItem('token', token);
      setToken(token);
    }
  };

  const goHome = () => {
    navigate('/home');
  };

  return (
    <Main>
      <Title>로그인</Title>

      <form onSubmit={onSubmitHandler}>
        <EmailLoginInput
          inputList={inputList}
          values={values}
          onFocusHandler={onFocusHandler}
          onBlurHandler={onBlurHandler}
          onChangeHandler={onChangeHandler}
          alertMessage={alertMessage}
        />
        {loginFail ? <LoginFailAlert>* 아이디, 비밀번호가 일치하지 않습니다.</LoginFailAlert> : <></>}

        <Button size='L' disabled={disabledSubmitButton}>
          로그인
        </Button>
      </form>

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
