import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CommunityMenu = ({ currentMenuId }) => {
  const navigate = useNavigate();
  const menuList = [
    { id: 0, title: '홈', to: '/community' },
    { id: 1, title: '산책 난이도', to: '/community/weather' },
    { id: 2, title: '동물병원', to: '/community/hospital' },
  ];

  const changeMenu = (id) => {
    navigate(menuList[id].to);
  };

  return (
    <MenuList currentMenuId={currentMenuId}>
      {menuList.map(({ id, title }) => (
        <MenuItem key={id} id={id} currentMenuId={currentMenuId}>
          <MenuButton onClick={() => changeMenu(id)}>{title}</MenuButton>
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
  border-bottom: ${(props) => (props.currentMenuId === 0 ? '' : '1px solid var(--border-color);')};
`;

const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: var(--fs-lg);
  font-weight: ${(props) => (props.id === props.currentMenuId ? '500' : '400')};
  color: ${(props) => (props.id === props.currentMenuId ? 'var(--login-bg-color)' : 'var(--text-color)')};
`;

const MenuButton = styled.button`
  &:hover {
    color: var(--main-color);
    transition: color 150ms;
  }
`;
