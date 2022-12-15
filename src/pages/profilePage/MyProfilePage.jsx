import React from 'react';
import styled from 'styled-components';

import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileProduct from './ProfileProduct/ProfileProduct';
import ProfilePost from './ProfilePost/ProfilePost';

const MyProfilePage = () => {
  return (
    <div>
      <TopBasicNav />
      <ContentsLayout padding='2em 0 0 0'>
        <ProfileHeader />
        <SectionBorder />
        <ProfileProduct />
        <SectionBorder />
        <ProfilePost />
      </ContentsLayout>
      <TabMenu />
    </div>
  );
};

export default MyProfilePage;

const SectionBorder = styled.div`
  height: 6px;
  width: 100%;
  border-top: 0.5px solid var(--border-color);
  border-bottom: 0.5px solid var(--border-color);
  background-color: var(--chat-bg-color);
`;
