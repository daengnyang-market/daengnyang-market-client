import React from 'react';
import styled from 'styled-components';
import TopSearchNav from '../../components/common/TopNavBar/TopSearchNav';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import TabMenu from '../../components/common/TabMenu/TabMenu';
const SearchPage = () => {
  return (
    <ContentsLayout isTabMenu={true} padding='0rem'>
      <TopSearchNav />
      <SearchProfileViewer></SearchProfileViewer>
      <TabMenu />
    </ContentsLayout>
  );
};

export default SearchPage;

const SearchProfileViewer = styled.main`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 39rem;
  height: calc(100% - 108px);
  padding: 2rem 1.6rem;
  overflow-y: scroll;
  li {
    margin-bottom: 1.6rem;
  }
`;
