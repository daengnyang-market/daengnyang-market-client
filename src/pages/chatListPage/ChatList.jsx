import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AuthContextStore } from '../../context/AuthContext';
import { PROFILE1_IMAGE } from '../../styles/CommonImages';
import ProfileImage from '../../components/common/ProfileImage/ProfileImage';

const ChatList = ({ data }) => {
  const [chatCommentData, setChatCommentData] = useState();
  const [opponentId, setOpponentId] = useState();
  const [opponentImg, setOpponentImg] = useState();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  useEffect(() => {
    const getCommentsData = () => {
      axios({
        url: `https://mandarin.api.weniv.co.kr/post/${data.id}/comments`,
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
    getCommentsData();
  }, [data]);
  useEffect(() => {
    if (chatCommentData) {
      for (let i = 0; i < chatCommentData.length; i++) {
        if (chatCommentData[i].author.accountname !== userAccountname) {
          setOpponentId(chatCommentData[i].author.accountname);
          setOpponentImg(chatCommentData[i].author.image);
          break;
        }
      }
    }
  }, [chatCommentData]);
  return (
    <>
      {chatCommentData ? (
        <ChatLi>
          <ProfileImage src={opponentImg} alt='프로필사진' width='42' />
          <NewMeassageAlert />
          <ChatContents className='ellipsis'>
            <strong>{opponentId}</strong>
            {chatCommentData[0] && <span className='ellipsis'>{chatCommentData[0].content}</span>}
          </ChatContents>
          <ChatDate>{}</ChatDate>
        </ChatLi>
      ) : (
        <ChatLi>
          <ProfileImage src={opponentImg} alt='프로필사진' width='42' />
          <NewMeassageAlert />
          <ChatContents className='ellipsis'>
            <strong>{opponentId}</strong>
            <span className='ellipsis'>{}</span>
          </ChatContents>
          <ChatDate>{}</ChatDate>
        </ChatLi>
      )}
    </>
  );
};

export default ChatList;

const NewMeassageAlert = styled.div`
  width: 12px;
  height: 12px;
  background-color: var(--login-bg-color);
  border-radius: 50%;
  position: absolute;
  top: 0px;
  left: 0;
`;

const ChatLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const ChatContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  margin: 0 1.3em;

  & strong {
    font-size: 1.4em;
    font-weight: 400;
    margin: 0.2em 0 0.4em 0;
  }

  & span {
    width: 100%;
    font-size: 1.2em;
    color: var(--sub-text-color);
  }
`;

const ChatDate = styled.span`
  display: block;
  font-size: 1em;
  color: var(--border-color);
  margin-top: 2.6em;
`;
