import axios from 'axios';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { AuthContextStore } from '../../../context/AuthContext';
import Post from './../../../components/common/Post/Post';
import EmptyPosts from './EmptyPosts';

const PopularPosts = ({ isEmpty, changeEmptyState }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [emptyFeedPosts, setEmptyFeedPosts] = useState(false);
  const [emptyMyPosts, setEmptyMyPosts] = useState(false);
  const [recommendPosts, setRecommendPosts] = useState([]);
  const BASE_URL = 'https://mandarin.api.weniv.co.kr';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getFeedPosts = useCallback(async () => {
    let feedPosts = [];

    await axios
      .get(BASE_URL + `/post/feed?limit=10&skip=${page}`, {
        headers: { Authorization: `Bearer ${userToken}`, 'Content-type': 'application/json' },
      })
      .then((res) => {
        feedPosts = res.data.posts;

        if (feedPosts.length < 5) {
          setEmptyFeedPosts(true);
        }
      });

    return feedPosts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const getMyPosts = useCallback(async () => {
    let myPosts = [];

    await axios
      .get(BASE_URL + `/post/${userAccountname}/userpost?limit=10&skip=${page}`, {
        headers: { Authorization: `Bearer ${userToken}`, 'Content-type': 'application/json' },
      })
      .then((res) => {
        myPosts = res.data.post;

        if (myPosts.length < 5) {
          setEmptyMyPosts(true);
        }
      });

    return myPosts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setIsLoading(true);

    const getPopularPosts = async () => {
      const feedPosts = !emptyFeedPosts ? await getFeedPosts() : [];
      const myPosts = !emptyMyPosts ? await getMyPosts() : [];

      const posts = [...feedPosts, ...myPosts];

      if (posts.length > 0) {
        changeEmptyState(false);

        const sortPosts = sortingPosts(posts);
        setRecommendPosts((prev) => prev.concat(sortPosts));
      }
    };

    const sortingPosts = (posts) => {
      const sortPosts = posts.sort((a, b) => {
        if (a.heartCount + a.commentCount > b.heartCount + b.commentCount) return -1;
        if (a.heartCount + a.commentCount < b.heartCount + b.commentCount) return 1;
        if (a.heartCount > b.heartCount) return -1;
        if (a.heartCount < b.heartCount) return 1;
        if (a.createdAt > b.createdAt) return -1;
        if (a.createdAt < b.createdAt) return 1;
        return 0;
      });

      return sortPosts;
    };

    getPopularPosts();
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getFeedPosts, getMyPosts]);

  useEffect(() => {
    if (!inView || isLoading) {
      return;
    }

    setPage((prev) => prev + 10);
  }, [inView, isLoading]);

  return (
    <PopularPostsSection>
      <Header>
        <Title>오늘의 추천글</Title>
      </Header>
      {isEmpty ? (
        <EmptyPosts />
      ) : (
        <PostWrapper>
          {recommendPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
          {emptyFeedPosts && emptyMyPosts ? <></> : <div ref={ref} />}
        </PostWrapper>
      )}
    </PopularPostsSection>
  );
};

export default PopularPosts;

const PopularPostsSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  border-bottom: 1px solid var(--border-color);
`;

const Title = styled.h2`
  padding: 1.6rem 0 1.6rem 1.6rem;
  font-size: var(--fs-lg);
`;

const PostWrapper = styled.div`
  margin-top: 20px;
`;
