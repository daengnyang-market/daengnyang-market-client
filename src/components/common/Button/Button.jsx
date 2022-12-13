import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ children, size }) => {
  return <StyledButton size={size}>{children}</StyledButton>;
};

export default Button;

const sizeStyles = css`
  ${(props) =>
    props.size === 'L' &&
    css`
      height: 4.4rem;
      padding-left: 14.8rem;
      padding-right: 14.8rem;
      border-radius: 4.4rem;
      &:hover {
        background: var(--sub-color);
      }
    `}

  ${(props) =>
    props.size === 'M' &&
    css`
      box-sizing: border-box;
      height: 3.4rem;
      padding-left: 4rem;
      padding-right: 4rem;
      border-radius: 3rem;
      &:hover {
        background: var(--sub-color);
      }
      &&:active {
        border: 1px solid var(--border-color);
        background: var(--main-bg-color);
        color: var(--sub-text-color);
      }
    `}

${(props) =>
    props.size === 'MS' &&
    css`
      height: 3.2rem;
      padding-left: 3.2rem;
      padding-right: 3.2rem;
      border-radius: 3.2rem;
      &:hover {
        background: var(--sub-color);
      }
    `}

${(props) =>
    props.size === 'S' &&
    css`
      height: 2.8rem;
      font-weight: 400;
      padding-left: 1.1rem;
      padding-right: 1.1rem;
      border-radius: 2.6rem;
      &:active {
        border: 1px solid var(--border-color);
        background: var(--main-bg-color);
        color: var(--sub-text-color);
      }
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  box-sizing: border-box;
  border: 1px solid transparent;
  color: var(--main-bg-color);
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  /* 크기 */
  ${sizeStyles}
  /* 색상 */
  background: var(--login-bg-color);
`;
