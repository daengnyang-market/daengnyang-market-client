import React from 'react';
import styled from 'styled-components';

import {
  HOME_ICON,
  HOME_FILL_ICON,
  CHAT_ICON,
  CHAT_FILL_ICON,
  EDIT_ICON,
  COMMUNITY_ICON,
  COMMUNITY_FILL_ICON,
  USER_ICON,
  USER_FILL_ICON,
} from '../../../styles/CommonIcons';

const TabMenu = () => {
  return (
    <TabMenuDiv>
      <TabMenuIconBtn>
        <img src={HOME_ICON} alt='' />
        <span>홈</span>
      </TabMenuIconBtn>
      <TabMenuIconBtn>
        <img src={CHAT_ICON} alt='' />
        <span>채팅</span>
      </TabMenuIconBtn>
      <TabMenuIconBtn>
        <img src={EDIT_ICON} alt='' />
        <span>게시물 작성</span>
      </TabMenuIconBtn>
      <TabMenuIconBtn>
        <img src={COMMUNITY_ICON} alt='' />
        <span>집사생활</span>
      </TabMenuIconBtn>
      <TabMenuIconBtn>
        <img src={USER_ICON} alt='' />
        <span>프로필</span>
      </TabMenuIconBtn>
    </TabMenuDiv>
  );
};

export default TabMenu;

const TabMenuDiv = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: var(--main-bg-color);
  z-index: 1;
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
  & span {
    margin-top: 0.6em;
    font-size: 1em;
    color: var(--sub-text-color);
  }
`;
