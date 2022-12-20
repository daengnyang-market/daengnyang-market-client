import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading from '../../../components/common/Loading/Loading';
import { AuthContextStore } from '../../../context/AuthContext';
import Post from './../../../components/common/Post/Post';
import EmptyPosts from './EmptyPosts';

const PopularPosts = ({ isLoading, isEmpty, changeLoadingState, changeEmptyState }) => {
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [popularPosts, setPopularPosts] = useState([]);
  const BASE_URL = 'https://mandarin.api.weniv.co.kr';

  useEffect(() => {
    const getFeedPosts = async () => {
      const header = { headers: { Authorization: `Bearer ${userToken}`, 'Content-type': 'application/json' } };

      await axios
        .all([
          axios.get(BASE_URL + '/post/feed', header),
          axios.get(BASE_URL + `/post/${userAccountname}/userpost`, header),
        ])
        .then(
          axios.spread((res1, res2) => {
            const feedPosts = res1.data.posts;
            const myPosts = res2.data.post;
            const posts = [...feedPosts, ...myPosts];

            if (posts.length > 0) {
              changeEmptyState(false);
              sortPopularPosts(posts);
            }

            changeLoadingState(false);
          }),
        );
    };

    const sortPopularPosts = (posts) => {
      const sortPosts = posts.sort((a, b) => {
        if (a.heartCount > b.heartCount) return -1;
        if (a.heartCount < b.heartCount) return 1;
        if (a.commentCount > b.commentCount) return -1;
        if (a.commentCount < b.commentCount) return 1;
        if (a.createdAt > b.createdAt) return -1;
        if (a.createdAt < b.createdAt) return 1;
        return 0;
      });

      setPopularPosts(sortPosts);
    };

    getFeedPosts();
  }, []);

  return (
    <PopularPostsSection>
      <Header>
        <Title>실시간 인기글</Title>
      </Header>
      {isLoading ? (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      ) : isEmpty ? (
        <EmptyPosts />
      ) : (
        <PostWrapper>
          {popularPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
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

const LoadingWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostWrapper = styled.div`
  margin-top: 20px;
`;
