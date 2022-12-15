import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import ProfileImage from '../../components/common/ProfileImage/ProfileImage';
import { PROFILE1_IMAGE, PROFILE2_IMAGE } from '../../styles/CommonImages';
import { UPLOAD_FILE_ICON, CLOSE_ICON } from '../../styles/CommonIcons';

// 폼버튼 새로고침 방지
const handleSubmit = (e) => {
  e.preventDefault();
};

const UploadPost = () => {
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);
  return (
    <UploadMain>
      <h2 className='sr-only'>게시글 작성 메인화면</h2>
      <ProfileImage src={PROFILE1_IMAGE} width='42' />
      <PostWrite>
        <h3 className='sr-only'>게시글 작성</h3>
        <PostForm onSubmit={handleSubmit}>
          <PostTextInput
            name='text'
            placeholder='게시글 입력하기...'
            data-value='0'
            autoComplete='off'
            ref={textRef}
            onChange={handleResizeHeight}
            maxLength='200'
          />
          <ImgUploadButton />
        </PostForm>
      </PostWrite>
    </UploadMain>
  );
};

export default UploadPost;

// 이미지 업로드 및 삭제를 위한 컴포넌트
const ImgUploadTag = ({ className }) => {
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };
  console.log(showImages);
  return (
    <>
      {showImages.length > 1 ? (
        <PreviewImgItem>
          {showImages.map((image, id) => (
            <MultipleImgList key={id}>
              <PreviewImg src={image} alt={`${image}-${id}`} />
              <DeletButton onClick={() => handleDeleteImage(id)}></DeletButton>
            </MultipleImgList>
          ))}
        </PreviewImgItem>
      ) : (
        <PreviewImgItem>
          {showImages.map((image, id) => (
            <ImgList key={id}>
              <PreviewImg src={image} alt={`${image}-${id}`} />
              <DeletButton onClick={() => handleDeleteImage(id)}></DeletButton>
            </ImgList>
          ))}
        </PreviewImgItem>
      )}
      <div>
        <label htmlFor='imgUpload' className={className} />
        <input type='file' accept='image/*' id='imgUpload' onChange={handleAddImages} className='sr-only' />
      </div>
    </>
  );
};

const PreviewImg = styled.img`
  border-radius: 10px;
`;

const PreviewImgItem = styled.ul`
  white-space: nowrap;
  margin-left: 13px;
  margin-right: -16px;
  overflow-x: scroll;
`;

const ImgList = styled.li`
  position: relative;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  height: 228px;
  width: 304px;
`;

const MultipleImgList = styled(ImgList)`
  & {
    display: inline-block;
    margin-right: 8px;
    width: 168px;
    height: 126px;
  }
`;

const DeletButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 22px;
  height: 22px;
  background-size: cover;
  background-image: url(${CLOSE_ICON});
`;

const ImgUploadButton = styled(ImgUploadTag)`
  position: fixed;
  margin-left: 266px;
  bottom: 16px;
  width: 50px;
  height: 50px;
  background-image: url(${UPLOAD_FILE_ICON});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  z-index: 100;
`;

const UploadMain = styled.main`
  display: flex;
  padding: 20px 0 20px 16px;
  min-width: 390px;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const PostWrite = styled.article`
  position: relative;
  min-width: 300px;
  width: 100%;
  padding-right: 16px;
  overflow-y: scroll;
`;

const PostForm = styled.form`
  width: 100%;
  height: 100%;
`;

const PostTextInput = styled.textarea`
  width: 100%;
  margin-top: 12px;
  margin-left: 12px;
  word-break: break-all;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  :focus {
    outline: none;
  }
`;
