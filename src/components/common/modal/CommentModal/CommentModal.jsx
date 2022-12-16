import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../Alert';
import ModalLayout from './../ModalLayout';
import { MenuList, MenuItem } from './../Styled';

const CommentModal = ({ closeModal, isMyComment }) => {
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const closeAlert = () => {
    setIsOpenAlert(false);
  };

  const deleteComment = () => {
    console.log('댓글 삭제 로직이 들어갈 위치입니다. 구현시 이 콘솔 로그를 지우고 구현해주세요.');
    closeModal();
  };

  const reportComment = () => {
    console.log('댓글 신고 로직이 들어갈 위치입니다. 구현시 이 콘솔 로그를 지우고 구현해주세요.');
    closeModal();
  };

  return (
    <>
      <ModalLayout closeModal={closeModal} isOpenAlert={isOpenAlert}>
        <MenuList>
          <MenuItem>
            <button type='button' onClick={() => setIsOpenAlert(true)}>
              {isMyComment ? '삭제' : '신고'}
            </button>
          </MenuItem>
        </MenuList>
      </ModalLayout>
      {isOpenAlert ? (
        <Alert
          summary={isMyComment ? '댓글 삭제 알림창' : '댓글 신고 알림창'}
          title={isMyComment ? '댓글을 삭제하시겠어요?' : '댓글을 신고하시겠어요?'}
          trigger={isMyComment ? '삭제' : '신고'}
          tiggerFunc={isMyComment ? deleteComment : reportComment}
          closeAlert={closeAlert}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default CommentModal;
