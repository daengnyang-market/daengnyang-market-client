import { useState } from 'react';
import styled from 'styled-components';
import ProfileImage from '../ProfileImage/ProfileImage';
import { PROFILE1_IMAGE } from '../../../styles/CommonImages';
import { MORE_SMALL_ICON, HEART_ICON, HEART_FILL_ICON, REPLY_ICON } from '../../../styles/CommonIcons';
import PostModal from '../modal/PostModal/PostModal';

const Post = ({ userName, userId, content, img }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isMyPost, setIsMyPost] = useState(true); // 내 게시글인 경우 true, 다른 사람의 게시글인 경우 false가 들어갑니다. (true인 경우 - 삭제/수정 출력, false인 경우 - 신고 출력)

  const [contentImg, setContentImg] = useState(true);

  const [like, setLike] = useState(false);
  const onClickLikeButtonHandler = () => {
    setLike(!like);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <WrapperDiv>
        <UserInfoWrapperDiv>
          <ProfileImage src={img} alt='프로필 이미지' width='42' />
          <UserInfoDiv>
            <UserName>{userName}</UserName>
            <UserId>{userId}</UserId>
          </UserInfoDiv>
          <MoreSmallButton onClick={() => setIsOpenModal(true)}>
            <img src={MORE_SMALL_ICON} alt='더보기' />
          </MoreSmallButton>
        </UserInfoWrapperDiv>
        <ContentWrapperDiv>
          <ContentText>{content}</ContentText>
          {contentImg === true ? <ContentImg src={PROFILE1_IMAGE} alt='프로필 이미지' /> : <></>}
          <Div>
            <LikeButton like={like} onClick={onClickLikeButtonHandler}>
              <span className='sr-only'>{like ? '좋아요 취소' : '좋아요'}</span>
            </LikeButton>
            <LikeSpan>0</LikeSpan>
            <ChatImg src={REPLY_ICON} alt='채팅' />
            <ChatSpan>0</ChatSpan>
          </Div>
          <DateP>2023년 1월 6일</DateP>
        </ContentWrapperDiv>
      </WrapperDiv>
      {isOpenModal ? <PostModal closeModal={closeModal} isMyPost={isMyPost} /> : <></>}
    </>
  );
};

export default Post;

const WrapperDiv = styled.div`
  width: 35.8rem;
  margin: 0 auto 2rem;
`;

const UserInfoWrapperDiv = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`;

const UserInfoDiv = styled.div`
  margin: 0.4rem 0 0 1.2rem;
`;

const UserName = styled.strong`
  font-size: var(--fs-md);
  font-weight: 500;
  line-height: 1.8rem;
`;

const UserId = styled.p`
  font-weight: 400;
  font-size: var(--fs-sm);
  line-height: 1.4rem;
  margin-top: 0.2rem;
  color: var(--sub-text-color);
`;

const MoreSmallButton = styled.button`
  position: absolute;
  right: 0;
  width: 1.8rem;
  height: 1.8rem;
  margin-top: 0.4rem;
`;

const ContentWrapperDiv = styled.div`
  margin: 1.2rem 0 0 5.4rem;
`;

const ContentText = styled.p`
  margin-bottom: 1.6rem;
  font-weight: 400;
  font-size: var(--fs-md);
  line-height: 1.8rem;
`;

const ContentImg = styled.img`
  width: 30.4rem;
  height: 22.8rem;
  border: 0.5px solid var(--border-color);
  border-radius: 10px;
  margin-bottom: 1.2rem;
`;

const Div = styled.div`
  display: flex;
  margin-bottom: 1.6rem;
`;

const LikeButton = styled.button`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background-size: cover;
  background-image: ${(props) => (props.like ? `url(${HEART_FILL_ICON})` : `url(${HEART_ICON})`)};
`;

const LikeSpan = styled.span`
  margin: 0 1.6rem 0 0.6rem;
  font-size: var(--fs-sm);
  line-height: 1.8rem;
  color: var(--sub-text-color);
`;

const ChatImg = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

const ChatSpan = styled.span`
  margin: 0 1.6rem 0 0.6rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--sub-text-color);
`;

const DateP = styled.p`
  line-height: 1.2rem;
  color: var(--sub-text-color);
`;
