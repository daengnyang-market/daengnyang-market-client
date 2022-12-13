import React from 'react';
import { Link } from 'react-router-dom';
import { TopNavBar, LeftArrow, MoreBtn } from './Styled';

import { LEFT_ARROW_ICON, MORE_ICON } from '../../../styles/CommonIcons';

const TopBasicNav = () => {
  return (
    <TopNavBar>
      <Link to='/'>
        <LeftArrow src={LEFT_ARROW_ICON} alt='뒤로가기 버튼' />
      </Link>
      <MoreBtn>
        <img src={MORE_ICON} alt='더보기 버튼' />
      </MoreBtn>
    </TopNavBar>
  );
};

export default TopBasicNav;
