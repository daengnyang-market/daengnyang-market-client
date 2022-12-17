import React from 'react';
import styled from 'styled-components';

import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import ProfileHeader from './profileHeader/ProfileHeader';
import ProfileProduct from './ProfileProduct/ProfileProduct';
import ProfilePost from './ProfilePost/ProfilePost';

const ProfilePage = () => {
  return (
    <>
      <TopBasicNav pageType='profile' />
      <ContentsLayout padding='2rem 0 0 0'>
        <ProfileHeader profileState={true} followState={false} />
        <SectionBorder />
        <ProfileProduct />
        <SectionBorder />
        <ProfilePost postState={true} />
      </ContentsLayout>
      <TabMenu />
    </>
  );
};

export default ProfilePage;

const SectionBorder = styled.div`
  height: 6px;
  width: 100%;
  border-top: 0.5px solid var(--border-color);
  border-bottom: 0.5px solid var(--border-color);
  background-color: var(--chat-bg-color);
`;
