import styled from 'styled-components';
import axios from 'axios';
import { AuthContextStore } from '../../../context/AuthContext';
import Post from '../../../components/common/Post/Post';
import React, { useContext, useState, useEffect } from 'react';
import {
  POST_ALBUM_OFF_ICON,
  POST_ALBUM_ON_ICON,
  POST_LIST_OFF_ICON,
  POST_LIST_ON_ICON,
  LAYERS_ICON,
} from '../../../styles/CommonIcons';
import { EMPTY_POST_IMAGE } from '../../../styles/CommonImages';
import Loading from '../../../components/common/Loading/Loading';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';

const ProfilePost = ({ setEmptyPost, emptyProduct }) => {
  let { accountname } = useParams();
  const navigate = useNavigate();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [test, setTest] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  // 리스트형 앨범형 전환 버튼
  const [listBtn, setListBtn] = useState(true);

  // 포스트 담기
  const [myPostList, setMyPost] = useState([]);

  useEffect(() => {
    const getMyPost = () => {
      const url = `https://mandarin.api.weniv.co.kr`;
      axios({
        url: url + `/post/${accountname ? accountname : userAccountname}/userpost`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      })
        .then((res) => {
          setIsLoading(false);
          setMyPost(res.data.post);

          if (res.data.post.length === 0) {
            setEmptyPost(true);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    };
    getMyPost();
  }, [userToken, accountname, userAccountname]);

  // useEffect(() => {
  //   setTest(testFunction(myPostList));
  // }, [myPostList]);

  return (
    <>
      <PostHeader>
        <ListIcon onClick={() => setListBtn(!listBtn)} show={listBtn}>
          <strong className='sr-only'>리스트로 보기</strong>
        </ListIcon>
        <AlbumIcon onClick={() => setListBtn(!listBtn)} show={listBtn}>
          <strong className='sr-only'>앨범으로 보기</strong>
        </AlbumIcon>
      </PostHeader>
      {isLoading ? (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      ) : (
        <>
          <h2 className='sr-only'>게시물 리스트</h2>
          {myPostList.length > 0 ? (
            listBtn === true ? (
              <PostUl>
                <h3 className='sr-only'>리스트형 포스트 목록</h3>
                {myPostList.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </PostUl>
            ) : (
              <PostGrid>
                <h3 className='sr-only'>앨범형 포스트 목록</h3>
                {myPostList.map((post, i) => {
                  return post.image ? (
                    post.image.includes(',') ? (
                      <li>
                        <Link to={`/post/${post.id}`}>
                          <img key={post.id} src={post.image.split(',')[0]} alt='썸네일 이미지' />
                          <img className='layer-icon' src={LAYERS_ICON} alt='레이어 아이콘' />
                        </Link>
                      </li>
                    ) : (
                      <>
                        <Link to={`/post/${post.id}`}>
                          <img key={post.id} src={post.image} alt='썸네일 이미지'></img>
                        </Link>
                      </>
                    )
                  ) : null;
                })}
              </PostGrid>
            )
          ) : (
            <NoPost emptyProduct={emptyProduct}>
              <img src={EMPTY_POST_IMAGE} alt='포스트가 존재하지 않습니다' />
              <span>아직 작성된 게시글이 없어요.</span>
            </NoPost>
          )}
        </>
      )}
    </>
  );
};

export default ProfilePost;

const testFunction = (myPostList) => {
  let arr = [];
  // let imgArr = myPostList[]
  for (let i = 0; i < myPostList.length; i++) {
    for (let j = 0; j < myPostList[i].image.length; j++) {
      arr[i] = myPostList[i].image.split(',');
    }
  }
  return arr;
};

const LoadingWrapper = styled.div`
  margin-top: 30px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostHeader = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 0.9em 2em;
  border-bottom: 0.5px solid var(--border-color);
`;

const ListIcon = styled.button`
  background: no-repeat center / 20px;
  width: 26px;
  height: 26px;
  background-image: ${(props) => (props.show ? `url(${POST_LIST_ON_ICON})` : `url(${POST_LIST_OFF_ICON})`)};
`;
const AlbumIcon = styled.button`
  background: no-repeat center / 20px;
  width: 26px;
  height: 26px;
  background-image: ${(props) => (props.show ? `url(${POST_ALBUM_OFF_ICON})` : `url(${POST_ALBUM_ON_ICON})`)};
`;

const PostUl = styled.ul`
  padding: 1.6em;
`;
const PostGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.8em;
  padding: 1.6em;
  margin-bottom: 3em;
  & li {
    display: block;
    width: min-content;
    position: relative;
  }
  & img {
    width: 114px;
    height: 114px;
  }
  .layer-icon {
    width: 20px;
    height: 20px;
    position: absolute;
    background: no-repeat center / 20px;
    top: 5px;
    right: 5px;
  }
`;

const NoPost = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${(props) => (props.emptyProduct ? '' : 'min-height: 60em;')}
  background-color: var(--chat-bg-color);

  & img {
    width: 160px;
    height: 160px;
    margin-bottom: 2em;
  }

  & span {
    color: var(--sub-text-color);
    font-size: 1.4em;
  }
`;
