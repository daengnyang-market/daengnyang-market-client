import React, { useState } from 'react';
import PaginationCarousel from '../../../components/carousel/PaginationCarousel/PaginationCarousel.jsx';
import {
  ADVERTISING1_IMAGE,
  ADVERTISING2_IMAGE,
  ADVERTISING3_IMAGE,
  ADVERTISING4_IMAGE,
} from './../../../styles/CommonImages';
import PopularPosts from './PopularPosts';
import CommunityLayout from '../CommunityLayout';

const CommunityMainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);

  const advertisingImageList = [
    { id: 0, src: ADVERTISING1_IMAGE, alt: '산책 난이도 서비스 오픈! 실시간 날씨 확인하고 댕댕이랑 산책가자!' },
    { id: 1, src: ADVERTISING2_IMAGE, alt: '집사생활 페이지 런칭! 우리집 댕냥이를 위한 훌륭한 집사 되기' },
    { id: 2, src: ADVERTISING3_IMAGE, alt: '특별 이벤트! 친구 초대하고 애견호텔 무료로 가기' },
    { id: 3, src: ADVERTISING4_IMAGE, alt: '현재 위치에서 가장 가까운 동물병원 찾기 서비스 오픈!' },
  ];

  const changeLoadingState = (loadingState) => {
    setIsLoading(loadingState);
  };

  const changeEmptyState = (emptyState) => {
    setIsEmpty(emptyState);
  };

  return (
    <CommunityLayout currentMenuId={0} fillHeight={isLoading ? true : isEmpty ? true : false}>
      <PaginationCarousel itemList={advertisingImageList} />
      <PopularPosts
        isLoading={isLoading}
        isEmpty={isEmpty}
        changeLoadingState={changeLoadingState}
        changeEmptyState={changeEmptyState}
      />
    </CommunityLayout>
  );
};

export default CommunityMainPage;
