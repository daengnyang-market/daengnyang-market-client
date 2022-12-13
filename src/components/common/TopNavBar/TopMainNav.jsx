import React from 'react';
import styled from 'styled-components';

import { TopNavBar, SearchBtn } from './Styled';
import { SEARCH_ICON } from '../../../styles/CommonIcons';

const TopMainNav = () => {
  return (
    <TopNavBar>
      <TopNavH2>가져도댕냥 피드</TopNavH2>
      <SearchBtn>
        <img src={SEARCH_ICON} alt='검색하기 버튼' />
      </SearchBtn>
    </TopNavBar>
  );
};

export default TopMainNav;

const TopNavH2 = styled.h2`
  font-size: var(--fs-xl);
`;
