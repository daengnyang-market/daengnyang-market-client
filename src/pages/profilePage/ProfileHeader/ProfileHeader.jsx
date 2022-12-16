import React, { useState } from 'react';
import styled from 'styled-components';

import UserProfileBtns from './UserProfileBtns';
import MyProfileBtns from './MyProfileBtns';
import ProfileImage from '../../../components/common/ProfileImage/ProfileImage';
import { PROFILE1_IMAGE } from '../../../styles/CommonImages';

const ProfileHeader = ({ profileState, followState }) => {
  const [isMyProfile, setIsMyProfile] = useState(false);

  return (
    <ProfileWrapper>
      <h2 className='sr-only'>프로필 정보</h2>
      <Followers>
        <strong>2950</strong>
        <span>followers</span>
      </Followers>
      <ProfileImage src={PROFILE1_IMAGE} alt='weniv_Mandarin님의 프로필 사진' width='110' />
      <UserName>애월읍 위니브 감귤농장</UserName>
      <UserID>@ weniv_Mandarin</UserID>
      <UserIntro>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</UserIntro>
      <Followings>
        <strong>128</strong>
        <span>followings</span>
      </Followings>
      {/* isMyProfile에 따라 MyProfileBtns 과 UserProfileBtns 나뉘게 / */}
      {isMyProfile == true ? <MyProfileBtns /> : <UserProfileBtns isFollowing={true} />}
    </ProfileWrapper>
  );
};

export default ProfileHeader;

const ProfileWrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 3em;
`;

const UserName = styled.strong`
  font-size: 1.8em;
  color: var(--text-color);
  margin-top: 1.5em;
  margin-bottom: 0.6em;
  font-weight: 700;
`;

const UserID = styled.span`
  display: block;
  color: var(--sub-text-color);
  font-size: 1em;
  margin-bottom: 1.6em;
`;

const UserIntro = styled.span`
  font-size: 1.4em;
  color: var(--sub-text-color);
`;

const Followers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 4em;
  left: 5.6em;

  & strong {
    margin-bottom: 0.6em;
    font-weight: 700;
    font-size: 1.8em;
    color: var(--text-color);
  }
  & span {
    color: var(--sub-text-color);
    font-size: 1em;
  }
`;

const Followings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 4em;
  right: 5.6em;

  & strong {
    margin-bottom: 0.6em;
    font-weight: 700;
    font-size: 1.8em;
    color: var(--text-color);
  }

  & span {
    color: var(--sub-text-color);
    font-size: 1em;
  }
`;
