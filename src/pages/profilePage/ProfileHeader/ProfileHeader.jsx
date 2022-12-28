import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AuthContextStore } from '../../../context/AuthContext';
import UserProfileBtns from './UserProfileBtns';
import MyProfileBtns from './MyProfileBtns';
import ProfileImage from '../../../components/common/ProfileImage/ProfileImage';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Loading from '../../../components/common/Loading/Loading';

// profileData : 프로필 페이지에서 넘어오는 프로필 정보들

const ProfileHeader = ({ profileData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userAccountname, userToken } = useContext(AuthContextStore);
  const { accountname } = useParams();

  const onClickFollowList = (followType) => {
    if (location.pathname === `/profile`) {
      navigate(`/follow/${userAccountname}/${followType}`);
    } else {
      navigate(`/follow/${accountname}/${followType}`);
    }
  };

  if (!profileData) {
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>;
  } else {
    return (
      <>
        <ProfileWrapper>
          <h2 className='sr-only'>프로필 정보</h2>
          <Followers onClick={() => onClickFollowList('follower')}>
            <strong>{profileData.followerCount}</strong>
            <span>followers</span>
          </Followers>

          <ProfileImage src={profileData.image} alt='프로필 사진' width='110' />
          <UserName>{profileData.username}</UserName>
          <UserID>@ {profileData.accountname}</UserID>
          <UserIntro>{profileData.intro}</UserIntro>
          <Followings onClick={() => onClickFollowList('following')}>
            <strong>{profileData.followingCount}</strong>
            <span>followings</span>
          </Followings>
          {location.pathname === '/profile' ? <MyProfileBtns /> : <UserProfileBtns profileData={profileData} />}
        </ProfileWrapper>
        <SectionBorder />
      </>
    );
  }
};

export default ProfileHeader;

const LoadingWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

const Followers = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 4em;
  left: 5.6em;

  & strong {
    margin-bottom: 0.35em;
    font-weight: 700;
    font-size: 1.8em;
    color: var(--text-color);
  }
  & span {
    color: var(--sub-text-color);
    font-size: 1em;
  }
`;

const Followings = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 4em;
  right: 5.6em;

  & strong {
    margin-bottom: 0.35em;
    font-weight: 700;
    font-size: 1.8em;
    color: var(--text-color);
  }

  & span {
    color: var(--sub-text-color);
    font-size: 1em;
  }
`;
const SectionBorder = styled.div`
  height: 6px;
  width: 100%;
  border-top: 0.5px solid var(--border-color);
  border-bottom: 0.5px solid var(--border-color);
  background-color: var(--chat-bg-color);
`;
