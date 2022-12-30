import styled from 'styled-components';
import axios from 'axios';
import { AuthContextStore } from '../../../context/AuthContext';
import Post from '../../../components/common/Post/Post';
import React, { useContext, useState, useEffect, useCallback } from 'react';
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
import { useInView } from 'react-intersection-observer';

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
  const [myPostList, setMyPostList] = useState([]);
  // 무한 스크롤
  const [numPost, setNumPost] = useState(0);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [ref, inView] = useInView();

  const getPost = useCallback(async () => {
    // TODO: 서버에서 포스트 가져오는 함수
    const url = `https://mandarin.api.weniv.co.kr`;
    const option = {
      url: url + `/post/${accountname ? accountname : userAccountname}/userpost/?limit=10&skip=${numPost}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    };
    setLoading(true);

    await axios(option)
      .then((res) => {
        setMyPostList(myPostList.concat(res.data.post));
        setLoading(false);
        setIsLoading(false);
        if (res.data.post.length === 0) {
          setEmptyPost(true);
        } else if (res.data.post.length < 10) {
          setDone(true);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [numPost]);

  useEffect(() => {
    // TODO : 새로 받아온 포스트 배열 개수가 10개 미만일때 스크롤 멈추기
    if (!done) {
      getPost();
    }
  }, [numPost]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고있고(inview === true), 로딩중이 아니라면
    if (inView && !loading) {
      setNumPost((current) => current + 10);
    }
  }, [inView, loading]);

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
                {myPostList.map((post, i) =>
                  myPostList.length - 1 === i ? (
                    <div key={post.id} ref={ref} />
                  ) : (
                    <div key={post.id}>
                      <Post key={post.id} post={post} />
                    </div>
                  ),
                )}
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
