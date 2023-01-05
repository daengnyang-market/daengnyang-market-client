import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled, { css } from 'styled-components';
import Button from '../../../components/common/Button/Button';

const JoinMembershipInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [isValidatedEmail, setIsValidatedEmail] = useState('');
  const [isValidatedPassword, setIsValidatedPassword] = useState('');
  const navigate = useNavigate();

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
      setPasswordMessage('');
      setIsValidatedPassword('');
    } else {
      setPasswordMessage('');
      setIsValidatedPassword(true);
    }
  }, [password]);

  const onClickPageHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post('https://mandarin.api.weniv.co.kr/user/emailvalid', {
      user: {
        email: email,
      },
    });
    if (res.data.message === '사용 가능한 이메일 입니다.') {
      setIsValidatedEmail(true);
      navigate('/join/setprofile', {
        state: {
          email: email,
          password: password,
        },
      });
    } else if (res.data.message === '이미 가입된 이메일 주소 입니다.') {
      setIsValidatedEmail(false);
      setEmailMessage('*이미 가입된 이메일 주소 입니다.');
    } else {
      setIsValidatedEmail(false);
      alert('잘못된 접근입니다.');
    }
  };

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
        type='password'
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
        disabled={isValidatedEmail && isValidatedPassword === true ? false : true}
        onClickHandler={onClickPageHandler}
        size='L'
      >
        다음
      </Button>
    </InputWrapper>
  );
};

export default JoinMembershipInput;

const InputWrapper = styled.form`
  display: flex;
  gap: 0.8rem;
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
  ${({ isValidatedPassword }) => {
    switch (isValidatedPassword) {
      case true:
        return `border-bottom: 1px solid var(--main-color)`;
      case false:
        return `border-bottom: 1px solid var(--alert-color)`;
      case '':
        return `border-bottom: 1px solid var(--border-color)`;
      default:
        return;
    }
  }}
`;

const EmailwordBorderStyle = css`
  ${({ isValidatedEmail }) => {
    switch (isValidatedEmail) {
      case true:
        return `border-bottom: 1px solid var(--main-color)`;
      case false:
        return `border-bottom: 1px solid var(--alert-color)`;
      case '':
        return `border-bottom: 1px solid var(--border-color)`;
      default:
        return;
    }
  }}
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
  & + button {
    margin-top: 1.4rem;
  }
`;
