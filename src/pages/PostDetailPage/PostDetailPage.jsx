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
import DetailPost from './DetailPost';
const PostDetailPage = () => {
  // TODO : useParams 사용 가능하게 되면 변경
  // const { postId } = useParams;
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [userData, setUserData] = useState();
  const [postData, setPostData] = useState();
  const [commentsData, setCommentsData] = useState();
  //TODO : 멀티블 axios 한번 다뤄보기
  // const BASE_URL = 'https://mandarin.api.weniv.co.kr/';
  // useEffect(() => {
  //   if ((userToken, userAccountname)) {
  //     const getData = async () => {
  //       const header = { headers: { Authorization: `Bearer ${userToken}`, 'Content-type': 'application/json' } };

  //       await axios
  //         .all(
  //           [axios.get(BASE_URL + `/profile/${userAccountname}`, header)][
  //             axios.get(BASE_URL + 'post/63a2a5f317ae666581dc8f51', header)
  //           ][axios.get(BASE_URL + 'post/63a2a5f317ae666581dc8f51/comments', header)],
  //         )
  //         .then(
  //           axios.spread((res1, res2, res3) => {
  //             setUserData(res1.data.profile);
  //             setPostData(res2.data.post);
  //             setCommentsData(res3.data.comments);
  //           }),
  //           console.log('pass'),
  //         )
  //         .catch((err) => console.log(err));
  //     };
  //     getData();
  //   }
  // }, [userToken, userAccountname]);

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
  // TODO : 세개의 get 요청을 상태관리
  useEffect(() => {
    if ((userToken, userAccountname)) {
      getCommentsData();
      getPostData();
      getUserData();
    }
  }, [userToken, userAccountname]);
  return (
    <>
      {commentsData && userData && postData ? (
        <ContentsLayout isTabMenu={true} padding='2rem 0 0 0'>
          <TopBasicNav />
          <PostViewer>
            <h2 className='sr-only'>Post Item</h2>
            <DetailPost post={postData} />
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
