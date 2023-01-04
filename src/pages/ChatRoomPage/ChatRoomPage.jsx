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

const ChatRoomPage = () => {
  const { accountname } = useParams();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [chatRoomData, setChatRoomData] = useState();
  const [chatCommentData, setChatCommentData] = useState();
  const [copyChatCommentData, setCopyChatCommentData] = useState();
  const [userId, setUserId] = useState();
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
  useEffect(() => {
    if (chatCommentData) {
      setCopyChatCommentData(chatCommentData.reverse());
      setUserId(chatRoomData.content.split(','));
    }
  }, [chatCommentData]);

  return (
    <ContentsLayout isTabMenu={true} padding='0rem'>
      <ChatRoomContainer>
        {userId &&
          (userId[0] === userAccountname ? <TopTitleNav title={userId[1]} /> : <TopTitleNav title={userId[0]} />)}
        <h2 className='sr-only'>전체 채팅룸 컨텐츠</h2>
        <ChatWrapper>
          <h3 className='sr-only'>채팅</h3>
          {copyChatCommentData ? (
            copyChatCommentData.map((data) => {
              if (data.author.accountname === userAccountname) {
                return <MyChat key={data.id} isImg={false} commentData={data} />;
              } else {
                return <UserChat key={data.id} isImg={false} commentData={data} />;
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
