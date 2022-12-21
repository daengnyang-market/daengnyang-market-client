import React from 'react';
import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContextStore } from '../../context/AuthContext';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileProduct from './ProfileProduct/ProfileProduct';
import ProfilePost from './ProfilePost/ProfilePost';
import Loading from '../../components/common/Loading/Loading';

const ProfilePage = () => {
  const location = useLocation();
  const [isMyProfile, setMyProfile] = useState(null);
  // 내 프로필 정보 담기
  const [myProfileInfo, setMyProfileInfo] = useState('');


  const { userToken, userAccountname } = useContext(AuthContextStore);
  const url = `https://mandarin.api.weniv.co.kr`;
  // 나의 정보 불러오기
  const getMyProfileInfo = () => {
    axios({
      url: url + `/user/myinfo`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => {
        setMyProfileInfo(res.data);
        console.log(myProfileInfo);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMyProfileInfo();

  }, [userToken]);

  if (userToken === null) {
    window.location = '/login';
  } else if (!myProfileInfo) {
    return <Loading />;
  } else {
    return (
      <>
        <TopBasicNav />
        <ContentsLayout padding='2rem 0 0 0'>
          <ProfileHeader profileState={true} followState={false} profileData={myProfileInfo} />
          <SectionBorder />
          <ProfileProduct />
          <SectionBorder />
          <ProfilePost />
        </ContentsLayout>
        <TabMenu currentMenuId={4} />
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
