import React from 'react';
import styled from 'styled-components';

import Button from '../../../components/common/Button/Button';

const MyProfileBtns = () => {
  return (
    <MyProfileBtnsStyle>
      <li>
        <Button
          size='M'
          backgroundColor={'var(--main-bg-color)'}
          borderColor={'var(--border-color)'}
          textColor={'var(--sub-text-color)'}
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
