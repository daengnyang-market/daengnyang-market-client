import React from 'react';
import TopMainNav from './../../components/common/TopNavBar/TopMainNav';
import ContentsLayout from './../../components/layout/ContentsLayout/ContentsLayout';
import TabMenu from './../../components/common/TabMenu/TabMenu';
import CommunityMenu from './CommunityMenu';
import TopTitleNav from '../../components/common/TopNavBar/TopTitleNav';

const CommunityLayout = ({ children, navType = 'mainNav', selectMenuId }) => {
  return (
    <>
      {navType === 'mainNav' ? (
        <TopMainNav title='집사생활' />
      ) : navType === 'titleNav' ? (
        <TopTitleNav title='동물병원 상세 정보' />
      ) : (
        <></>
      )}

      <ContentsLayout padding='0'>
        <CommunityMenu selectMenuId={selectMenuId} />
        {children}
      </ContentsLayout>
      <TabMenu />
    </>
  );
};

export default CommunityLayout;
