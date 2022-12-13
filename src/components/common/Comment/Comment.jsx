import React from 'react';
import styled from 'styled-components';

import ProfileImage from '../ProfileImage/ProfileImage';
import { PROFILE1_IMAGE, PROFILE2_IMAGE } from '../../../styles/CommonImages';

const Comment = () => {
  return (
    <CommentForm>
      <ProfileImage src={PROFILE1_IMAGE} alt='프로필 이미지'></ProfileImage>
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
  padding: 1.3rem 1.6rem;

  & input {
    font-size: 1.4em;
    height: 36px;
    flex-grow: 1;
    padding: 0.2rem;
    margin-left: 1.6rem;
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
