import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Button from '../../../components/common/Button/Button';
import { CHAT_ICON, SHARE_ICON } from '../../../styles/CommonIcons';
import { AuthContextStore } from '../../../context/AuthContext';

const UserProfileBtns = ({ profileData }) => {
  const [isFollowing, setIsFollowing] = useState(profileData.isfollow);
  const { userToken } = useContext(AuthContextStore);
  const { accountname } = useParams();
  const navigate = useNavigate();
  
  const handleGoChat = () => {
    navigate(`/chat/${accountname}`);
  };

  const handleFollow = async () => {
    const option = {
      url: `https://mandarin.api.weniv.co.kr/profile/${accountname}/${isFollowing ? 'unfollow' : 'follow'}`,
      method: isFollowing ? 'DELETE' : 'POST',
      headers: { Authorization: `Bearer ${userToken}`, 'Content-type': 'application/json' },
    };

    await axios(option)
      .then((res) => {
        setIsFollowing(!isFollowing);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <UserProfileBtnsStyle>
      <ChatBtn onClick={handleGoChat} />
      <Button
        size='M'
        onClickHandler={handleFollow}
        backgroundColor={isFollowing ? 'var(--main-bg-color)' : undefined}
        borderColor={isFollowing ? 'var(--border-color)' : undefined}
        textColor={isFollowing ? 'var(--sub-text-color)' : undefined}
      >
        {isFollowing ? '언팔로우' : '팔로우'}
      </Button>
      <ShareBtn />
    </UserProfileBtnsStyle>
  );
};

export default UserProfileBtns;

const UserProfileBtnsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-top: 2.4em;
  margin-bottom: 2.6em;
`;

const ShareBtn = styled.button`
  background: url(${SHARE_ICON}) no-repeat center / 15px;
  width: 34px;
  height: 34px;
  color: var(--sub-text-color);
  border: 1px solid var(--border-color);
  border-radius: 50%;
`;

const ChatBtn = styled.button`
  background: url(${CHAT_ICON}) no-repeat center / 15px;
  width: 34px;
  height: 34px;
  color: var(--sub-text-color);
  border: 1px solid var(--border-color);
  border-radius: 50%;
`;
