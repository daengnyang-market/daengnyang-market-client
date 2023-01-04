import React from 'react';
import styled from 'styled-components';
import CommunityMenu from './CommunityMenu';
import TopMainNav from './../../components/common/TopNavBar/TopMainNav';
import TabMenu from './../../components/common/TabMenu/TabMenu';
import TopTitleNav from '../../components/common/TopNavBar/TopTitleNav';

const CommunityLayout = ({
  children,
  navType = 'mainNav',
  currentMenuId,
  isViewTabMenu = true,
  fillHeight = false,
  title = '',
}) => {
  return (
    <>
      {navType === 'mainNav' ? (
        <TopMainNav title='집사생활' viewSearchBtn={false} />
      ) : navType === 'titleNav' ? (
        <TopTitleNav title={`${title} 상세 정보`} viewMoreBtn={false} isHospital={true} />
      ) : (
        <></>
      )}

      <CommunityMain fillHeight={fillHeight} navType={navType}>
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
  margin-bottom: ${(props) => (props.navType === 'titleNav' ? '0' : '6rem')};
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.fillHeight ? 'calc(100vh - 50px)' : 'auto')};
`;
