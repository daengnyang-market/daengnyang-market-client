import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';
import axios from 'axios';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import Comment from '../../components/common/Comment/Comment';
import Loading from '../../components/common/Loading/Loading';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import Post from '../../components/common/Post/Post';
import styled from 'styled-components';
import PostComment from './PostComment';
const PostDetailPage = () => {
  // const { postId } = useParams;
  const { userToken } = useContext(AuthContextStore);
  const [postData, setPostData] = useState();
  const [commentsData, setCommentsData] = useState();
  const getPostData = () => {
    axios({
      url: `https://mandarin.api.weniv.co.kr/post/63a2a5f317ae666581dc8f51`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        setPostData(response.data.post);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getCommentsData = () => {
    axios({
      url: `https://mandarin.api.weniv.co.kr/post/63a2a5f317ae666581dc8f51/comments`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        setCommentsData(response.data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (userToken) {
      getPostData();
      getCommentsData();
    }
  }, [userToken]);
  console.log(commentsData);
  return (
    <>
      {postData ? (
        <ContentsLayout isTabMenu={true} padding='2rem 0 0 0'>
          <TopBasicNav />
          <PostViewer>
            <h2 className='sr-only'>Post Item</h2>
            <Post post={postData} />
          </PostViewer>
          <PostCommentList>
            <h2 className='sr-only'>PostComment</h2>
            {commentsData.map((postId, i) => (
              <PostComment key={i} post={postId} />
            ))}
          </PostCommentList>
          <Comment />
        </ContentsLayout>
      ) : (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
    </>
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

const LoadingWrapper = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
