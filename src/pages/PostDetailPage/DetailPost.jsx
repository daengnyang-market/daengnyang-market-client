import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import ProfileImage from '../../components/common/ProfileImage/ProfileImage';
import { MORE_SMALL_ICON, HEART_ICON, HEART_FILL_ICON, REPLY_ICON } from '../../styles/CommonIcons';
import PostModal from '../../components/common/modal/PostModal/PostModal';
import Loading from '../../components/common/Loading/Loading';
import 'swiper/css';
import 'swiper/css/pagination';

const DetailPost = ({ post }) => {
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const [data, setData] = useState('');
  const [dateData, setDateData] = useState({});
  const [imageFile, setImageFile] = useState([]);
  useEffect(() => {
    if (post) {
      return setData({ ...post });
    }
  }, []);

  useEffect(() => {
    if (data) {
      setDateData(data.createdAt);
      setImageFile(data.image.split(','));
    }
  }, [data]);

  const year = new Date(dateData).getFullYear();
  const month = new Date(dateData).getMonth() + 1;
  const date = new Date(dateData).getDate();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isMyPost, setIsMyPost] = useState(true); // 내 게시글인 경우 true, 다른 사람의 게시글인 경우 false가 들어갑니다. (true인 경우 - 삭제/수정 출력, false인 경우 - 신고 출력)

  const onClickLikeButtonHandler = () => {
    setLike(!like);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      {data ? (
        <>
          <WrapperDiv>
            <UserInfoWrapperDiv>
              <UserProfileLink to={`/profile/${data.author.accountname}`}>
                <ProfileImage src={data.author.image} alt={`${data.author.username}님의 프로필 사진`} width='42' />
                <UserInfoDiv>
                  <UserName>{data.author.username}</UserName>
                  <UserId>@ {data.author.accountname}</UserId>
                </UserInfoDiv>
              </UserProfileLink>
              <MoreSmallButton onClick={() => setIsOpenModal(true)}>
                <img src={MORE_SMALL_ICON} alt='더보기' />
              </MoreSmallButton>
            </UserInfoWrapperDiv>
            <ContentWrapperDiv>
              <PostDetailLink to={`/post/${data.id}`} type='content'>
                <ContentText>{data.content}</ContentText>
                <SwiperWrapper>
                  <Swiper
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className='mySwiper'
                  >
                    {imageFile ? (
                      imageFile.map((img, i) => (
                        <SwiperSlide key={i}>
                          <ContentImg src={img} alt='' />
                        </SwiperSlide>
                      ))
                    ) : (
                      <></>
                    )}
                  </Swiper>
                </SwiperWrapper>
              </PostDetailLink>
              <Div>
                <LikeButton like={like} onClick={onClickLikeButtonHandler}>
                  <span className='sr-only'>{like ? '좋아요 취소' : '좋아요'}</span>
                </LikeButton>
                <LikeSpan>{data.heartCount}</LikeSpan>
                <PostDetailLink to={`/data/${data.id}`} type='comment'>
                  <ChatImg src={REPLY_ICON} alt='댓글 보기' />
                  <ChatSpan>{data.commentCount}</ChatSpan>
                </PostDetailLink>
              </Div>
              <DateP>
                {year}년 {month}월 {date}일
              </DateP>
            </ContentWrapperDiv>
          </WrapperDiv>
          {isOpenModal ? <PostModal closeModal={closeModal} isMyPost={isMyPost} /> : <></>}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default DetailPost;

const SwiperWrapper = styled.div`
  > div {
    width: 100%;
  }
`;

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
  margin-top: 1.6rem;
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