import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { TopNavBar, LeftArrow, MoreBtn } from './Styled';
import { LEFT_ARROW_ICON, MORE_ICON } from '../../../styles/CommonIcons';

const TopChatNav = () => {
  return (
    <TopNavBar>
      <Link to='/'>
        <LeftArrow src={LEFT_ARROW_ICON} alt='뒤로가기 버튼' />
      </Link>
      <TopNavH3>애월읍 위니브 감귤농장</TopNavH3>
      <MoreBtn>
        <img src={MORE_ICON} alt='더보기 버튼' />
      </MoreBtn>
    </TopNavBar>
  );
};

export default TopChatNav;

const TopNavH3 = styled.h3`
  font-size: var(--fs-md);
  flex-grow: 1;
  margin-left: 1em;
`;
