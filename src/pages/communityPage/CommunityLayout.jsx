import React from 'react';
import styled from 'styled-components';
import TopMainNav from './../../components/common/TopNavBar/TopMainNav';
import TabMenu from './../../components/common/TabMenu/TabMenu';
import CommunityMenu from './CommunityMenu';
import TopTitleNav from '../../components/common/TopNavBar/TopTitleNav';

const CommunityLayout = ({
  children,
  navType = 'mainNav',
  currentMenuId,
  isViewTabMenu = true,
  fillHeight = false,
}) => {
  return (
    <>
      {navType === 'mainNav' ? (
        <TopMainNav title='집사생활' viewSearchBtn={false} />
      ) : navType === 'titleNav' ? (
        <TopTitleNav title='동물병원 상세 정보' viewMoreBtn={false} />
      ) : (
        <></>
      )}

      <CommunityMain fillHeight={fillHeight}>
        <CommunityMenu currentMenuId={currentMenuId} />
        {children}
      </CommunityMain>
      {isViewTabMenu ? <TabMenu currentMenuId={3} /> : <></>}
    </>
  );
};

export default CommunityLayout;

const CommunityMain = styled.main`
  margin-top: 4.8rem;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.fillHeight ? 'calc(100vh - 62.5px)' : 'auto')};
`;
