import React from 'react';
import styled from 'styled-components';

const EmailLoginInput = ({
  inputList,
  values,
  onFocusHandler,
  onBlurHandler,
  onChangeHandler,
  inputsValidState,
  alertMessage,
}) => {
  return (
    <LoginInputWrapper>
      {inputList.map(({ id, label, type, inputId, name, ref }) => (
        <LoginInput key={id}>
          <LoginInputLabel htmlFor={inputId}>{label}</LoginInputLabel>
          <LoginInputText
            type={type}
            id={inputId}
            name={name}
            ref={ref}
            value={values[name]}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
            autoComplete='off'
            spellCheck='false'
          />
          {name === 'email' ? (
            inputsValidState.email ? (
              <></>
            ) : (
              <LoginInputAlert>{alertMessage.emailAlertMessage}</LoginInputAlert>
            )
          ) : name === 'password' ? (
            inputsValidState.password ? (
              <></>
            ) : (
              <LoginInputAlert>{alertMessage.passwordAlertMessage}</LoginInputAlert>
            )
          ) : (
            <></>
          )}
        </LoginInput>
      ))}
    </LoginInputWrapper>
  );
};

export default EmailLoginInput;

const LoginInputWrapper = styled.div`
  margin-bottom: 3rem;

  & > div:not(:last-of-type) {
    margin-bottom: 1.6rem;
  }
`;

const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LoginInputLabel = styled.label`
  margin-bottom: 1rem;
  font-size: var(--fs-sm);
  font-weight: 500;
  color: var(--sub-text-color);
`;

const LoginInputText = styled.input`
  padding-bottom: 0.8rem;
  font-size: var(--fs-md);
  border-bottom: 1px solid ${(props) => (props.isShowAlert ? 'var(--main-color)' : 'var(--border-color)')};
  outline: none;

  &::placeholder {
    color: var(--border-color);
  }
`;

const LoginInputAlert = styled.strong`
  margin-top: 6px;
  font-size: var(--fs-sm);
  font-weight: 500;
  color: var(--alert-color);
`;
