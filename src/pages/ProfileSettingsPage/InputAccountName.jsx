import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// * 사용법 - 아래의 4가지 props를 전달해줘야 합니다 *
// labelText : label에 들어갈 문구 (생략시 기본값: label)
// inputType : input 태그의 타입 (생략시 기본값: text)
// id : input 태그의 아이디
// placeholder : input 태그에 적용할 placeholder
const InputAccountName = ({
  labelText = 'label',
  inputType = 'text',
  id,
  placeholder,
  maxLength,
  accountNameFunction,
  disabledButtonFunction,
}) => {
  const [inputValue, setInputValue] = useState('');

  const [isShowAlert, setIsShowAlert] = useState(false);
  const inputRef = useRef();

  // alert
  const [alertPattern, setAlertPattern] = useState('');
  const [alertID, setAlertID] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);

    if (e.target.value) {
      inputRef.current.style.borderBottom = '1px solid var(--main-color)';
    } else {
      inputRef.current.style.borderBottom = '1px solid var(--border-color)';
    }

    const regex = /^[._a-zA-z0-9]{0,10}$/;

    const option = {
      url: 'https://mandarin.api.weniv.co.kr/user/accountnamevalid',
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      data: {
        user: {
          accountname: e.target.value,
        },
      },
    };

    axios(option)
      .then((res) => {
        // console.log(res);
        // console.log(res.data.message);

        if (regex.test(e.target.value)) {
          if (res.data.message === '이미 가입된 계정ID 입니다.') {
            disabledButtonFunction(true);
            accountNameFunction('');
            setAlertID('* 이미 사용 중인 ID입니다.');
          } else {
            setAlertID('');
            accountNameFunction(e.target.value);
          }

          setAlertPattern('');
        } else {
          accountNameFunction('');
          setAlertPattern('* 영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.');
          setAlertID('');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{labelText}</InputLabel>
      <InputText
        type={inputType}
        id={id}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        ref={inputRef}
        isShowAlert={isShowAlert}
        autoComplete='off'
        spellCheck='false'
        maxLength={maxLength}
      />
      <InputAlert>{alertPattern}</InputAlert>
      <InputAlert>{alertID}</InputAlert>
    </InputWrapper>
  );
};

export default InputAccountName;

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

const InputText = styled.input`
  padding-bottom: 0.8rem;
  font-size: var(--fs-md);
  border-bottom: 1px solid ${(props) => (props.isShowAlert ? 'var(--main-color)' : 'var(--border-color)')};
  outline: none;

  &::placeholder {
    color: var(--border-color);
  }
`;

const InputAlert = styled.strong`
  margin-top: 0.6rem;
  font-size: var(--fs-sm);
  font-weight: 500;
  color: var(--alert-color);
  line-height: 14px;
`;
