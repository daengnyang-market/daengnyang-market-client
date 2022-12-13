import React from 'react';
import styled from 'styled-components';
import Button from '../../Button/Button';
import UserAccountInfo from '../UserAccountInfo/UserAccountInfo';

const Follow = () => {
  return (
    <UserItem>
      <UserAccountInfo />

      <Button size='S'>팔로우</Button>
    </UserItem>
  );
};

export default Follow;

const UserItem = styled.li`
  display: flex;
  align-items: center;
`;
