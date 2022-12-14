import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { TopNavBar, LeftArrow, MoreBtn } from './Styled';
import { LEFT_ARROW_ICON, MORE_ICON } from '../../../styles/CommonIcons';

const TopTitleNav = ({ title }) => {
  return (
    <TopNavBar>
      <Link to='/'>
        <LeftArrow src={LEFT_ARROW_ICON} alt='뒤로가기 버튼' />
      </Link>
      <TopNavH2>{title}</TopNavH2>
      <MoreBtn>
        <img src={MORE_ICON} alt='더보기 버튼' />
      </MoreBtn>
    </TopNavBar>
  );
};

export default TopTitleNav;

const TopNavH2 = styled.h2`
  font-size: var(--fs-md);
  flex-grow: 1;
  margin-left: 1em;
`;
