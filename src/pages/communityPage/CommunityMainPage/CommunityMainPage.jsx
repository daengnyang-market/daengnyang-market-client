import React from 'react';
import TopMainNav from './../../../components/common/TopNavBar/TopMainNav';
import ContentsLayout from './../../../components/layout/ContentsLayout/ContentsLayout';
import TabMenu from './../../../components/common/TabMenu/TabMenu';
import PaginationCarousel from '../../../components/carousel/PaginationCarousel/PaginationCarousel';
import { ADVERTISING1_IMAGE, ADVERTISING2_IMAGE, ADVERTISING3_IMAGE } from './../../../styles/CommonImages';
import CommunityMenu from '../CommunityMenu';
import PopularPosts from './PopularPosts';

const CommunityMainPage = () => {
  const advertisingImageList = [
    { id: 0, src: ADVERTISING1_IMAGE, alt: '산책 갈까 서비스 오픈! 실시간 날씨 확인하고 댕댕이랑 산책가자!' },
    { id: 1, src: ADVERTISING2_IMAGE, alt: '집사생활 페이지 런칭! 우리집 댕냥이를 위한 훌륭한 집사 되기' },
    { id: 2, src: ADVERTISING3_IMAGE, alt: '특별 이벤트! 친구 초대하고 애견호텔 무료로 가기' },
  ];

  return (
    <>
      <TopMainNav title='집사생활' />
      <ContentsLayout padding='0 0 2rem'>
        <CommunityMenu />
        <PaginationCarousel itemList={advertisingImageList} />
        <PopularPosts />
      </ContentsLayout>
      <TabMenu />
    </>
  );
};

export default CommunityMainPage;
