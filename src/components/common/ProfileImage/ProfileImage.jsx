import React from 'react';
import styled from 'styled-components';
import { PROFILE1_IMAGE, PROFILE2_IMAGE } from '../../../styles/CommonImages';

// * 사용법 - 아래의 3가지 props를 전달해줘야 합니다 *
// src : 프로필 이미지 경로
// alt : 프로필 이미지에 대한 설명 (생략시 기본값: '')
// width : 프로필 이미지의 width size (단위는 px / 생략시 기본값: 36)
// borderSize : 프로필 이미지의 테두리 굵기 (단위는 px / 생략시 기본값 : 0.5)
// isPointer : 마우스 커서를 포인터로 할지, 디폴트로 할지 (boolean 값으로 전달해야함 / 생략시 기본값 : 포인터로 적용)
const ProfileImage = ({ src, alt = '', width = '36', borderWeight = '0.5', isPointer = 'true' }) => {
  const onErrorImg = (e) => {
    e.target.src = PROFILE1_IMAGE;
  };
  return (
    <Image src={src} alt={alt} width={width} borderWeight={borderWeight} isPointer={isPointer} onError={onErrorImg} />
  );
};

export default ProfileImage;

const Image = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  border: ${(props) => props.borderWeight}px solid var(--profile-border-color);
  border-radius: 50%;
  cursor: ${(props) => (props.isPointer ? 'pointer' : 'default')};
  object-fit: cover;
`;
