import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';
import axios from 'axios';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import Comment from '../../components/common/Comment/Comment';
import Loading from '../../components/common/Loading/Loading';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import styled from 'styled-components';
import PostComment from './PostComment';
import Post from '../../components/common/Post/Post';

const PostDetailPage = () => {
  const { postid } = useParams();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [userData, setUserData] = useState();
  const [postData, setPostData] = useState();
  const [commentsData, setCommentsData] = useState();

  const getUserData = () => {
    axios({
      url: `https://mandarin.api.weniv.co.kr/profile/${userAccountname}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        setUserData(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPostData = () => {
    axios({
      url: `https://mandarin.api.weniv.co.kr/post/${postid}`,
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
      url: `https://mandarin.api.weniv.co.kr/post/${postid}/comments`,
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
    if ((userToken, userAccountname, postid)) {
      getCommentsData();
      getPostData();
      getUserData();
    }
  }, [userToken, userAccountname, postid]);

  return (
    <>
      {commentsData && userData && postData ? (
        <ContentsLayout isTabMenu={true} padding='2rem 0 0 0'>
          <TopBasicNav />
          <PostViewer>
            <h2 className='sr-only'>Post Item</h2>
            <Post post={postData} />
          </PostViewer>
          <h2 className='sr-only'>PostComment</h2>
          <PostComment post={commentsData} />
          <Comment user={userData} post={postData} />
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

const LoadingWrapper = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
