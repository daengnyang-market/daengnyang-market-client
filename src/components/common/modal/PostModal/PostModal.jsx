import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import Alert from '../Alert';
import ModalLayout from './../ModalLayout';
import { AuthContextStore } from '../../../../context/AuthContext';
import { MenuList, MenuItem } from './../Styled';

const PostModal = ({ closeModal, isMyPost, postID }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userToken } = useContext(AuthContextStore);

  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const { postid } = useParams();
  const navigate = useNavigate();

  const [isReport, setIsReport] = useState(false);
  const [isReportSuccess, setIsReportSuccess] = useState(null);

  const url = `https://mandarin.api.weniv.co.kr`;

  const closeAlert = () => {
    setIsOpenAlert(false);
  };

  const handleReportClear = () => {
    setIsReport(false);
    setIsReportSuccess(null);
    closeModal();
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
        window.location.replace('/profile');
      })
      .catch((err) => console.error(err));
  };

  const reportPost = () => {
    axios({
      url: url + `/post/${postID}/report`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        setIsReport(true);

        if (postID === res.data.report.post) {
          setIsReportSuccess(true);
        } else {
          setIsReportSuccess(false);
        }
      })
      .catch((err) => console.error(err));
  };
  const onClickPageHandler = () => {
    navigate(`/post/${postid}/edit`);
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
                <button onClick={onClickPageHandler}>수정</button>
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

export default PostModal;
