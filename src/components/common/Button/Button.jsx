import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({
  children,
  size,
  disabled,
  type,
  backgroundColor = 'var(--login-bg-color)',
  borderColor = 'transparent',
  textColor = 'var(--main-bg-color)',
  onClickHandler,
  isActive = true,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      size={size}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={textColor}
      onClick={onClickHandler}
      isActive={isActive}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const sizeStyles = css`
  ${({ size }) => {
    switch (size) {
      case 'L':
        return css`
          height: 4.4rem;
          width: 32.2rem;
          border-radius: 4.4rem;
          &:hover {
            background: var(--sub-color);
          }
          & {
            background: ${(props) => (props.disabled === true ? 'var(--sub-color)' : 'var(--login-bg-color)')};
          }
        `;
      case 'M':
        return css`
          box-sizing: border-box;
          height: 3.4rem;
          width: 12rem;
          border-radius: 3rem;
          &:hover {
            background: var(--sub-color);
          }
          &&:active {
            border: 1px solid var(--border-color);
            background: var(--main-bg-color);
            color: var(--sub-text-color);
          }
        `;
      case 'MS':
        return css`
          height: 3.2rem;
          width: 9rem;
          border-radius: 3.2rem;
          &:hover {
            background: var(--sub-color);
          }
          & {
            background: ${(props) => (props.disabled === true ? 'var(--sub-color)' : 'var(--login-bg-color)')};
          }
        `;
      case 'S':
        return css`
          height: 2.8rem;
          font-weight: 400;
          width: 5.6rem;
          border-radius: 2.6rem;
          ${(props) =>
            props.isActive &&
            css`
              &:active {
                border: 1px solid var(--border-color);
                background: var(--main-bg-color);
                color: var(--sub-text-color);
              }
            `}
        `;
      default:
        return;
    }
  }}
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.borderColor};
  color: ${(props) => props.textColor};
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  ${sizeStyles}
  background: ${(props) => props.backgroundColor};
`;
