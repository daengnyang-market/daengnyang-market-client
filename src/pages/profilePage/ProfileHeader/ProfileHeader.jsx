import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
// import AuthContextStore from '../../../context/AuthContext';
import UserProfileBtns from './UserProfileBtns';
import MyProfileBtns from './MyProfileBtns';
import ProfileImage from '../../../components/common/ProfileImage/ProfileImage';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Loading from '../../../components/common/Loading/Loading';

// followState : 버튼에 넘겨주기 위한 props => 팔로우 했을 경우 언팔 뜨게
// profileData : 프로필 페이지에서 넘어오는 프로필 정보들

const ProfileHeader = ({ followState, profileData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  let { accountname } = useParams();

  // 사용자 토큰,아이디 context 값
  // const { userToken, userAccountname } = useContext(AuthContextStore);

  const moveFollowers = () => {
    navigate(`/follow/:accountname/:type`);
  };

  if (!profileData) {
    <Loading />;
  } else {
    return (
      <>
        <ProfileWrapper>
          <h2 className='sr-only'>프로필 정보</h2>
          <Followers onClick={moveFollowers}>
            <strong>{profileData.followerCount}</strong>
            <span>followers</span>
          </Followers>
          <ProfileImage src={profileData.image} alt='프로필 사진' width='110' />
          <UserName>{profileData.username}</UserName>
          <UserID>@ {profileData.accountname}</UserID>
          <UserIntro>{profileData.intro}</UserIntro>
          <Followings onClick={moveFollowers}>
            <strong>{profileData.followingCount}</strong>
            <span>followings</span>
          </Followings>
          {location.pathname === '/profile' ? <MyProfileBtns /> : <UserProfileBtns isFollowing={followState} />}
        </ProfileWrapper>
      </>
    );
  }
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
