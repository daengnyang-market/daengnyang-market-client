import React from 'react';
import styled, { css } from 'styled-components';

import ProfileImage from '../ProfileImage/ProfileImage';
import { PROFILE1_IMAGE, PROFILE2_IMAGE } from '../../../styles/CommonImages';

const Comment = () => {
  return (
    <CommentForm>
      <ProfileImage src={PROFILE1_IMAGE} alt='프로필 이미지'></ProfileImage>
      <input type='text' placeholder='댓글 입력하기...' />
      <Button disabled={true}>게시</Button>
    </CommentForm>
  );
};

export default Comment;

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
    margin-left: 1.6rem;
    outline: none;
    color: #000;
  }

  & input::placeholder {
    color: var(--chat-border-color);
  }
`;
