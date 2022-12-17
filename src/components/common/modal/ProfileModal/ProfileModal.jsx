import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../Alert';
import ModalLayout from './../ModalLayout';
import { MenuList, MenuItem } from './../Styled';

const ProfileModal = ({ closeModal }) => {
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const closeAlert = () => {
    setIsOpenAlert(false);
  };

  const logout = () => {
    console.log('로그아웃 로직이 들어갈 위치입니다. 구현시 이 콘솔 로그를 지우고 구현해주세요.');
    closeModal();
  };

  return (
    <>
      <ModalLayout closeModal={closeModal} isOpenAlert={isOpenAlert}>
        <MenuList>
          <MenuItem>
            <Link to='/profile/edit'>설정 및 개인정보</Link>
          </MenuItem>
          <MenuItem>
            <button type='button' onClick={() => setIsOpenAlert(true)}>
              로그아웃
            </button>
          </MenuItem>
        </MenuList>
      </ModalLayout>
      {isOpenAlert ? (
        <Alert
          summary='로그아웃 알림창'
          title='로그아웃 하시겠어요?'
          trigger='로그아웃'
          tiggerFunc={logout}
          closeAlert={closeAlert}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default ProfileModal;
