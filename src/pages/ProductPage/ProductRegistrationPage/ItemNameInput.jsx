import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const ItemNameInput = ({
  labelText = 'label',
  inputType = 'text',
  id,
  placeholder,
  maxLength,
  children,
  itemNameFunction,
  itemNameModFunction,
  itemNameMod,
}) => {
  const [nameValid, setNameValid] = useState(true);
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

    if (e.target.value.length < 2 && !(e.target.value.length === 0)) {
      setNameValid(false);
    } else {
      setNameValid(true);
    }

    if (itemNameModFunction) {
      if (e.target.value.length >= 2 && e.target.value.length <= 15) {
        itemNameModFunction(e.target.value);
      } else {
        itemNameModFunction('');
      }
    } else {
      if (e.target.value.length >= 2 && e.target.value.length <= 15) {
        itemNameFunction(e.target.value);
      } else {
        itemNameFunction('');
      }
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
        autoComplete='off'
        spellCheck='false'
        maxLength={maxLength}
        defaultValue={itemNameMod}
      />
      {nameValid ? '' : <InputAlert>{children}</InputAlert>}
    </InputWrapper>
  );
};

export default ItemNameInput;

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
  margin-top: 6px;
  font-size: var(--fs-sm);
  font-weight: 500;
  color: var(--alert-color);

  &::before {
    content: '* ';
  }
`;
