import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';
import styled from 'styled-components';
import TopTitleNav from '../../components/common/TopNavBar/TopTitleNav';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import ChatUploadComment from './ChatUploadComment';
import MyChat from './MyChat';
import UserChat from './UserChat';

// TODO : 채팅하기 버튼을 클릭하면, 포스트를 생성하고, 그 포스트의 id값을 가져온다.
const ChatRoomPage = () => {
  const { accountname } = useParams();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [chatRoomData, setChatRoomData] = useState();
  const [chatCommentData, setChatCommentData] = useState();
  // 가져온 포스트 id 값을 임의로 먼저 지정하였습니다.
  const chatRoomId = accountname;
  const getPostData = () => {
    axios({
      url: `https://mandarin.api.weniv.co.kr/post/${chatRoomId}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        setChatRoomData(response.data.post);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPostData();
  }, []);

  const getCommentsData = () => {
    axios({
      url: `https://mandarin.api.weniv.co.kr/post/${chatRoomId}/comments`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        setChatCommentData(response.data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (chatRoomData) {
      getCommentsData();
    }
  }, [chatRoomData]);

  return (
    <ContentsLayout isTabMenu={true} padding='0rem'>
      <TopTitleNav title={'아이디'} />
      <ChatRoomContainer>
        <h2 className='sr-only'>전체 채팅룸 컨텐츠</h2>
        <ChatWrapper>
          <h3 className='sr-only'>채팅</h3>
          {chatCommentData ? (
            chatCommentData.reverse().map((data) => {
              if (data.author.accountname === userAccountname) {
                return <MyChat isImg={false} commentData={data} />;
              } else {
                return <UserChat isImg={false} commentData={data} />;
              }
            })
          ) : (
            <></>
          )}
        </ChatWrapper>
      </ChatRoomContainer>
      <ChatUploadComment chatRoomId={chatRoomId} />
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
