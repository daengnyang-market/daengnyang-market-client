import React from 'react';
import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContextStore } from '../../context/AuthContext';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileProduct from './ProfileProduct/ProfileProduct';
import ProfilePost from './ProfilePost/ProfilePost';
import Loading from '../../components/common/Loading/Loading';

const ProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // useParams() 사용해서 url 에 있는 파라미터 받아오기
  let { accountname } = useParams();
  // state 랜더링 위해 추가
  const [isRendered, setIsRendered] = useState(false);

  // 유저의 프로필 정보 담기
  const [userProfileInfo, setUserProfileInfo] = useState('');

  // 사용자 토큰,아이디 context 값
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const url = `https://mandarin.api.weniv.co.kr`;

  useEffect(() => {
    if (location.pathname === `/profile/${userAccountname}`) {
      navigate('/profile');
    }
  }, [location, userAccountname, navigate]);

  useEffect(() => {
    setIsRendered(true);
    // 유저 프로필 불러오기
    const getUserProfileInfo = () => {
      axios({
        url: url + `/profile/${accountname ? accountname : userAccountname}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      })
        .then((res) => {
          setUserProfileInfo(res.data.profile);
        })
        .catch((err) => console.error(err));
    };
    getUserProfileInfo();
  }, [url, accountname, userAccountname, userToken]);

  if (!userProfileInfo) {
    <LoadingWrapper>
      <Loading />;
    </LoadingWrapper>;
  } else {
    return (
      <>
        <TopBasicNav />
        <ContentsLayout padding='2rem 0 0 0'>
          <ProfileHeader profileData={userProfileInfo} />
          <ProfileProduct />
          <ProfilePost postState={true} />
        </ContentsLayout>
        <TabMenu currentMenuId={4} />
      </>
    );
  }
};

export default ProfilePage;
const LoadingWrapper = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
`;
const SectionBorder = styled.div`
  height: 6px;
  width: 100%;
  border-top: 0.5px solid var(--border-color);
  border-bottom: 0.5px solid var(--border-color);
  background-color: var(--chat-bg-color);
`;
