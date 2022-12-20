import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { AuthContext, AuthContextStore } from '../../context/AuthContext';

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
  const [isLoading, setIsLoading] = useState(true);

  const url = 'https://mandarin.api.weniv.co.kr';
  // const tempToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWZiYWY0MTdhZTY2NjU4MWM3MzAyMSIsImV4cCI6MTY3NjU5NzIyMSwiaWF0IjoxNjcxNDEzMjIxfQ.H7gXKkMJDOyb0qO3_Zj-aDyFfzIWmVQdeCsyvQ9FEcY`;
  const { userToken } = useContext(AuthContextStore);

  const goSearch = () => {
    navigate('/search');
  };

  useEffect(() => {
    if (userToken) {
      const getUserFeed = async () => {
        const option = {
          url: url + `/post/feed`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        };

        await axios(option)
          .then((res) => {
            setIsLoading(false);
            setIsFollowingPost(res.data.posts);
          })
          .catch((err) => {
            setIsLoading(false);
            console.error(err);
          });
      };

      getUserFeed();
    } else {
      navigate('/');
      return;
    }
  }, [userToken]);

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
                {isFollowingPost.map((post) => {
                  return (
                    <div key={post.id}>
                      <Post post={post} />
                    </div>
                  );
                })}
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
