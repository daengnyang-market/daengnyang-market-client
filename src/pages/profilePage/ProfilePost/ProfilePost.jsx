import React from 'react';
import styled from 'styled-components';

import Post from '../../../components/common/Post/Post';
import {
  POST_ALBUM_OFF_ICON,
  POST_ALBUM_ON_ICON,
  POST_LIST_OFF_ICON,
  POST_LIST_ON_ICON,
  LAYERS_ICON,
} from '../../../styles/CommonIcons';

const ProfilePost = () => {
  return (
    <>
      <h2 className='sr-only'>게시물 리스트</h2>
      <PostHeader>
        <ListIcon>
          <strong className='sr-only'>리스트로 보기</strong>
        </ListIcon>
        <AlbumIcon>
          <strong className='sr-only'>앨범으로 보기</strong>
        </AlbumIcon>
      </PostHeader>
      <h3 className='sr-only'>리스트형 포스트 목록</h3>
      <PostUl>
        <Post userId='@ weniv_Mandarin' userName='애월읍 위니브 감귤농장' />
        <Post userId='@ weniv_Mandarin' userName='애월읍 위니브 감귤농장' />
        <Post userId='@ weniv_Mandarin' userName='애월읍 위니브 감귤농장' />
      </PostUl>
      {/* <h3 className='sr-only'>앨범형 포스트 목록</h3>
      <PostGrid>
        <img src='https://picsum.photos/250/250' alt='게시물 썸네일 이미지' />
        <img src='https://picsum.photos/250/250' alt='게시물 썸네일 이미지' />
        <img src='https://picsum.photos/250/250' alt='게시물 썸네일 이미지' />
        <img src='https://picsum.photos/250/250' alt='게시물 썸네일 이미지' />
        <img src='https://picsum.photos/250/250' alt='게시물 썸네일 이미지' />
        <img src='https://picsum.photos/250/250' alt='게시물 썸네일 이미지' />
        <img src='https://picsum.photos/250/250' alt='게시물 썸네일 이미지' />
        <img src='https://picsum.photos/250/250' alt='게시물 썸네일 이미지' />
        <img src='https://picsum.photos/250/250' alt='게시물 썸네일 이미지' />
      </PostGrid> */}
    </>
  );
};

export default ProfilePost;

const PostHeader = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 0.9em 2em;
  border-bottom: 0.5px solid var(--border-color);
  margin-bottom: 1.6em;
`;

const ListIcon = styled.button`
  background: url(${POST_LIST_OFF_ICON}) no-repeat center / 20px;
  width: 26px;
  height: 26px;
`;
const AlbumIcon = styled.button`
  background: url(${POST_ALBUM_OFF_ICON}) no-repeat center / 20px;
  width: 26px;
  height: 26px;
`;

const PostUl = styled.ul``;
const PostGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.8em;
  padding: 0 1.6em;
  margin-bottom: 3em;

  & img {
    width: 114px;
    height: 114px;
    position: relative;
  }
`;
