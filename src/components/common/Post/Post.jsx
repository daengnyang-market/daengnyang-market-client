import { useState } from 'react';
import styled from 'styled-components';
import { PROFILE1_IMAGE } from '../../../styles/CommonImages';
import { MORE_SMALL_ICON, HEART_ICON, HEART_FILL_ICON, REPLY_ICON } from '../../../styles/CommonIcons';

const Post = ({ profileImg, userName, userId }) => {
  const [contentImg, setContentImg] = useState(true);

  const [like, setLike] = useState(false);
  const onClickLikeButtonHandler = () => {
    setLike(!like);
  };

  return (
    <>
      <WrapperDiv>
        <UserInfoWrapperDiv>
          <ProfileImg src={profileImg} alt='프로필 이미지' />
          <UserInfoDiv>
            <UserName>{userName}</UserName>
            <UserId>{userId}</UserId>
          </UserInfoDiv>
          <MoreSmallIcon src={MORE_SMALL_ICON} alt='더보기' />
        </UserInfoWrapperDiv>
        <ContentWrapperDiv>
          <ContentText>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와
            약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.
          </ContentText>
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
    </>
  );
};

export default Post;

const WrapperDiv = styled.div`
  width: 35.8rem;
  margin: 0 auto;
`;

const UserInfoWrapperDiv = styled.div`
  display: flex;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 4.2rem;
  height: 4.2rem;
`;

const UserInfoDiv = styled.div`
  margin: 0.4rem 15rem 0 1.2rem;
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

const MoreSmallIcon = styled.img`
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
