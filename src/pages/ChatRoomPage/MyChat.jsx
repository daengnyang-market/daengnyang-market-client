import React from 'react';
import styled from 'styled-components';
import { WALKING_EASY_IMAGE } from '../../styles/CommonImages';

const MyChat = ({ isImg, commentData }) => {
  console.log('넘어온 채팅정보', commentData);
  return (
    <MessageItem>
      <MessageDate>12:50</MessageDate>
      {isImg === false ? <MessageText>{commentData.content}</MessageText> : <MessageImg src={WALKING_EASY_IMAGE} />}
    </MessageItem>
  );
};

export default MyChat;

const MessageItem = styled.section`
  & {
    align-self: flex-end;
  }
  gap: 0.6rem;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.9rem;
`;

const MessageText = styled.p`
  border: none;
  color: #fff;
  max-width: 24rem;
  padding: 1.2rem;
  background-color: var(--main-color);
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  border-top-right-radius: 0;
  font-weight: 400;
  font-size: var(--fs-md);
  line-height: 18px;
`;

const MessageDate = styled.strong`
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: var(--sub-text-color);
`;

const MessageImg = styled.img`
  width: 24rem;
  height: 24rem;
  background-size: cover;
  background-color: var(--main-bg-color);
  background-position: center;
  border-radius: 1rem;
  border: none;
`;
