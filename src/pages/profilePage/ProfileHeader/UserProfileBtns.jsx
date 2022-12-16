import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../components/common/Button/Button';
import { CHAT_ICON, SHARE_ICON } from '../../../styles/CommonIcons';

const UserProfileBtns = ({ followState }) => {
  const [isFollowing, setIsFollowing] = useState(followState);

  function handleFollow() {
    setIsFollowing(!isFollowing);
  }
  return (
    <UserProfileBtnsStyle>
      {/* followState 에 따라 팔로우/언팔로우 버튼으로 나뉩니다*/}
      <ProfileBtn />
      <Button
        size='M'
        onClickHandler={handleFollow}
        backgroundColor={isFollowing ? 'var(--login-bg-color)' : 'var(--main-bg-color)'}
        borderColor={isFollowing ? 'transparent' : 'var(--border-color)'}
        textColor={isFollowing ? 'var(--main-bg-color)' : 'var(--sub-text-color)'}
      >
        {isFollowing ? '팔로우' : '언팔로우'}
      </Button>
      <ProfileBtn isShare={true} />
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

const ProfileBtn = styled.button`
  background: ${(props) =>
    props.isShare ? `url(${SHARE_ICON}) no-repeat center / 15px` : `url(${CHAT_ICON}) no-repeat center / 15px`};
  width: 34px;
  height: 34px;
  color: var(--sub-text-color);
  border: 1px solid var(--border-color);
  border-radius: 50%;
`;
