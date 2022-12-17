import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from '../../components/common/Button/Button';

const JoinMembershipInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [isValidatedEmail, setIsValidatedEmail] = useState('');
  const [isValidatedPassword, setIsValidatedPassword] = useState('');
  const navigate = useNavigate();

  const onClickPageHandler = () => {
    navigate('/join/setprofile');
  };

  useEffect(() => {
    const regexEmail =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!regexEmail.test(email) && email !== '') {
      setIsValidatedEmail(false);
      setEmailMessage('*올바른 이메일 형식이 아닙니다.');
    } else if (email === '') {
      setIsValidatedEmail('');
      setEmailMessage('');
    } else {
      setIsValidatedEmail(true);
      setEmailMessage('');
    }
  }, [email]);

  useEffect(() => {
    if (password.length < 6 && password !== '') {
      setPasswordMessage('*비밀번호는 6자 이상이어야 합니다.');
      setIsValidatedPassword(false);
    } else if (password === '') {
      setIsValidatedPassword('');
    } else {
      setPasswordMessage('');
      setIsValidatedPassword(true);
    }
  }, [password]);
  return (
    <InputWrapper>
      <InputLabel htmlFor='email'>이메일</InputLabel>
      <InputEmailText
        type='text'
        id='email'
        name='email'
        placeholder='이메일 주소를 입력해 주세요.'
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        isValidatedEmail={isValidatedEmail}
        autoComplete='off'
        spellCheck='false'
      />
      <ErrorMessage>{emailMessage}</ErrorMessage>
      <InputLabel htmlFor='password'>패스워드</InputLabel>
      <InputPasswordText
        type='text'
        id='password'
        name='password'
        placeholder='패스워드를 입력해 주세요.'
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        isValidatedPassword={isValidatedPassword}
        autoComplete='off'
        spellCheck='false'
      />
      <ErrorMessage>{passwordMessage}</ErrorMessage>

      <Button
        onClickHandler={onClickPageHandler}
        disabled={isValidatedEmail && isValidatedPassword === true ? false : true}
        size='L'
      >
        다음
      </Button>
    </InputWrapper>
  );
};

export default JoinMembershipInput;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputLabel = styled.label`
  margin-bottom: 1rem;
  font-size: var(--fs-sm);
  font-weight: 500;
  color: var(--sub-text-color);
`;

const PasswordBorderStyle = css`
  ${(props) =>
    props.isValidatedPassword === true &&
    css`
      border-bottom: 1px solid var(--main-color);
    `};
  ${(props) =>
    props.isValidatedPassword === false &&
    css`
      border-bottom: 1px solid var(--alert-color);
    `};
  ${(props) =>
    props.isValidatedPassword === '' &&
    css`
      border-bottom: 1px solid var(--border-color);
    `};
`;

const EmailwordBorderStyle = css`
  ${(props) =>
    props.isValidatedEmail === true &&
    css`
      border-bottom: 1px solid var(--main-color);
    `};
  ${(props) =>
    props.isValidatedEmail === false &&
    css`
      border-bottom: 1px solid var(--alert-color);
    `};
  ${(props) =>
    props.isValidatedEmail === '' &&
    css`
      border-bottom: 1px solid var(--border-color);
    `};
`;

const InputEmailText = styled.input`
  padding-bottom: 0.8rem;
  font-size: var(--fs-md);
  ${EmailwordBorderStyle};

  outline: none;

  &::placeholder {
    color: var(--border-color);
  }
`;

const InputPasswordText = styled.input`
  padding-bottom: 0.8rem;
  font-size: var(--fs-md);
  ${PasswordBorderStyle};
  outline: none;

  &::placeholder {
    color: var(--border-color);
  }
`;

const ErrorMessage = styled.p`
  color: #eb5757;
`;
