import React, { useState } from 'react';
import TopTitleNav from '../../components/common/TopNavBar/TopTitleNav';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import Follow from '../../components/common/userItem/Follow/Follow';
import styled from 'styled-components';

const FollowListPage = () => {
  return (
    <>
      <TopTitleNav title='Followers' />
      <ContentsLayout padding='2.4rem 1.6rem'>
        <FollowList>
          <Follow />
          <Follow />
          <Follow />
          <Follow />
          <Follow />
          <Follow />
          <Follow />
        </FollowList>
      </ContentsLayout>
      <TabMenu currentMenuId={4} />
    </>
  );
};

export default FollowListPage;

const FollowList = styled.ul`
  & > li:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;
