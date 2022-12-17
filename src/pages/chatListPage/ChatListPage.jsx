import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import ChatList from './ChatList';

const ChatListPage = () => {
  return (
    <>
      <TopBasicNav />
      <ContentsLayout>
        <ChatUl>
          <Link to='/chat/1'>
            <ChatList name='승연님' content='안녕하세요 우리는 반려동물 중고용품을 거래하는 ' date='2022.10.03' />
          </Link>
          <Link to='/chat/2'>
            <ChatList name='의호님' content='안녕하세요' date='2022.10.03' />
          </Link>
          <Link to='/chat/3'>
            <ChatList name='광렬님' content='안녕하세요' date='2022.10.03' />
          </Link>
        </ChatUl>
      </ContentsLayout>
      <TabMenu />
    </>
  );
};

export default ChatListPage;

const ChatUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
