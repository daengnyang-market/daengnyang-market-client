import React, { useRef, useState } from 'react';
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
  const [price, setprice] = useState('true');
  const [inputValue, setInputValue] = useState('');
  const [isShowAlert, setIsShowAlert] = useState(false);
  const inputRef = useRef();

  const handleChange = (e) => {
    setInputValue(e.target.value.replace(/[^0-9]/g, ''));

    const regex = /^[0-9]/g;

    if (regex.test(e.target.value)) {
      setprice(true);
    } else {
      setprice(false);
    }

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
        // value={inputValue}
        onChange={handleChange}
        ref={inputRef}
        autoComplete='off'
        spellCheck='false'
        defaultValue={priceMod}
      />
      {isShowAlert ? <InputAlert>이미 가입된 이메일 주소입니다</InputAlert> : <></>}
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
