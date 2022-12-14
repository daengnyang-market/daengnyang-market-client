import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import Alert from '../Alert';
import ModalLayout from './../ModalLayout';
import { AuthContextStore } from '../../../../context/AuthContext';
import { MenuList, MenuItem } from './../Styled';
const PostModal = ({ closeModal, isMyPost, postID }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userToken } = useContext(AuthContextStore);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
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
    navigate(`/post/${postID}/edit`);
  };
  return (
    <>
      <ModalLayout closeModal={closeModal} isOpenAlert={isOpenAlert}>
        <MenuList>
          {isMyPost ? (
            <>
              <MenuItem>
                <button type='button' onClick={() => setIsOpenAlert(true)}>
                  ??????
                </button>
              </MenuItem>
              <MenuItem>
                <button onClick={onClickPageHandler}>??????</button>
              </MenuItem>
            </>
          ) : (
            <MenuItem>
              <button type='button' onClick={() => setIsOpenAlert(true)}>
                ??????
              </button>
            </MenuItem>
          )}
        </MenuList>
      </ModalLayout>
      {isOpenAlert ? (
        <Alert
          summary={isMyPost ? '????????? ?????? ?????????' : '????????? ?????? ?????????'}
          title={isMyPost ? '???????????? ??????????????????????' : '???????????? ??????????????????????'}
          trigger={isMyPost ? '??????' : '??????'}
          tiggerFunc={isMyPost ? deletePost : reportPost}
          closeAlert={closeAlert}
        />
      ) : (
        <></>
      )}
      {isReport ? (
        <Alert
          summary={isReportSuccess ? '????????? ?????? ?????? ?????????' : '????????? ?????? ?????? ?????????'}
          title={isReportSuccess ? '???????????? ?????????????????????.' : '????????? ????????? ?????????????????????.'}
          trigger={'??????'}
          tiggerFunc={handleReportClear}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default PostModal;
