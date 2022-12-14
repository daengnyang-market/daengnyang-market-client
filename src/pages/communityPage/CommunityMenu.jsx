import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CommunityMenu = () => {
  return (
    <MenuList>
      <MenuItem>
        <MenuLink to='#'>홈</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to='#'>산책 갈까?</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to='#'>동물병원</MenuLink>
      </MenuItem>
    </MenuList>
  );
};

export default CommunityMenu;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4.8rem;
`;

const MenuItem = styled.li`
  width: 8rem;
  font-size: var(--fs-lg);
  text-align: center;
`;

const MenuLink = styled(Link)`
  &:hover {
    color: var(--login-bg-color);
    transition: color 150ms;
  }
`;
