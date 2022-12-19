import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthContext';
import Alert from '../Alert';
import ModalLayout from './../ModalLayout';
import { MenuList, MenuItem } from './../Styled';

const ProfileModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const closeAlert = () => {
    setIsOpenAlert(false);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/');
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
