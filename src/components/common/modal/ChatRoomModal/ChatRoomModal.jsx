import React, { useState } from 'react';
import Alert from '../Alert';
import ModalLayout from './../ModalLayout';
import { MenuList, MenuItem } from './../Styled';

const ChatRoomModal = ({ closeModal }) => {
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const closeAlert = () => {
    setIsOpenAlert(false);
  };

  const leaveChatRoom = () => {
    console.log('채팅방 나가기 로직이 들어갈 위치입니다. 구현시 이 콘솔 로그를 지우고 구현해주세요.');
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
