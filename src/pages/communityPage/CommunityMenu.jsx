import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CommunityMenu = ({ currentMenuId }) => {
  const navigate = useNavigate();
  const menuList = [
    { id: 0, title: '홈', to: '#' },
    { id: 1, title: '산책 난이도', to: '#' },
    { id: 2, title: '동물병원', to: '#' },
  ];

  const changeMenu = (id) => {
    switch (id) {
      case 0:
        navigate('/community');
        break;

      case 1:
        navigate('/community/weather');
        break;

      case 2:
        navigate('/community/hospital');
        break;

      default:
    }
  };

  return (
    <MenuList>
      {menuList.map(({ id, title, to }) => (
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
