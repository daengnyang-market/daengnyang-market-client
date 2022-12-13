import React from 'react';
import { Link } from 'react-router-dom';

import { TopNavBar, LeftArrow } from './Styled';
import { LEFT_ARROW_ICON } from '../../../styles/CommonIcons';

const TopUploadNav = () => {
  return (
    <TopNavBar>
      <Link to='/'>
        <LeftArrow src={LEFT_ARROW_ICON} alt='뒤로가기버튼' />
        {/* Ms--Disabled-button */}
      </Link>
    </TopNavBar>
  );
};

export default TopUploadNav;
