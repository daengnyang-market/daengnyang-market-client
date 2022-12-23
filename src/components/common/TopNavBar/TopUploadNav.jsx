import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { TopNavBar, LeftArrow } from './Styled';
import { LEFT_ARROW_ICON } from '../../../styles/CommonIcons';
import Button from '../Button/Button';

const TopUploadNav = ({ onClick, activeButton, activeModButton }) => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <TopNavBar>
      <button onClick={() => navigate(-1)}>
        <LeftArrow src={LEFT_ARROW_ICON} alt='뒤로가기버튼' />
      </button>
      {typeof params.productid === `string` ? (
        <Button disabled={activeModButton} onClickHandler={onClick} size='MS'>
          저장
        </Button>
      ) : (
        <Button disabled={activeButton} onClickHandler={onClick} size='MS'>
          저장
        </Button>
      )}
    </TopNavBar>
  );
};

export default TopUploadNav;
