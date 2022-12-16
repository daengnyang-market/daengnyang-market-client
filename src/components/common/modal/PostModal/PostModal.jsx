import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../Alert';
import ModalLayout from './../ModalLayout';
import { MenuList, MenuItem } from './../Styled';

const PostModal = ({ closeModal }) => {
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isMyPost, setIsMyPost] = useState(true);

  const closeAlert = () => {
    setIsOpenAlert(false);
  };

  const deletePost = () => {
    console.log('게시글 삭제 로직이 들어갈 위치입니다. 구현시 이 콘솔 로그를 지우고 구현해주세요.');
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
