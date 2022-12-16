import React, { useState } from 'react';
import styled from 'styled-components';

import Post from '../../../components/common/Post/Post';
import {
  POST_ALBUM_OFF_ICON,
  POST_ALBUM_ON_ICON,
  POST_LIST_OFF_ICON,
  POST_LIST_ON_ICON,
  LAYERS_ICON,
} from '../../../styles/CommonIcons';

import { EMPTY_POST_IMAGE } from '../../../styles/CommonImages';

const ProfilePost = ({ postState }) => {
  const { isExitPost, setIsExitPost } = useState(true);

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
      {/* 리스트버튼 클릭시 리스트형 포스트 목록, 앨범버튼  클릭시 앨범형 포스트목록 나오게 */}
      {/* <h3 className='sr-only'>리스트형 포스트 목록</h3>
      <PostUl>
        <Post userId='@ weniv_Mandarin' userName='애월읍 위니브 감귤농장' />
        <Post userId='@ weniv_Mandarin' userName='애월읍 위니브 감귤농장' />
        <Post userId='@ weniv_Mandarin' userName='애월읍 위니브 감귤농장' />
      </PostUl> */}
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
      {/* postState가 false일 경우 해당 페이지 나오게 */}
      <NoPost>
        <img src={EMPTY_POST_IMAGE} alt='포스트가 존재하지 않습니다' />
        <span>아직 작성된 게시글이 없어요.</span>
      </NoPost>
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
