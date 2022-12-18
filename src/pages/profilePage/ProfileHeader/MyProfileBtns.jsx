import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../../components/common/Button/Button';

const MyProfileBtns = () => {
  const navigate = useNavigate();
  // 프로필수정 버튼 클릭시 동작 기능
  const handleEditProfile = (e) => {
    e.preventDefault();
    navigate('/profile/edit');
  };

  const handleRegistProduct = (e) => {
    e.preventDefault();
    navigate('/product');
  };
  return (
    <MyProfileBtnsStyle>
      <li>
        <Button
          size='M'
          backgroundColor={'var(--main-bg-color)'}
          borderColor={'var(--border-color)'}
          textColor={'var(--sub-text-color)'}
          onClickHandler={handleEditProfile}
        >
          프로필 수정
        </Button>
      </li>
      <li>
        <Button
          size='M'
          backgroundColor={'var(--main-bg-color)'}
          borderColor={'var(--border-color)'}
          textColor={'var(--sub-text-color)'}
          onClickHandler={handleRegistProduct}
        >
          상품 등록
        </Button>
      </li>
    </MyProfileBtnsStyle>
  );
};

export default MyProfileBtns;

const MyProfileBtnsStyle = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 2.4em 0 3.4em 0;
`;
