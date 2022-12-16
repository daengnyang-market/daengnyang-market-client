import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PROFILE1_IMAGE, PROFILE2_IMAGE } from '../../styles/CommonImages';
import { MORE_SMALL_ICON } from '../../styles/CommonIcons';
import CommentModal from '../../components/common/modal/CommentModal/CommentModal';
const PostComment = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isMyComment, setIsMyComment] = useState(false); // 내 댓글인 경우 true, 다른 사람의 댓글인 경우 false가 들어갑니다. (true인 경우 - 삭제 출력, false인 경우 - 신고 출력)

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <CommentItem>
        <AuthorInfo>
          <Link to='/'>
            <ProfileImg src={PROFILE1_IMAGE} alt='프로필 이미지' />
          </Link>
          <Link to='/'>
            <strong>testID</strong>
          </Link>
          <span>3주전</span>
        </AuthorInfo>
        <CommentText>테스트 텍스트입니다.</CommentText>
        <MoreButton onClick={() => setIsOpenModal(true)} />
      </CommentItem>
      {isOpenModal ? <CommentModal closeModal={closeModal} isMyComment={isMyComment} /> : <></>}
    </>
  );
};

export default PostComment;

const CommentItem = styled.li`
  position: relative;
  margin-bottom: 1.6rem;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.4rem;
  span {
    margin-top: 0.85rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3rem;
    color: #767676;
    ::before {
      content: '·';
      margin-right: 0.4rem;
    }
  }
  strong {
    font-weight: 500;
    font-size: var(--fs-md);
    line-height: 1.8rem;
  }
  a:nth-child(1) {
    margin: 0 1.2rem 0 0;
  }
  a:nth-child(2) {
    margin: 0.6rem 0.6rem 0 0;
  }
`;

const CommentText = styled.p`
  padding-left: 4.8rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-size: 400;
  color: #333333;
`;

const MoreButton = styled.button`
  content: '';
  position: absolute;
  top: 0.5rem;
  right: 0;
  width: 2rem;
  height: 2rem;
  background-image: url(${MORE_SMALL_ICON});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const ProfileImg = styled.img`
  width: 3.6rem;
  height: 3.6rem;
`;
