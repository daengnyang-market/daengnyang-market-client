import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContextStore } from '../../../../context/AuthContext';
import Alert from '../Alert';
import ModalLayout from './../ModalLayout';
import { MenuList, MenuItem } from './../Styled';

const CommentModal = ({ closeModal, isMyComment, commentID }) => {
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isReport, setIsReport] = useState(false);
  const [isReportSuccess, setIsReportSuccess] = useState(null);
  const { postid } = useParams();
  const { userToken } = useContext(AuthContextStore);
  const navigate = useNavigate();
  const URL = `https://mandarin.api.weniv.co.kr`;
  console.log('코멘트아이디', commentID);

  // const onClickPageHandler = () => {
  //   navigate(`/post/${postid}`);
  // };

  const closeAlert = () => {
    setIsOpenAlert(false);
  };
  const handleReportClear = () => {
    setIsReport(false);
    setIsReportSuccess(false);
    closeModal();
  };
  const deleteComment = () => {
    axios({
      url: URL + `/post/${postid}/comments/${commentID}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then(() => {
        closeModal();
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  const reportComment = () => {
    axios({
      url: URL + `/post/${postid}/comments/${commentID}/report`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then(() => {
        setIsReport(true);
        setIsReportSuccess(true);
        console.log('성공!!');
      })
      .catch((err) => console.error(err));
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
      {isReport ? (
        <Alert
          summary={isReportSuccess ? '게시글 신고 완료 알림창' : '게시글 신고 실패 알림창'}
          title={isReportSuccess ? '게시글이 신고되었습니다.' : '게시글 신고에 실패하였습니다.'}
          trigger={'확인'}
          tiggerFunc={handleReportClear}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default CommentModal;
