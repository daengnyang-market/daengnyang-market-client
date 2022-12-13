import React from 'react';
import styled from 'styled-components';
import UserAccountInfo from '../UserAccountInfo/UserAccountInfo';

const Follow = () => {
  return (
    <UserItem>
      <UserAccountInfo />

      <button>팔로우</button>
    </UserItem>
  );
};

export default Follow;

const UserItem = styled.li`
  display: flex;
`;
