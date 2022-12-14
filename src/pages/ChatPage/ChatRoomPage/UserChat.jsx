import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProfileImage from '../../../components/common/ProfileImage/ProfileImage';
import { WALKING_EASY_IMAGE, PROFILE2_IMAGE } from '../../../styles/CommonImages';

const UserChat = ({ isImg, commentData }) => {
  const [dateData, setDateData] = useState({});
  useEffect(() => {
    if (commentData) {
      setDateData(commentData.createdAt);
    }
  }, [commentData]);
  const hour = new Date(dateData).getHours();
  const minutes = new Date(dateData).getMinutes();
  return (
    <MessageItem>
      <Link to='/'>
        <ProfileImage src={PROFILE2_IMAGE} width='42' />
      </Link>
      {isImg === false ? <MessageText>{commentData.content}</MessageText> : <MessageImg src={WALKING_EASY_IMAGE} />}
      <MessageDate>
        {hour}:{minutes}
      </MessageDate>
    </MessageItem>
  );
};

export default UserChat;

const MessageItem = styled.section`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.9rem;
  gap: 0.6rem;
`;

const MessageText = styled.p`
  border: none;
  color: var(--text-color);
  max-width: 24rem;
  padding: 1.2rem;
  background-color: var(--main-bg-color);
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  border-top-left-radius: 0;
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
