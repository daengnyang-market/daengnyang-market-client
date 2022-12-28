import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { AuthContext, AuthContextStore } from '../../context/AuthContext';
import { useInView } from 'react-intersection-observer';

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

  const url = 'https://mandarin.api.weniv.co.kr';
  const { userToken } = useContext(AuthContextStore);

  const goSearch = () => {
    navigate('/search');
  };

  // 무한 스크롤
  const [numFeed, setNumFeed] = useState(10);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  // 서버에서 피드를 가져오는 함수
  const getUserFeed = useCallback(async () => {
    const option = {
      url: url + `/post/feed/?limit=${numFeed}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    };
    setLoading(true);
    await axios(option)
      .then((res) => {
        setIsLoading(false);
        setLoading(false);
        setIsFollowingPost(res.data.posts);
        console.log(isFollowingPost);
        console.log('useEffect 확인코드 axios');
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  }, [numFeed]);

  // getUserFeed 가 바뀔때마다 서버 요청하는 함수 실행
  useEffect(() => {
    if (userToken) {
      getUserFeed();
      console.log('useEffect 확인코드 getUserFeed ');
    } else {
      navigate('/');
      return;
    }
  }, [userToken, getUserFeed]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고있고(inview === true), 로딩중이 아니라면
    if (inView && !loading) {
      setNumFeed((current) => current + 10);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  }, [inView, loading]);

  // 진짜 마지막에 다다랐을때 실행해줄 코드를 추가해줄 예정.
  // 방법을 고민해보자
  //1. 마지막 게시글 아이디가 새로 불러온 요청의 마지막 게시글 아이디와 똑같다면 axios 호출 멈추기
  //2. 어차피 스크롤 이벤트니까 띠용효과 주기 . 마지막으로 이동하면 스크롤이 위로 올라가게 => 일단 이렇게 구현함

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
                  // isFollowingPost의 마지막 요소라면 ref추가
                  isFollowingPost.length - 1 === i ? (
                    <div key={post.id} ref={ref} />
                  ) : (
                    <div key={post.id}>
                      <Post post={post} />
                    </div>
                  ),
                )}
              </div>
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
