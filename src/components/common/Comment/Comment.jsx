import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { AuthContextStore } from '../../../context/AuthContext';
import axios from 'axios';
import ProfileImage from '../ProfileImage/ProfileImage';
import { EffectFlip } from 'swiper';

// 유저의 정보와, 댓글을 작성할 post의 정보를 props로 받는다.
const Comment = ({ user, post }) => {
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [userData, setUserData] = useState();
  const [postData, setPostData] = useState();
  const [commentData, setCommentData] = useState('');
  const [isValidate, setIsValidate] = useState(true);
  // TODO : props 의 정보를 받아오면, 상태변화
  useEffect(() => {
    if (post && user) {
      setUserData(user);
      setPostData(post);
    }
  }, []);
  // TODO : POST 요청하여 댓글 데이터 전송
  const sendCommentData = () => {
    axios
      .post(
        `https://mandarin.api.weniv.co.kr/post/${postData.id}/comments`,
        {
          comment: {
            content: `${commentData}`,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        },
      )
      .then(() => {
        window.location.reload(false);
      });
  };
  // TODO : 댓글존재 여부에 따라, 버튼 활성화 상태변경
  useEffect(() => {
    if (commentData !== '') {
      setIsValidate(false);
    } else {
      setIsValidate(true);
    }
  }, [commentData]);
  // TODO : userData와 postData 가 존재한다면, 클릭이 발생하면 sendCommentData() 실행
  const onClickUploadHandler = (e) => {
    e.preventDefault();
    if ((userData, postData)) {
      sendCommentData();
    }
  };
  return (
    <>
      {userData ? (
        <CommentForm>
          <ProfileImage src={userData.image} alt='프로필 이미지'></ProfileImage>
          <input
            type='text'
            placeholder='댓글 입력하기...'
            onChange={(e) => {
              setCommentData(e.target.value);
            }}
          />
          <Button disabled={isValidate} onClick={onClickUploadHandler}>
            게시
          </Button>
        </CommentForm>
      ) : (
        <div>로딩</div>
      )}
    </>
  );
};

export default Comment;

const colorStyles = css`
  ${(props) =>
    props.disabled === false &&
    css`
      color: var(--login-bg-color);
    `}
`;
const Button = styled.button`
  font-size: 1.4em;
  color: var(--chat-border-color);
  ${colorStyles}
  font-weight: 500;
`;
const CommentForm = styled.form`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 61px;
  padding: 1.3rem 1.6rem;
  background: #fff;
  border-top: 1px solid var(--border-color);
  & input {
    font-size: 1.4em;
    height: 36px;
    flex-grow: 1;
    padding: 0.2rem;
    margin-left: 1.6rem;
    outline: none;
    color: #000;
  }

  & input::placeholder {
    color: var(--chat-border-color);
  }
`;
