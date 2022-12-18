import React, { useRef, useState } from 'react';
import styled from 'styled-components';

// * 사용법 - 아래의 4가지 props를 전달해줘야 합니다 *
// labelText : label에 들어갈 문구 (생략시 기본값: label)
// inputType : input 태그의 타입 (생략시 기본값: text)
// id : input 태그의 아이디
// placeholder : input 태그에 적용할 placeholder
const InputUserDescription = ({ children, labelText = 'label', inputType = 'text', id, placeholder, maxLength }) => {
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
    </InputWrapper>
  );
};

export default InputUserDescription;

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
