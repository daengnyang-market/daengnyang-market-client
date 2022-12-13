import React from 'react';
import styled from 'styled-components';

import { PROFILE1_IMAGE } from '../../../styles/CommonImages';

const Comment = () => {
  return (
    <CommentForm>
      <img src={PROFILE1_IMAGE} alt='프로필이미지' />
      <input type='text' placeholder='댓글 입력하기...' />
      <button>게시</button>
    </CommentForm>
  );
};

export default Comment;

const CommentForm = styled.form`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 61px;
  padding: 1.3em 1.6em;

  & img {
    width: 36px;
    height: 36px;
    border: 2px solid var(--profile-border-color);
    border-radius: 50%;
    margin-right: 1.6em;
  }

  & input {
    font-size: 1.4em;
    height: 36px;
    flex-grow: 1;
    padding: 0.2em;
  }

  & input::placeholder {
    color: var(--chat-border-color);
  }

  & button {
    font-size: 1.4em;
    color: var(--chat-border-color);
    font-weight: 500;
  }
`;
