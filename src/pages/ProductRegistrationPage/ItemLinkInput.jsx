import React, { useRef, useState } from 'react';
import styled from 'styled-components';

// * 사용법 - 아래의 4가지 props를 전달해줘야 합니다 *
// labelText : label에 들어갈 문구 (생략시 기본값: label)
// inputType : input 태그의 타입 (생략시 기본값: text)
// id : input 태그의 아이디
// placeholder : input 태그에 적용할 placeholder
const ItemLinkInput = ({
  labelText = 'label',
  inputType = 'text',
  id,
  placeholder,
  linkFunction,
  linkModFunction,
  linkMod,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isShowAlert, setIsShowAlert] = useState(false);
  const inputRef = useRef();

  const [LinkValid, setLinkValid] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);

    if (e.target.value) {
      inputRef.current.style.borderBottom = '1px solid var(--main-color)';
    } else {
      inputRef.current.style.borderBottom = '1px solid var(--border-color)';
    }

    const regex = /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;

    if (regex.test(e.target.value)) {
      setLinkValid(true);
    } else {
      setLinkValid(false);
    }

    if (linkModFunction) {
      if (LinkValid) {
        linkModFunction(e.target.value);
      } else {
        linkModFunction('');
      }
    } else {
      if (LinkValid) {
        linkFunction(e.target.value);
      } else {
        linkFunction('');
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
        // value={inputValue}
        onChange={handleChange}
        ref={inputRef}
        autoComplete='off'
        spellCheck='false'
        defaultValue={linkMod}
      />
    </InputWrapper>
  );
};

export default ItemLinkInput;

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
