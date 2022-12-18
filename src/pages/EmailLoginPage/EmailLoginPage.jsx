import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import Button from '../../components/common/Button/Button';

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
        <LoginInputWrapper>
          {inputList.map(({ id, label, type, inputId, name, ref }) => (
            <LoginInput key={id}>
              <LoginInputLabel htmlFor={inputId}>{label}</LoginInputLabel>
              <LoginInputText
                type={type}
                id={inputId}
                name={name}
                ref={ref}
                value={values[name]}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                onChange={onChangeHandler}
                autoComplete='off'
                spellCheck='false'
              />
              {name === 'email' ? (
                inputsValidState.email ? (
                  <></>
                ) : (
                  <LoginInputAlert>{alertMessage.emailAlertMessage}</LoginInputAlert>
                )
              ) : name === 'password' ? (
                inputsValidState.password ? (
                  <></>
                ) : (
                  <LoginInputAlert>{alertMessage.passwordAlertMessage}</LoginInputAlert>
                )
              ) : (
                <></>
              )}
            </LoginInput>
          ))}
        </LoginInputWrapper>

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

const LoginInputWrapper = styled.div`
  margin-bottom: 3rem;

  & > div:not(:last-of-type) {
    margin-bottom: 1.6rem;
  }
`;

const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const JoinLink = styled(Link)`
  display: block;
  margin-top: 2rem;
  color: var(--sub-text-color);
  font-size: var(--fs-sm);
  text-align: center;
`;

const LoginInputLabel = styled.label`
  margin-bottom: 1rem;
  font-size: var(--fs-sm);
  font-weight: 500;
  color: var(--sub-text-color);
`;

const LoginInputText = styled.input`
  padding-bottom: 0.8rem;
  font-size: var(--fs-md);
  border-bottom: 1px solid ${(props) => (props.isShowAlert ? 'var(--main-color)' : 'var(--border-color)')};
  outline: none;

  &::placeholder {
    color: var(--border-color);
  }
`;

const LoginInputAlert = styled.strong`
  margin-top: 6px;
  font-size: var(--fs-sm);
  font-weight: 500;
  color: var(--alert-color);
`;
