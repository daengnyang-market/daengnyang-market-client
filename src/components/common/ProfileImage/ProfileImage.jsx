import React from 'react';
import styled from 'styled-components';

// * 사용법 - 아래의 3가지 props를 전달해줘야 합니다 *
// src : 프로필 이미지 경로
// alt : 프로필 이미지에 대한 설명 (생략시 기본값: '')
// width : 프로필 이미지의 width size (px은 제외하고 전달해야 합니다 / 생략시 기본값: 36)
const ProfileImage = ({ src, alt = '', width = '36' }) => {
  return <Image src={src} alt={alt} width={width} />;
};

export default ProfileImage;

const Image = styled.img`
  width: ${(props) => props.width}px;
  height: auto;
  border: 2px solid var(--profile-border-color);
  border-radius: 50%;
`;
