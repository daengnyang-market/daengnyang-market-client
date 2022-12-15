import React, { useState } from 'react';
import styled from 'styled-components';

import ProfileImage from '../../../components/common/ProfileImage/ProfileImage';
import { PROFILE1_IMAGE } from '../../../styles/CommonImages';
import { CHAT_ICON, SHARE_ICON } from '../../../styles/CommonIcons';
import Button from '../../../components/common/Button/Button';

const ProfileHeader = ({ followState }) => {
  const [isFollowing, setIsFollowing] = useState(followState);

  function handleFollow() {
    setIsFollowing(!isFollowing);
  }

  return (
    <ProfileWrapper>
      <h2 className='sr-only'>프로필 정보</h2>
      <Followers>
        <strong>2950</strong>
        <span>followers</span>
      </Followers>
      <ProfileImage src={PROFILE1_IMAGE} alt='weniv_Mandarin님의 프로필 사진' width='110' />
      <UserName>애월읍 위니브 감귤농장</UserName>
      <UserID>@ weniv_Mandarin</UserID>
      <UserIntro>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</UserIntro>
      <Followings>
        <strong>128</strong>
        <span>followings</span>
      </Followings>
      {/* 여기서 이제 followState에 따라 ProfileBtns이 나올거냐 myProfileBtns이 나올거냐로 나뉘게 구현 예정 */}
      {/* <ProfileBtns>
        <ProfileBtn />
        <Button
          size='M'
          onClickHandler={handleFollow}
          backgroundColor={isFollowing ? 'var(--login-bg-color)' : 'var(--main-bg-color)'}
          borderColor={isFollowing ? 'transparent' : 'var(--border-color)'}
          textColor={isFollowing ? 'var(--main-bg-color)' : 'var(--sub-text-color)'}
        >
          {isFollowing ? '팔로우' : '언팔로우'}
        </Button>
        <ProfileBtn isShare={true} />
      </ProfileBtns> */}
      <MyProfileBtns>
        <li>
          <Button
            size='M'
            backgroundColor={'var(--main-bg-color)'}
            borderColor={'var(--border-color)'}
            textColor={'var(--sub-text-color)'}
          >
            프로필 수정
          </Button>
        </li>
        <li>
          <Button
            size='M'
            backgroundColor={'var(--main-bg-color)'}
            borderColor={'var(--border-color)'}
            textColor={'var(--sub-text-color)'}
          >
            상품 등록
          </Button>
        </li>
      </MyProfileBtns>
    </ProfileWrapper>
  );
};

export default ProfileHeader;

const ProfileWrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 3em;
`;

const UserName = styled.strong`
  font-size: 1.8em;
  color: var(--text-color);
  margin-top: 1.5em;
  margin-bottom: 0.6em;
  font-weight: 700;
`;

const UserID = styled.span`
  display: block;
  color: var(--sub-text-color);
  font-size: 1em;
  margin-bottom: 1.6em;
`;

const UserIntro = styled.span`
  font-size: 1.4em;
  color: var(--sub-text-color);
`;

const Followers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 4em;
  left: 5.6em;

  & strong {
    margin-bottom: 0.6em;
    font-weight: 700;
    font-size: 1.8em;
    color: var(--text-color);
  }
  & span {
    color: var(--sub-text-color);
    font-size: 1em;
  }
`;

const Followings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 4em;
  right: 5.6em;

  & strong {
    margin-bottom: 0.6em;
    font-weight: 700;
    font-size: 1.8em;
    color: var(--text-color);
  }

  & span {
    color: var(--sub-text-color);
    font-size: 1em;
  }
`;

const ProfileBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-top: 2.4em;
  margin-bottom: 2.6em;
`;

const ProfileBtn = styled.button`
  background: ${(props) =>
    props.isShare ? `url(${SHARE_ICON}) no-repeat center / 15px` : `url(${CHAT_ICON}) no-repeat center / 15px`};
  width: 34px;
  height: 34px;
  color: var(--sub-text-color);
  border: 1px solid var(--border-color);
  border-radius: 50%;
`;

const MyProfileBtns = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 2.4em 0 3.4em 0;
`;
