import React from 'react';
import styled from 'styled-components';

import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import YourHeader from './YourHeader/YourHeader';
import YourProduct from './YourProduct/YourProduct';
import YourPost from './YourPost/YourPost';

const YourProfile = () => {
  return (
    <>
      <TopBasicNav />
      <ContentsLayout padding='2rem 0 0 0'>
        <YourHeader></YourHeader>
        <SectionBorder />
        <YourProduct></YourProduct>
        <SectionBorder />
        <YourPost></YourPost>
      </ContentsLayout>
      <TabMenu />
    </>
  );
};

export default YourProfile;

const SectionBorder = styled.div`
  height: 6px;
  width: 100%;
  border-top: 0.5px solid var(--border-color);
  border-bottom: 0.5px solid var(--border-color);
  background-color: var(--chat-bg-color);
`;
