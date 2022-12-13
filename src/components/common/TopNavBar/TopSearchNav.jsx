import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { TopNavBar, LeftArrow } from './Styled';
import { LEFT_ARROW_ICON } from '../../../styles/CommonIcons';

const TopSearchNav = () => {
  return (
    <TopNavBar>
      <Link to='/'>
        <LeftArrow src={LEFT_ARROW_ICON} alt='뒤로가기 버튼' />
      </Link>
      <SearchInput placeholder='계정 검색' />
    </TopNavBar>
  );
};

export default TopSearchNav;

const SearchInput = styled.input`
  width: 316px;
  padding: 0.7em 1.6em;
  background-color: var(--search-bg-color);
  border-radius: 32px;
`;
