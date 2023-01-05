import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Alert from '../Alert';
import ModalLayout from './../ModalLayout';
import { MenuList, MenuItem } from './../Styled';

const ChatRoomModal = ({ closeModal }) => {
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const chatId = useParams();
  const navigate = useNavigate();
  const CHAT_TOKEN = process.env.REACT_APP_CHAT_SERVER_TOKEN;
  const closeAlert = () => {
    setIsOpenAlert(false);
  };
  const deleteChatroom = () => {
    const url = `https://mandarin.api.weniv.co.kr`;
    axios({
      url: url + `/post/${chatId.accountname}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${CHAT_TOKEN}`,
        'Content-type': 'application/json',
      },
    })
      .then(() => {
        navigate('/chat');
      })
      .catch((err) => console.error(err));
  };

  const leaveChatRoom = () => {
    deleteChatroom();
    closeModal();
  };

  return (
    <>
      <ModalLayout closeModal={closeModal} isOpenAlert={isOpenAlert}>
        <MenuList>
          <MenuItem>
            <button type='button' onClick={() => setIsOpenAlert(true)}>
              채팅방 나가기
            </button>
          </MenuItem>
        </MenuList>
      </ModalLayout>
      {isOpenAlert ? (
        <Alert
          summary='채팅방 나가기 알림창'
          title='채팅방을 나가시겠어요?'
          trigger='나가기'
          tiggerFunc={leaveChatRoom}
          closeAlert={closeAlert}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default ChatRoomModal;
