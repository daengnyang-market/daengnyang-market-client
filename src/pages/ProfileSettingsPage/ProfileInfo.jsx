import { useState } from 'react';
import styled from 'styled-components';
import ProfileImage from '../../components/common/ProfileImage/ProfileImage';
import { PROFILE1_IMAGE } from '../../styles/CommonImages';
import { UPLOAD_FILE_ICON } from '../../styles/CommonIcons';
import InputUserName from './InputUserName';
import InputUserId from './InputUserId';
import InputUserDescription from './InputUserDescription';

const ProfileInfo = () => {
  // 업로드 이미지 섬네일
  const [thumbnailImg, setThumbnailImg] = useState('');

  const onChangeInputHandler = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onloadend = () => {
      const thumbnailImgUrl = reader.result;

      if (thumbnailImgUrl) {
        setThumbnailImg([thumbnailImgUrl]);
      }
    };
  };

  return (
    <>
      <label htmlFor='profileImg'>
        <WrapperImg>
          {thumbnailImg ? (
            <ProfileImage src={thumbnailImg} alt='업로드 이미지' width='110' />
          ) : (
            <ProfileImage src={PROFILE1_IMAGE} alt='업로드 이미지' width='110' />
          )}
          <UploadFileIconImg src={UPLOAD_FILE_ICON} alt='' />
        </WrapperImg>
      </label>
      <input onChange={onChangeInputHandler} className='sr-only' type='file' id='profileImg' accept='image/*' />

      {/* {thumbnailImg ? <Img src={thumbnailImg} alt='' /> : ''} */}

      <Form>
        <InputUserName
          labelText='사용자 이름'
          inputType='text'
          id='userNameInput'
          placeholder='2~10자 이내여야 합니다.'
          maxLength='10'
          children={'* 2~10자 이내여야 합니다.'}
        />
        <InputUserId
          labelText='계정 ID'
          inputType='text'
          id='userIdInput'
          placeholder='영문, 숫자, 특수문자(,), (_)만 사용 가능합니다.'
          children1={'* 영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.'}
          children2={'* 이미 사용 중인 ID입니다.'}
          maxLength='10'
        />
        <InputUserDescription
          labelText='소개'
          inputType='text'
          id='userIntroInput'
          placeholder='자신과 판매할 상품에 대해 소개해 주세요.'
          maxLength='25'
        ></InputUserDescription>
      </Form>
    </>
  );
};

export default ProfileInfo;

const WrapperImg = styled.div`
  position: relative;
  margin-bottom: 3rem;
`;

const UploadFileIconImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 36px;
  height: 36px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  margin-bottom: 3rem;
`;
