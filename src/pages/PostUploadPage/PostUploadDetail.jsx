import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { AuthContextStore } from '../../context/AuthContext';
import { UPLOAD_FILE_ICON } from '../../styles/CommonIcons';
import { useNavigate } from 'react-router-dom';
import TopUploadNav from '../../components/common/TopNavBar/TopUploadNav';
import styled from 'styled-components';
import ProfileImage from '../../components/common/ProfileImage/ProfileImage';
import ImageUploadButton from './ImageUploadButton';

const PostUploadDetail = () => {
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [userImg, setUserImg] = useState([]);
  const [uploadImg, setUploadImg] = useState([]);
  const [text, setText] = useState('');
  const [isValidate, setIsValidate] = useState(true);
  const navigate = useNavigate();

  // TODO : 유저 이미지 저장
  useEffect(() => {
    if (userAccountname) {
      axios({
        url: `https://mandarin.api.weniv.co.kr/profile/${userAccountname}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      }).then((response) => {
        setUserImg(response.data.profile.image);
      });
    }
  }, [userAccountname, userToken]);

  // 폼버튼 새로고침 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // TODO : 텍스트의 길이에 맞추어 박스크기 조정
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);

  // TODO : 게시글 텍스트 관리
  const handleChangeText = (e) => {
    setText(e.target.value);
    handleResizeHeight();
  };
  // TODO : 업로드 버튼이 클릭되면 POST 요청
  const onClickUploadHandler = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `https://mandarin.api.weniv.co.kr/post`,
          {
            post: {
              content: `${text}`,
              image: `${uploadImg}`,
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
          navigate('/profile');
        });
    } catch (error) {
      console.log(error);
    }
  };
  // TODO : 텍스트 유무에 따른 버튼활성화
  useEffect(() => {
    if (text !== '' || uploadImg.length > 0) {
      setIsValidate(false);
    } else {
      setIsValidate(true);
    }
  }, [text, uploadImg]);

  return (
    <>
      <TopUploadNav activeButton={isValidate} children={'업로드'} onClick={onClickUploadHandler} />
      <UploadMain>
        <h2 className='sr-only'>게시글 작성 메인화면</h2>
        <ProfileImage src={userImg} width='42' />
        <PostWrite>
          <h3 className='sr-only'>게시글 작성</h3>
          <PostForm onSubmit={handleSubmit}>
            <PostTextInput
              name='text'
              placeholder='게시글 입력하기...'
              data-value='0'
              autoComplete='off'
              ref={textRef}
              onChange={handleChangeText}
              maxLength='200'
            />
            <ImgUploadButton setUploadImg={setUploadImg} />
          </PostForm>
        </PostWrite>
      </UploadMain>
    </>
  );
};

export default PostUploadDetail;

const ImgUploadButton = styled(ImageUploadButton)`
  position: fixed;
  margin-left: 26.6rem;
  bottom: 1.6rem;
  width: 5rem;
  height: 5rem;
  background-image: url(${UPLOAD_FILE_ICON});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  z-index: 100;
`;

const UploadMain = styled.main`
  display: flex;
  padding: 2rem 0 2rem 1.6rem;
  min-width: 39rem;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const PostWrite = styled.article`
  position: relative;
  min-width: 30rem;
  width: 100%;
  padding-right: 1.6rem;
  overflow-y: scroll;
`;

const PostForm = styled.form`
  width: 100%;
  height: 100%;
`;

const PostTextInput = styled.textarea`
  width: 100%;
  margin-top: 1.2rem;
  margin-left: 1.2rem;
  word-break: break-all;
  font-weight: 400;
  font-size: var(--fs-md);
  line-height: 18px;
  ::placeholder {
    color: var(--chat-border-color);
  }
  :focus {
    outline: none;
  }
`;
