import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CLOSE_ICON } from '../../../styles/CommonIcons';

const ImageUploadButton = ({ className, setUploadImg, uploadImg, inputRef }) => {
  const [image, setImgfile] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  const splitByComma = (postImages) => {
    const newPostImages = postImages.split(',');
    return newPostImages;
  };

  useEffect(() => {
    if (uploadImg) {
      const newUploadImg = splitByComma(uploadImg);
      setImageUrl(newUploadImg);
      setUploadImg(newUploadImg);
      setImgfile(newUploadImg);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadImg]);

  const handleAddImages = (e) => {
    const Blob = e.target.files[0];
    if (image.length < 3) {
      setImgfile((prevState) => [...prevState, Blob]);
      if (Blob === undefined) {
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(Blob);
      e.target.value = '';
      reader.onload = () => {
        setImageUrl((imageUrl) => [...imageUrl, reader.result]);
      };
    } else {
      alert('사진은 3장까지 업로드 가능합니다.');
    }
  };

  const handleDeleteImage = (index) => {
    const imgArr = image.filter((image, i) => i !== index);
    const imgNameArr = imageUrl.filter((image, i) => i !== index);

    setImgfile([...imgArr]);
    setImageUrl([...imgNameArr]);
  };

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
