import React from 'react';
import styled from 'styled-components';

import { PROFILE1_IMAGE } from '../../styles/CommonImages';
import ProfileImage from '../../components/common/ProfileImage/ProfileImage';

const ChatList = ({ name, content, date }) => {
  return (
    <>
      <ChatLi>
        <ProfileImage src={PROFILE1_IMAGE} alt='프로필사진' width='42' />
        <NewMeassageAlert />
        <ChatContents className='ellipsis'>
          <strong>{name}</strong>
          <span className='ellipsis'>{content}</span>
        </ChatContents>
        <ChatDate>{date}</ChatDate>
      </ChatLi>
    </>
  );
};

export default ChatList;

const NewMeassageAlert = styled.div`
  width: 12px;
  height: 12px;
  background-color: var(--login-bg-color);
  border-radius: 50%;
  position: absolute;
  top: 0px;
  left: 0;
`;

const ChatLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const ChatContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  margin: 0 1.3em;

  & strong {
    font-size: 1.4em;
    font-weight: 400;
    margin: 0.2em 0 0.4em 0;
  }

  & span {
    width: 100%;
    font-size: 1.2em;
    color: var(--sub-text-color);
  }
`;

const ChatDate = styled.span`
  display: block;
  font-size: 1em;
  color: var(--border-color);
  margin-top: 2.6em;
`;
