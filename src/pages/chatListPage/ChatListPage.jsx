import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import ChatList from './ChatList';

const ChatListPage = () => {
  const [serverChat, setServerChat] = useState();
  const navigate = useNavigate();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  useEffect(() => {
    const getMyPost = () => {
      const url = `https://mandarin.api.weniv.co.kr`;
      axios({
        url: url + `/post/aksidkvkc/userpost/?limit=0`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      })
        .then((res) => {
          setServerChat(res.data.post);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getMyPost();
  }, [userToken]);

  return (
    <>
      <TopBasicNav />
      <ContentsLayout>
        <ChatUl>
          {serverChat ? (
            <>
              {serverChat.map((data) => {
                if (data.content.includes(userAccountname)) {
                  return (
                    <button
                      onClick={() => {
                        navigate(`/chat/${data.id}`);
                      }}
                    >
                      <ChatList key={data.id} data={data} />
                    </button>
                  );
                } else {
                  return <></>;
                }
              })}
            </>
          ) : (
            <div>없습니다.</div>
          )}
        </ChatUl>
      </ContentsLayout>
      <TabMenu currentMenuId={1} />
    </>
  );
};

export default ChatListPage;

const ChatUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
