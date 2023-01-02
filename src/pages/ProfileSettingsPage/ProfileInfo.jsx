import { useState } from 'react';
import styled from 'styled-components';
import ProfileImage from '../../components/common/ProfileImage/ProfileImage';
import { PROFILE1_IMAGE } from '../../styles/CommonImages';
import { UPLOAD_FILE_ICON } from '../../styles/CommonIcons';
import InputUserName from './InputUserName';
import InputAccountName from './InputAccountName';
import InputIntro from './InputIntro';
import imageCompression from 'browser-image-compression';

const ProfileInfo = ({
  onClickStartButtonHandler,
  disabledButton,
  userNameFunction,
  accountNameFunction,
  introFunction,
  imageFunction,
  userName,
  defaultAcconutName,
  accountName,
  intro,
  image,
}) => {
  const onChangeImgInputHandler = (event) => {
    const [file] = event.target.files;

    imageCompression(file, {
      maxSizeMB: 0.08,
      maxWidthOrHeight: 320,
    }).then((compressedFile) => {
      const newFile = new File([compressedFile], file.name, { type: file.type });

      // Blob to Base64
      const readerBlob = new FileReader();
      readerBlob.readAsDataURL(compressedFile);
      readerBlob.onloadend = () => {
        if (imageFunction) {
          imageFunction(readerBlob.result);
        } else {
          setThumbnailImg(readerBlob.result);
        }
      };
      encodeFile(newFile);
      setThumbnailImg(newFile);
    });
  };

  // 업로드 이미지 섬네일
  const [thumbnailImg, setThumbnailImg] = useState('');

  const encodeFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve) => {
      reader.onloadend = () => {
        const thumbnailImgUrl = reader.result;
        setThumbnailImg(thumbnailImgUrl);
        resolve();
      };
    });
  };

  // enter 입력 확인
  const onCheckEnter = (e) => {
    disabledButton === false && e.key === 'Enter' && onClickStartButtonHandler();
  };

  return (
    <>
      <label htmlFor='profileImg'>
        <WrapperImg>
          {thumbnailImg ? (
            <ProfileImage src={thumbnailImg} alt='업로드 이미지' width='110' />
          ) : image ? (
            <ProfileImage src={image} alt='업로드 이미지' width='110' />
          ) : (
            <ProfileImage src={PROFILE1_IMAGE} alt='업로드 이미지' width='110' />
          )}
          <UploadFileIconImg src={UPLOAD_FILE_ICON} alt='' />
        </WrapperImg>
      </label>
      <input
        onChange={(event) => {
          onChangeImgInputHandler(event);
        }}
        className='sr-only'
        type='file'
        id='profileImg'
        accept='image/*'
      />

      <Form onKeyDown={onCheckEnter}>
        <InputUserName
          labelText='사용자 이름'
          inputType='text'
          id='userNameInput'
          placeholder='2~10자 이내여야 합니다.'
          maxLength='10'
          children={'* 2~10자 이내여야 합니다.'}
          userNameFunction={userNameFunction}
          userName={userName}
        />
        <InputAccountName
          labelText='계정 ID'
          inputType='text'
          id='userIdInput'
          placeholder='영문, 숫자, 특수문자(.), (_)만 사용 가능합니다.'
          maxLength='10'
          accountNameFunction={accountNameFunction}
          defaultAcconutName={defaultAcconutName}
          accountName={accountName}
        />
        <InputIntro
          labelText='소개'
          inputType='text'
          id='userIntroInput'
          placeholder='자신과 판매할 상품에 대해 소개해 주세요.'
          maxLength='100'
          introFunction={introFunction}
          intro={intro}
        ></InputIntro>
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
