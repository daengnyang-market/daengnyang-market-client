import React from 'react';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import Comment from '../../components/common/Comment/Comment';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import Post from '../../components/common/Post/Post';
import styled from 'styled-components';
import PostComment from './PostComment';

const PostDetailPage = () => {
  return (
    <ContentsLayout isTabMenu={true} padding='2rem 0 0 0'>
      <TopBasicNav />
      <PostViewer>
        <h2 className='sr-only'>Post Item</h2>
        <Post userName={'Test'} userId={'@test'} />
      </PostViewer>
      <PostCommentList>
        <h2 className='sr-only'>PostComment</h2>
        <PostComment />
        <PostComment />
        <PostComment />
        <PostComment />
      </PostCommentList>
      <Comment />
    </ContentsLayout>
  );
};

export default PostDetailPage;

const PostViewer = styled.section`
  height: auto;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
`;

const PostCommentList = styled.ul`
  height: auto;
  margin-top: 2rem;
  margin-left: 1.2rem;
  margin-right: 2rem;
`;
