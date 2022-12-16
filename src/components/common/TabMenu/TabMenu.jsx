import React from 'react';
import styled from 'styled-components';

import {
  HOME_ICON,
  HOME_FILL_ICON,
  CHAT_ICON,
  CHAT_FILL_ICON,
  EDIT_ICON,
  EDIT_FILL_ICON,
  COMMUNITY_ICON,
  COMMUNITY_FILL_ICON,
  USER_ICON,
  USER_FILL_ICON,
} from '../../../styles/CommonIcons';

const TabMenu = ({ currentMenuId = 0 }) => {
  const menuList = [
    { id: 0, title: '홈', icon: HOME_ICON, fillIcon: HOME_FILL_ICON },
    { id: 1, title: '채팅', icon: CHAT_ICON, fillIcon: CHAT_FILL_ICON },
    { id: 2, title: '게시물 작성', icon: EDIT_ICON, fillIcon: EDIT_FILL_ICON },
    { id: 3, title: '집사생활', icon: COMMUNITY_ICON, fillIcon: COMMUNITY_FILL_ICON },
    { id: 4, title: '프로필', icon: USER_ICON, fillIcon: USER_FILL_ICON },
  ];

  return (
    <TabMenuDiv>
      {menuList.map(({ id, title, icon, fillIcon }) => (
        <TabMenuIconBtn key={id}>
          <img src={id === currentMenuId ? fillIcon : icon} alt='' />
          <TabMenuTitle id={id} currentMenuId={currentMenuId}>
            {title}
          </TabMenuTitle>
        </TabMenuIconBtn>
      ))}
    </TabMenuDiv>
  );
};

export default TabMenu;

const TabMenuDiv = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-bg-color);
  z-index: 1;
  border-top: 1px solid var(--border-color);
`;

const TabMenuIconBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 78px;
  padding: 1.4em 0 0.6em 0;

  & img {
    width: 24px;
    height: 24px;
  }
`;

const TabMenuTitle = styled.span`
  margin-top: 0.6em;
  font-size: 1em;
  color: ${(props) => (props.id === props.currentMenuId ? 'var(--login-bg-color)' : 'var(--sub-text-color)')};
`;
