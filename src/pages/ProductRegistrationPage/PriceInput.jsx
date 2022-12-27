import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

// * 사용법 - 아래의 4가지 props를 전달해줘야 합니다 *
// labelText : label에 들어갈 문구 (생략시 기본값: label)
// inputType : input 태그의 타입 (생략시 기본값: text)
// id : input 태그의 아이디
// placeholder : input 태그에 적용할 placeholder
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

  // 상품 수정 페이지 / 등록 페이지
  const [value, setValue] = useState('');
  useEffect(() => {
    if (priceMod) {
      setValue(priceMod);
    } else {
      setValue(inputValue);
    }
  }, [inputValue, priceMod]);

  const handleChange = (e) => {
    setInputValue(e.target.value.replace(/[^0-9]/g, ''));

    if (e.target.value) {
      inputRef.current.style.borderBottom = '1px solid var(--main-color)';
    } else {
      inputRef.current.style.borderBottom = '1px solid var(--border-color)';
    }

    //상품 수정 페이지 / 등록 페이지
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
