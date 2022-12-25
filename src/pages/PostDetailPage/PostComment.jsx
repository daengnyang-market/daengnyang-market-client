import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PROFILE1_IMAGE, PROFILE2_IMAGE } from '../../styles/CommonImages';
import { MORE_SMALL_ICON } from '../../styles/CommonIcons';
import CommentModal from '../../components/common/modal/CommentModal/CommentModal';
import Loading from '../../components/common/Loading/Loading';

const PostComment = ({ post }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isMyComment, setIsMyComment] = useState(true); // 내 댓글인 경우 true, 다른 사람의 댓글인 경우 false가 들어갑니다. (true인 경우 - 삭제 출력, false인 경우 - 신고 출력)
  const [data, setData] = useState();
  useEffect(() => {
    if (post) {
      setData(post);
    }
  }, []);

  const closeModal = () => {
    setIsOpenModal(false);
  };
  // TODO : 댓글작성 시간을 나타내는 함수
  const calcTime = (value) => {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
  };
  return (
    <PostCommentList>
      {data ? (
        data.map((data) => (
          <CommentItem key={data.id}>
            <AuthorInfo>
              <Link to={`/profile/${data.author.accountname}`}>
                <ProfileImg src={data.author.image} alt='프로필 이미지' />
              </Link>
              <Link to='/'>
                <strong>{data.author.username}</strong>
              </Link>
              <span>{calcTime(data.createdAt)}</span>
            </AuthorInfo>
            <CommentText>{data.content}</CommentText>
            <MoreButton onClick={() => setIsOpenModal(true)} />
          </CommentItem>
        ))
      ) : (
        <Loading />
      )}
      {isOpenModal ? <CommentModal closeModal={closeModal} isMyComment={isMyComment} /> : <></>}
    </PostCommentList>
  );
};

export default PostComment;

const PostCommentList = styled.ul`
  height: auto;
  margin-top: 2rem;
  margin-left: 1.2rem;
  margin-right: 2rem;
`;

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
