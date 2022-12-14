import React, { useState } from 'react';
import styled from 'styled-components';

import TopMainNav from '../.././components/common/TopNavBar/TopMainNav';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import TabMenu from '../.././components/common/TabMenu/TabMenu';
import Button from '../../components/common/Button/Button';
import Post from '../../components/common/Post/Post';
import { EMPTY_FEED_IMAGE } from '../.././styles/CommonImages';

const FeedPage = () => {
  const [isFollowingPost, setIsFollowingPost] = useState(true);

  return (
    <>
      <TopMainNav title={'가져도댕냥 피드'} />
      <ContentsLayout isTabMenu={true}>
        {isFollowingPost ? (
          <MainFeedStyle>
            <Post userName='' userId='' />
            <Post userName='' userId='' />
          </MainFeedStyle>
        ) : (
          <EmptyFeedStyle>
            <ErrorImg src={EMPTY_FEED_IMAGE} alt='' />
            <span>유저를 검색해 팔로우 해보세요!</span>
            <Button size='M'>검색하기</Button>
          </EmptyFeedStyle>
        )}
      </ContentsLayout>
      <TabMenu />
    </>
  );
};

export default FeedPage;

const MainFeedStyle = styled.main``;

const EmptyFeedStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50vh auto 0;
  transform: translateY(-50%);

  & span {
    margin-top: 2em;
    margin-bottom: 2em;
    font-size: 1.4em;
    color: var(--sub-text-color);
  }
`;

const ErrorImg = styled.img`
  width: 160px;
`;
