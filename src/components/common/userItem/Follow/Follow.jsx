import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../Button/Button';
import UserAccountInfo from '../UserAccountInfo/UserAccountInfo';

const Follow = () => {
  const [isClickCancle, setIsClickCancle] = useState(false);

  return (
    <UserItem>
      <UserAccountInfo />

      <Button
        size='S'
        backgroundColor={isClickCancle ? 'var(--main-bg-color)' : undefined}
        borderColor={isClickCancle ? 'var(--border-color)' : undefined}
        textColor={isClickCancle ? 'var(--sub-text-color)' : undefined}
        onClickHandler={() => setIsClickCancle(!isClickCancle)}
      >
        {isClickCancle ? '취소' : '팔로우'}
      </Button>
    </UserItem>
  );
};

export default Follow;

const UserItem = styled.li`
  display: flex;
  align-items: center;
`;
