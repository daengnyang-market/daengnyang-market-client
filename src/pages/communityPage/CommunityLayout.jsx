import React from 'react';
import TopMainNav from './../../components/common/TopNavBar/TopMainNav';
import ContentsLayout from './../../components/layout/ContentsLayout/ContentsLayout';
import TabMenu from './../../components/common/TabMenu/TabMenu';

const CommunityLayout = ({ children }) => {
  return (
    <>
      <TopMainNav title='집사생활' />
      <ContentsLayout padding='0'>{children}</ContentsLayout>
      <TabMenu />
    </>
  );
};

export default CommunityLayout;
