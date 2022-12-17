import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { TopNavBar, LeftArrow } from './Styled';
import { LEFT_ARROW_ICON } from '../../../styles/CommonIcons';

const TopSearchNav = () => {
  const navigate = useNavigate();

  return (
    <TopNavBar>
      <button onClick={() => navigate(-1)}>
        <LeftArrow src={LEFT_ARROW_ICON} alt='뒤로가기 버튼' />
      </button>
      <SearchInput placeholder='계정 검색' />
    </TopNavBar>
  );
};

export default TopSearchNav;

const SearchInput = styled.input`
  max-width: 316px;
  width: 100%;
  height: 32px;
  padding: 0.7em 1.6em;
  background-color: var(--search-bg-color);
  font-size: var(--fs-md);
  ::placeholder {
    color: var(--chat-border-color);
  }
  :focus {
    outline: none;
  }
  border-radius: 32px;
`;
