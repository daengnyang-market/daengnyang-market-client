import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const InputUserName = ({
  children,
  labelText = 'label',
  inputType = 'text',
  id,
  placeholder,
  maxLength,
  userNameFunction,
  userName,
}) => {
  const [inputValue, setInputValue] = useState('');

  const [isShowAlert, setIsShowAlert] = useState(false);
  const inputRef = useRef();

  const handleChange = (e) => {
    setInputValue(e.target.value);

    if (e.target.value) {
      inputRef.current.style.borderBottom = '1px solid var(--main-color)';
    } else {
      inputRef.current.style.borderBottom = '1px solid var(--border-color)';
    }

    if (e.target.value.length >= 2 && e.target.value.length <= 10) {
      userNameFunction(e.target.value);
    } else {
      userNameFunction('');
    }
  };

  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{labelText}</InputLabel>
      <InputText
        type={inputType}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        ref={inputRef}
        isShowAlert={isShowAlert}
        autoComplete='off'
        spellCheck='false'
        maxLength={maxLength}
        defaultValue={userName}
      />
      {!(inputValue.length === 0) && inputValue.length < 2 && <InputAlert>{children}</InputAlert>}
    </InputWrapper>
  );
};

export default InputUserName;

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
