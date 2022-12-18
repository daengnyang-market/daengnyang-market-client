import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import Button from '../../components/common/Button/Button';
import EmailLoginInput from './EmailLoginInput';

const EmailLoginPage = () => {
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

  const { values, onBlurHandler, onFocusHandler, onChangeHandler, disabledSubmitButton } = useInput({
    initailValues: { email: '', password: '' },
    inputsValidState,
    setInputsValidState,
    alertMessage,
    setAlertMessage,
  });

  return (
    <Main>
      <Title>로그인</Title>

      <form>
        <EmailLoginInput
          inputList={inputList}
          values={values}
          onFocusHandler={onFocusHandler}
          onBlurHandler={onBlurHandler}
          onChangeHandler={onChangeHandler}
          inputsValidState={inputsValidState}
          alertMessage={alertMessage}
        />

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
