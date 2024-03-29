import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { AuthContext, AuthContextStore } from '../../context/AuthContext';
import { useInView } from 'react-intersection-observer';
import TopButton from '../../components/common/Button/TopButton';

import TopMainNav from '../.././components/common/TopNavBar/TopMainNav';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import TabMenu from '../.././components/common/TabMenu/TabMenu';
import Button from '../../components/common/Button/Button';
import Post from '../../components/common/Post/Post';
import { EMPTY_FEED_IMAGE } from '../.././styles/CommonImages';
import Loading from '../../components/common/Loading/Loading';

const FeedPage = () => {
  const navigate = useNavigate();
  const [isFollowingPost, setIsFollowingPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { userToken } = useContext(AuthContextStore);

  const goSearch = () => {
    navigate('/search');
  };

  const [numFeed, setNumFeed] = useState(0);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [ref, inView] = useInView();

  const getUserFeed = useCallback(async () => {
    const url = 'https://mandarin.api.weniv.co.kr';
    const option = {
      url: url + `/post/feed/?limit=10&skip=${numFeed}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    };
    setLoading(true);

    await axios(option)
      .then((res) => {
        setIsFollowingPost(isFollowingPost.concat(res.data.posts));
        setLoading(false);
        setIsLoading(false);
        if (res.data.posts.length < 10) {
          setDone(true);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numFeed]);

  useEffect(() => {
    if (!done) {
      getUserFeed();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numFeed]);

  useEffect(() => {
    if (inView && !loading) {
      setNumFeed((current) => current + 10);
    }
  }, [inView, loading]);

  return (
    <>
      {isLoading ? (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      ) : (
        <>
          <TopMainNav title={'가져도댕냥 피드'} />
          {isFollowingPost.length > 0 ? (
            <ContentsLayout>
              <div>
                {isFollowingPost.map((post, i) =>
                  isFollowingPost.length - 1 === i ? (
                    <div key={post.id} ref={ref}>
                      <Post post={post} />
                    </div>
                  ) : (
                    <div key={post.id}>
                      <Post post={post} />
                    </div>
                  ),
                )}
              </div>
              <TopButton />
            </ContentsLayout>
          ) : (
            <EmptyFeedStyle>
              <ErrorImg src={EMPTY_FEED_IMAGE} alt='에러 이미지' />
              <span>유저를 검색해 팔로우 해보세요!</span>
              <Button size='M' onClickHandler={goSearch}>
                검색하기
              </Button>
            </EmptyFeedStyle>
          )}
          <TabMenu />
        </>
      )}
    </>
  );
};

export default FeedPage;

const LoadingWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const EmptyFeedStyle = styled.div`
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
