import React, { useState } from 'react';
import styled from 'styled-components';
import { CLOSE_ICON } from '../../styles/CommonIcons';

const ImageUploadButton = ({ className, setUploadImg }) => {
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    const currentImageUrl = URL.createObjectURL(imageLists[0]);
    imageUrlLists.push(currentImageUrl);

    if (showImages.length > 2) {
      alert('3개까지만 선택 가능합니다!');
    } else {
      setShowImages(imageUrlLists);
    }
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  setUploadImg(showImages);
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
