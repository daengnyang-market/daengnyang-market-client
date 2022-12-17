import React from 'react';
import styled from 'styled-components';

import { TopNavBar, SearchBtn } from './Styled';
import { SEARCH_ICON } from '../../../styles/CommonIcons';
import { useNavigate } from 'react-router-dom';

const TopMainNav = ({ title, viewSearchBtn = true }) => {
  const navigate = useNavigate();

  return (
    <TopNavBar>
      <TopNavH1>{title}</TopNavH1>
      {viewSearchBtn ? (
        <SearchBtn onClick={() => navigate('/search')}>
          <img src={SEARCH_ICON} alt='검색하기 버튼' />
        </SearchBtn>
      ) : (
        <></>
      )}
    </TopNavBar>
  );
};

export default TopMainNav;

const TopNavH1 = styled.h1`
  font-size: var(--fs-xl);
`;
