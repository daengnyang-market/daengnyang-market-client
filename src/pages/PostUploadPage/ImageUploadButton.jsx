import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CLOSE_ICON } from '../../styles/CommonIcons';

const testFunction = (postImages) => {
  const newPostImages = postImages.split(',');
  return newPostImages;
};

const ImageUploadButton = ({ className, setUploadImg, uploadImg, inputRef }) => {
  const [image, setImgfile] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [copyUploadImg, setCopyUploadImg] = useState([]);

  console.log('처음', uploadImg);
  useEffect(() => {
    if (uploadImg) {
      const newUploadImg = testFunction(uploadImg);
      if (newUploadImg.length > 1) {
        setImageUrl(newUploadImg);
        setUploadImg(newUploadImg);
        setImgfile(newUploadImg);
      } else {
        setImageUrl(newUploadImg);
        setUploadImg(newUploadImg);
        setImgfile(newUploadImg);
      }
    }
    return () => {
      console.log('끝');
    };
  }, [uploadImg]);

  // 이미지 상대경로 저장
  const handleAddImages = (e) => {
    const Blob = e.target.files[0];

    setImgfile((prevState) => [...prevState, Blob]);
    if (Blob === undefined) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(Blob);
    e.target.value = '';
    reader.onload = () => {
      if (imageUrl.length > 2) {
        alert('사진은 3장까지 업로드 가능합니다.');
      } else {
        setImageUrl((imageUrl) => [...imageUrl, reader.result]);
      }
    };
  };

  console.log('url', imageUrl);
  console.log('image', image);

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (index) => {
    const imgArr = image.filter((image, i) => i !== index);
    const imgNameArr = imageUrl.filter((image, i) => i !== index);

    setImgfile([...imgArr]);
    setImageUrl([...imgNameArr]);
    // setUploadImg([...imgArr]);
  };

  // 부모요소에 이미지 전달
  setUploadImg(image);
  return (
    <>
      {imageUrl.length === 0 ? null : (
        <PreviewImgItem>
          {imageUrl.length > 1 ? (
            imageUrl.map((image, i) => {
              return (
                <MultipleImgList key={i}>
                  <PreviewImg src={image} alt={`${image}-${i}`} />
                  <DeletButton onClick={() => handleDeleteImage(i)}></DeletButton>
                </MultipleImgList>
              );
            })
          ) : (
            <ImgList>
              <PreviewImg src={imageUrl} alt={`${imageUrl}`} />
              <DeletButton onClick={() => handleDeleteImage(0)}></DeletButton>
            </ImgList>
          )}
        </PreviewImgItem>
      )}
      <div>
        <label htmlFor='imgUpload' className={className} />
        <input
          type='file'
          accept='image/*'
          id='imgUpload'
          ref={inputRef}
          onChange={handleAddImages}
          className='sr-only'
        />
      </div>
    </>
  );
};

export default ImageUploadButton;

const PreviewImgItem = styled.ul`
  white-space: nowrap;
  margin-left: 1.3rem;
  margin-right: -1.6rem;
  overflow-x: scroll;
`;

const ImgList = styled.li`
  position: relative;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  height: 22.8rem;
  width: 30.4rem;
`;

const MultipleImgList = styled(ImgList)`
  & {
    display: inline-block;
    margin-right: 8px;
    width: 16.8rem;
    height: 12.6rem;
  }
`;

const PreviewImg = styled.img`
  border-radius: 10px;
`;

const DeletButton = styled.button`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  width: 2.2rem;
  height: 2.2rem;
  background-size: cover;
  background-image: url(${CLOSE_ICON});
`;
