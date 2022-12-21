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
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const ProfilePost = () => {
  let { accountname } = useParams();
  const navigate = useNavigate();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const location = useLocation();
  // 리스트형 앨범형 전환 버튼
  const [listBtn, setListBtn] = useState(true);
  const [albumBtn, setAlbumBtn] = useState(false);
  const [isRendered, setisRendered] = useState(true);
  const [listClicked, onListClicked] = useState(true);
  const [albumClicked, onAlbumClicked] = useState(false);
  // 포스트 담기
  const [myPostList, setMyPost] = useState([]);

  const handleListBtn = () => {
    setListBtn(true);
    setAlbumBtn(false);
    onListClicked(true);
    onAlbumClicked(false);
  };
  const handleAlbumBtn = () => {
    setListBtn(false);
    setAlbumBtn(true);
    onAlbumClicked(true);
    onListClicked(false);
  };

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
        setMyPost(res.data.post);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setisRendered(true);
    getMyPost();
  }, [userToken]);

  if (!isRendered) {
    <Loading />;
  } else {
    return (
      <>
        <h2 className='sr-only'>게시물 리스트</h2>
        <PostHeader>
          <ListIcon onClick={handleListBtn} clicked={listClicked}>
            <strong className='sr-only'>리스트로 보기</strong>
          </ListIcon>
          <AlbumIcon onClick={handleAlbumBtn} clicked={albumClicked}>
            <strong className='sr-only'>앨범으로 보기</strong>
          </AlbumIcon>
        </PostHeader>
        {myPostList ? (
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
              {myPostList.map((post) => (
                <img key={post.id} src={myPostList.image} alt='썸네일 이미지'></img>
              ))}
            </PostGrid>
          )
        ) : (
          <NoPost>
            <img src={EMPTY_POST_IMAGE} alt='포스트가 존재하지 않습니다' />
            <span>아직 작성된 게시글이 없어요.</span>
          </NoPost>
        )}
      </>
    );
  }
};

export default ProfilePost;

const PostHeader = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 0.9em 2em;
  border-bottom: 0.5px solid var(--border-color);
`;

const PostContents = styled.div``;

const ListIcon = styled.button`
  background: no-repeat center / 20px;
  width: 26px;
  height: 26px;
  background-image: ${(props) => (props.clicked ? `url(${POST_LIST_ON_ICON})` : `url(${POST_LIST_OFF_ICON})`)};
`;
const AlbumIcon = styled.button`
  background: no-repeat center / 20px;
  width: 26px;
  height: 26px;
  background-image: ${(props) => (props.clicked ? `url(${POST_ALBUM_ON_ICON})` : `url(${POST_ALBUM_OFF_ICON})`)};
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

  & img {
    width: 114px;
    height: 114px;
    position: relative;
  }
`;

const NoPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 53em;
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
