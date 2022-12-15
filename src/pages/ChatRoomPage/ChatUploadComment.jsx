import React from 'react';
import styled, { css } from 'styled-components';
import { IMG_BUTTON_ICON } from '../../styles/CommonIcons';

const ChatUploadComment = () => {
  return (
    <CommentForm>
      <ImgUploadButton>
        <label htmlFor='imgUpload' />
        <input type='file' accept='image/*' id='imgUpload' className='sr-only' />
      </ImgUploadButton>
      <input type='text' placeholder='메시지 입력하기...' />
      <Button disabled={true}>전송</Button>
    </CommentForm>
  );
};

export default ChatUploadComment;

const ImgUploadButton = styled.div`
  label {
    position: absolute;
    width: 3.6rem;
    height: 3.6rem;
    bottom: 1.2rem;
    background-image: url(${IMG_BUTTON_ICON});
    background-position: center;
    background-size: cover;
    cursor: pointer;
  }
`;

const colorStyles = css`
  ${(props) =>
    props.disabled === false &&
    css`
      color: var(--login-bg-color);
    `}
`;

const Button = styled.button`
  font-size: 1.4em;
  color: var(--chat-border-color);
  ${colorStyles}
  font-weight: 500;
`;

const CommentForm = styled.form`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 61px;
  padding: 1.3rem 1.6rem;
  background: #fff;
  border-top: 1px solid var(--border-color);
  & input {
    font-size: 1.4em;
    height: 36px;
    flex-grow: 1;
    padding: 0.2rem;
    margin-left: 7rem;
    outline: none;
    color: #000;
  }

  & input::placeholder {
    color: var(--chat-border-color);
  }
`;
