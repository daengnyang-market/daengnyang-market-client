import React from 'react';
import styled from 'styled-components';
import TopTitleNav from '../../components/common/TopNavBar/TopTitleNav';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import ChatUploadComment from './ChatUploadComment';
import MyChat from './MyChat';
import UserChat from './UserChat';

const ChatRoomPage = () => {
  return (
    <ContentsLayout isTabMenu={true} padding='0rem'>
      <TopTitleNav title={'아이디'} />
      <ChatRoomContainer>
        <h2 className='sr-only'>전체 채팅룸 컨텐츠</h2>
        <ChatWrapper>
          <h3 className='sr-only'>채팅</h3>
          <MyChat isImg={false} />
          <MyChat isImg={false} />
          <MyChat isImg={false} />
          <UserChat isImg={true} />
          <UserChat isImg={false} />
        </ChatWrapper>
      </ChatRoomContainer>
      <ChatUploadComment />
    </ContentsLayout>
  );
};

export default ChatRoomPage;

const ChatRoomContainer = styled.main`
  position: fixed;
  width: 39rem;
  height: calc(100% - 108px);
  background-color: var(--bg-color);
  overflow-y: scroll;
`;

const ChatWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem 1.6rem;
  min-height: 100%;
`;
