import React from 'react';
import { useNavigate } from 'react-router-dom';

import { TopNavBar, LeftArrow } from './Styled';
import { LEFT_ARROW_ICON } from '../../../styles/CommonIcons';
import Button from '../Button/Button';

const TopUploadNav = ({ onClick }) => {
  const navigate = useNavigate();

  return (
    <TopNavBar>
      <button onClick={() => navigate(-1)}>
        <LeftArrow src={LEFT_ARROW_ICON} alt='뒤로가기버튼' />
      </button>
      <Button onClickHandler={onClick} size='MS'>
        저장
      </Button>
    </TopNavBar>
  );
};

export default TopUploadNav;
