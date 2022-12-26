import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Alert from '../Alert';
import ModalLayout from './../ModalLayout';
import { MenuList, MenuItem } from './../Styled';
import { AuthContextStore } from '../../../../context/AuthContext';

const PostModal = ({ closeModal, isMyPost, postID }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userToken, userAccountname } = useContext(AuthContextStore);

  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const url = `https://mandarin.api.weniv.co.kr`;

  const closeAlert = () => {
    setIsOpenAlert(false);
  };

  const deletePost = () => {
    axios({
      url: url + `/post/${postID}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        console.log('삭제완료');
        window.location.replace('/profile');
      })
      .catch((err) => console.error(err));
    closeModal();
  };

  const reportPost = () => {
    console.log('게시글 신고 로직이 들어갈 위치입니다. 구현시 이 콘솔 로그를 지우고 구현해주세요.');
    closeModal();
  };

  return (
    <>
      <ModalLayout closeModal={closeModal} isOpenAlert={isOpenAlert}>
        <MenuList>
          {isMyPost ? (
            <>
              <MenuItem>
                <button type='button' onClick={() => setIsOpenAlert(true)}>
                  삭제
                </button>
              </MenuItem>
              <MenuItem>
                <Link to='#'>수정</Link>
              </MenuItem>
            </>
          ) : (
            <MenuItem>
              <button type='button' onClick={() => setIsOpenAlert(true)}>
                신고
              </button>
            </MenuItem>
          )}
        </MenuList>
      </ModalLayout>
      {isOpenAlert ? (
        <Alert
          summary={isMyPost ? '게시글 삭제 알림창' : '게시글 신고 알림창'}
          title={isMyPost ? '게시글을 삭제하시겠어요?' : '게시글을 신고하시겠어요?'}
          trigger={isMyPost ? '삭제' : '신고'}
          tiggerFunc={isMyPost ? deletePost : reportPost}
          closeAlert={closeAlert}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default PostModal;
