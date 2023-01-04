import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const InputIntro = ({ labelText = 'label', inputType = 'text', id, placeholder, maxLength, introFunction, intro }) => {
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

    introFunction(e.target.value);
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
        defaultValue={intro}
      />
    </InputWrapper>
  );
};

export default InputIntro;

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
