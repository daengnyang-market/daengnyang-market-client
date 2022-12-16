import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CommunityMenu = ({ selectMenuId }) => {
  const menuList = [
    { id: 0, title: '홈', to: '#' },
    { id: 1, title: '산책 난이도', to: '#' },
    { id: 2, title: '동물병원', to: '#' },
  ];

  return (
    <MenuList>
      {menuList.map(({ id, title, to }) => (
        <MenuItem key={id} id={id} selectMenuId={selectMenuId}>
          <MenuLink to={to}>{title}</MenuLink>
        </MenuItem>
      ))}
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: var(--fs-lg);
  font-weight: ${(props) => (props.id === props.selectMenuId ? '500' : '400')};
  color: ${(props) => (props.id === props.selectMenuId ? 'var(--login-bg-color)' : 'var(--text-color)')};
`;

const MenuLink = styled(Link)`
  &:hover {
    color: var(--main-color);
    transition: color 150ms;
  }
`;
