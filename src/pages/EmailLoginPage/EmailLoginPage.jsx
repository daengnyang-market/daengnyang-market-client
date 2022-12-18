import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/common/Button/Button';

const EmailLoginPage = () => {
  const [input, setInput] = useState({ email: '', password: '' });
  const [isValidLogin, setIsValidLogin] = useState(false);
  const [isShowAlert, setIsShowAlert] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const onFocusInputHandler = (e) => {
    // TODO: 포커스 갔을 때 밑줄 색 바뀌기
    if (e.currentTarget.id === 'emailInput') {
      emailInputRef.current.style.borderBottom = '1px solid var(--main-color)';
      return;
    }

    passwordInputRef.current.style.borderBottom = '1px solid var(--main-color)';
  };

  const onBlurInputHandler = (e) => {
    // TODO: 포커스를 잃었을 때 원 상태로 돌아가기
    if (e.currentTarget.id === 'emailInput') {
      emailInputRef.current.style.borderBottom = '1px solid var(--border-color)';
      return;
    }

    passwordInputRef.current.style.borderBottom = '1px solid var(--border-color)';
  };

  const onChangeEmailHandler = (e) => {
    setInput({ ...input, email: e.currentTarget.value });
    checkValidLoginState();

    // TODO: 이메일 유효성 검사
  };

  const onChangePasswordHandler = (e) => {
    setInput({ ...input, password: e.currentTarget.value });
    checkValidLoginState();

    // TODO: 비밀번호 유효성 검사
  };

  const checkValidLoginState = () => {
    // TODO: 로그인 버튼을 활성화 할 수 있는지 체크
    if (emailInputRef.current.value && passwordInputRef.current.value) {
      setIsValidLogin(true);
      return;
    }

    setIsValidLogin(false);
  };

  const onCheckValidHandler = (e) => {
    // TODO: 로그인 버튼 클릭시
  };

  return (
    <Main>
      <Title>로그인</Title>

      <LoginInputWrapper>
        <LoginInput>
          <LoginInputLabel htmlFor='emailInput'>이메일</LoginInputLabel>
          <LoginInputText
            type='text'
            id='emailInput'
            ref={emailInputRef}
            value={input['email']}
            onFocus={onFocusInputHandler}
            onBlur={onBlurInputHandler}
            onChange={onChangeEmailHandler}
            isShowAlert={isShowAlert}
            autoComplete='off'
            spellCheck='false'
          />
        </LoginInput>
        <LoginInput>
          <LoginInputLabel htmlFor='passwordInput'>비밀번호</LoginInputLabel>
          <LoginInputText
            type='text'
            id='passwordInput'
            ref={passwordInputRef}
            value={input['password']}
            onFocus={onFocusInputHandler}
            onBlur={onBlurInputHandler}
            onChange={onChangePasswordHandler}
            isShowAlert={isShowAlert}
            autoComplete='off'
            spellCheck='false'
          />
          {isShowAlert ? <LoginInputAlert>이메일 2또는 비밀번호가 일치하지 않습니다.</LoginInputAlert> : <></>}
        </LoginInput>
      </LoginInputWrapper>

      <Button size='L' disabled={isValidLogin ? false : true} onClick={onCheckValidHandler}>
        로그인
      </Button>

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

  &::before {
    content: '* ';
  }
`;
