import React from 'react';
import { Link } from 'react-router-dom';

import { TopNavBar, LeftArrow } from './Styled';
import { LEFT_ARROW_ICON } from '../../../styles/CommonIcons';
import Button from '../Button/Button';

const TopUploadNav = () => {
  return (
    <TopNavBar>
      <Link to='/'>
        <LeftArrow src={LEFT_ARROW_ICON} alt='뒤로가기버튼' />
      </Link>
      <Button size='MS'>저장</Button>
    </TopNavBar>
  );
};

export default TopUploadNav;
