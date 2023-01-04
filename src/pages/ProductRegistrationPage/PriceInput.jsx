import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const PriceInput = ({
  labelText = 'label',
  inputType = 'text',
  id,
  placeholder,
  priceFunction,
  priceModFunction,
  priceMod,
}) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  const commaFunction = (value) => {
    const comma = (value) => {
      value = String(value);
      return value.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    };
    const uncomma = (value) => {
      value = String(value);
      return value.replace(/[^\d]+/g, '');
    };
    return comma(uncomma(value));
  };

  const [value, setValue] = useState('');
  useEffect(() => {
    if (priceMod) {
      setValue(commaFunction(priceMod));
    } else {
      setValue(commaFunction(inputValue));
    }
  }, [inputValue, priceMod]);

  const handleChange = (e) => {
    setInputValue(commaFunction(e.target.value.replace(/[^0-9]/g, '')));

    if (e.target.value) {
      inputRef.current.style.borderBottom = '1px solid var(--main-color)';
    } else {
      inputRef.current.style.borderBottom = '1px solid var(--border-color)';
    }

    if (priceModFunction) {
      priceModFunction(e.target.value.replace(/[^0-9]/g, ''));
    } else {
      priceFunction(e.target.value.replace(/[^0-9]/g, ''));
    }
  };

  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{labelText}</InputLabel>
      <InputText
        type={inputType}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        ref={inputRef}
        autoComplete='off'
        spellCheck='false'
      />
    </InputWrapper>
  );
};

export default PriceInput;

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
  border-bottom: 1px solid var(--border-color);
  outline: none;

  &::placeholder {
    color: var(--border-color);
  }
`;
