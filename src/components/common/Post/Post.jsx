import { useState, useContext } from 'react';
import styled from 'styled-components';
import ProfileImage from '../ProfileImage/ProfileImage';
import { PROFILE1_IMAGE } from '../../../styles/CommonImages';
import { MORE_SMALL_ICON, HEART_ICON, HEART_FILL_ICON, REPLY_ICON } from '../../../styles/CommonIcons';
import PostModal from '../modal/PostModal/PostModal';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';

const Post = ({ post = {} }) => {
  const navigate = useNavigate();
  const { userAccountname } = useContext(AuthContextStore);

  const year = new Date(post.createdAt).getFullYear();
  const month = new Date(post.createdAt).getMonth() + 1;
  const date = new Date(post.createdAt).getDate();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isMyPost, setIsMyPost] = useState(post.author.accountname.indexOf(userAccountname) !== -1);

  const [like, setLike] = useState(false);

  const onClickLikeButtonHandler = () => {
    setLike(!like);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      {Object.keys(post).length > 0 ? (
        <>
          <WrapperDiv>
            <UserInfoWrapperDiv>
              <UserProfileLink to={`/profile/${post.author.accountname}`}>
                <ProfileImage src={post.author.image} alt={`${post.author.username}님의 프로필 사진`} width='42' />
                <UserInfoDiv>
                  <UserName>{post.author.username}</UserName>
                  <UserId>@ {post.author.accountname}</UserId>
                </UserInfoDiv>
              </UserProfileLink>
              <MoreSmallButton onClick={() => setIsOpenModal(true)}>
                <img src={MORE_SMALL_ICON} alt='더보기' />
              </MoreSmallButton>
            </UserInfoWrapperDiv>
            <ContentWrapperDiv>
              <PostDetailLink to={`/post/${post.id}`} type='content'>
                <ContentText>{post.content}</ContentText>
                {post.image ? <ContentImg src={post.image} alt='' /> : <></>}
              </PostDetailLink>
              <Div>
                <LikeButton like={like} onClick={onClickLikeButtonHandler}>
                  <span className='sr-only'>{like ? '좋아요 취소' : '좋아요'}</span>
                </LikeButton>
                <LikeSpan>{post.heartCount}</LikeSpan>
                <PostDetailLink to={`/post/${post.id}`} type='comment'>
                  <ChatImg src={REPLY_ICON} alt='댓글 보기' />
                  <ChatSpan>{post.commentCount}</ChatSpan>
                </PostDetailLink>
              </Div>
              <DateP>
                {year}년 {month}월 {date}일
              </DateP>
            </ContentWrapperDiv>
          </WrapperDiv>
          {isOpenModal ? <PostModal closeModal={closeModal} isMyPost={isMyPost} postID={post.id} /> : <></>}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Post;

const WrapperDiv = styled.article`
  width: 35.8rem;
  margin: 0 auto 2rem;
`;

const UserInfoWrapperDiv = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`;

const UserProfileLink = styled(Link)`
  display: flex;
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

const PostDetailLink = styled(Link)`
  display: flex;
  ${(props) => (props.type === 'content' ? 'flex-direction: column' : '')}
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
