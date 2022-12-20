import React from 'react';
import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContextStore } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';

import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileProduct from './ProfileProduct/ProfileProduct';
import ProfilePost from './ProfilePost/ProfilePost';
import Loading from '../../components/common/Loading/Loading';

const ProfilePage = () => {
  // useParams() 사용해서 url 에 있는 파라미터 받아오기
  let { accountName } = useParams();

  // 유저의 프로필 정보 담기
  const [userProfileInfo, setUserProfileInfo] = useState('');
  //내가 이사람 팔로우 했는지 안했는지
  const [isFollow, setIsFollow] = useState('');

  // 일단 해당 데이터로 프로필 전달하기
  const tempToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWZiYWY0MTdhZTY2NjU4MWM3MzAyMSIsImV4cCI6MTY3NjcxMTA4NywiaWF0IjoxNjcxNTI3MDg3fQ.GNjuwF4GcX7fQiZtX2I8H3kpgClotfYvwS-_pPyIzRE`;
  const tempAccountName = 'daengnyang';

  const { userToken, userAccountname } = useContext(AuthContextStore);
  const url = `https://mandarin.api.weniv.co.kr`;

  // 다른 유저 프로필 불러오기
  const getUserProfileInfo = () => {
    axios({
      url: url + `/profile/${tempAccountName}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tempToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        setUserProfileInfo(res.data);
        console.log(userProfileInfo);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getUserProfileInfo();
  }, []);

  if (!userProfileInfo) {
    return <Loading />;
  } else {
    return (
      <>
        <TopBasicNav />
        <ContentsLayout padding='2rem 0 0 0'>
          <ProfileHeader profileState={false} followState={false} profileData={userProfileInfo} />
          <SectionBorder />
          <ProfileProduct />
          <SectionBorder />
          <ProfilePost postState={true} />
        </ContentsLayout>
        <TabMenu />
      </>
    );
  }
};

export default ProfilePage;

const SectionBorder = styled.div`
  height: 6px;
  width: 100%;
  border-top: 0.5px solid var(--border-color);
  border-bottom: 0.5px solid var(--border-color);
  background-color: var(--chat-bg-color);
`;
