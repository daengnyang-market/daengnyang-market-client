import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';

import Button from '../../../components/common/Button/Button';
import { CHAT_ICON, SHARE_ICON } from '../../../styles/CommonIcons';

const UserProfileBtns = ({ profileData, profileUserAccountname }) => {
  const [isFollowing, setIsFollowing] = useState(profileData.isfollow);
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const { accountname } = useParams();
  const [opponentData, setOpponentData] = useState();
  const [isValidate, setIsValidate] = useState(true);
  const navigate = useNavigate();
  const CHAT_TOKEN = process.env.REACT_APP_CHAT_SERVER_TOKEN;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  });

  useEffect(() => {
    const getMyPost = () => {
      const url = `https://mandarin.api.weniv.co.kr`;
      axios({
        url: url + `/post/aksidkvkc/userpost/?limit=Number`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      })
        .then((res) => {
          setOpponentData(res.data.post);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getMyPost();
  }, [userToken]);

  const createChatroom = () => {
    axios
      .post(
        `https://mandarin.api.weniv.co.kr/post`,
        {
          post: {
            content: `${userAccountname},${profileUserAccountname}`,
            image: '',
          },
        },
        {
          headers: {
            Authorization: `Bearer ${CHAT_TOKEN}`,
            'Content-type': 'application/json',
          },
        },
      )
      .then((res) => {
        navigate(`/chat/${res.data.post.id}`);
      });
  };

  const shareToKakaotalk = () => {
    const KAKAO_SHARE_API = process.env.REACT_APP_KAKAO_SHARE_API;
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(KAKAO_SHARE_API);
      }
      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: `${profileData.username}님의 프로필 - 가져도댕냥`,
          description: `우리집 댕냥이를 위한 따뜻한 선물! ${profileData.username}님의 프로필이 공유되었습니다. `,
          imageUrl: 'https://mandarin.api.weniv.co.kr/1672125328324.png',
          link: {
            webUrl: 'http://localhost:3000/',
          },
        },
      });
    }
  };

  const handleFollow = async () => {
    const option = {
      url: `https://mandarin.api.weniv.co.kr/profile/${accountname}/${isFollowing ? 'unfollow' : 'follow'}`,
      method: isFollowing ? 'DELETE' : 'POST',
      headers: { Authorization: `Bearer ${userToken}`, 'Content-type': 'application/json' },
    };

    await axios(option)
      .then(() => {
        setIsFollowing(!isFollowing);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getUserContent = (opponentData, profileUserAccountname, userAccountname) => {
    for (let i = 0; i < opponentData.length; i++) {
      if (
        opponentData[i].content === `${profileUserAccountname},${userAccountname}` ||
        opponentData[i].content === `${userAccountname},${profileUserAccountname}`
      ) {
        return false;
      } else if (i === opponentData.length - 1) {
        return true;
      }
    }
  };

  useEffect(() => {
    if (opponentData) {
      setIsValidate(getUserContent(opponentData, profileUserAccountname, userAccountname));
    }
  }, [opponentData, profileUserAccountname, userAccountname]);

  const handleGoChat = async () => {
    await setIsValidate(getUserContent(opponentData, profileUserAccountname, userAccountname));
    if (isValidate === false) {
      alert('이미 존재하는 방입니다.');
    } else if (isValidate === true) {
      createChatroom();
      setIsValidate(false);
    }
  };

  return (
    <UserProfileBtnsStyle>
      <ChatBtn onClick={handleGoChat} />
      <Button
        size='M'
        onClickHandler={handleFollow}
        backgroundColor={isFollowing ? 'var(--main-bg-color)' : undefined}
        borderColor={isFollowing ? 'var(--border-color)' : undefined}
        textColor={isFollowing ? 'var(--sub-text-color)' : undefined}
      >
        {isFollowing ? '언팔로우' : '팔로우'}
      </Button>
      <ShareBtn onClick={shareToKakaotalk} />
    </UserProfileBtnsStyle>
  );
};

export default UserProfileBtns;

const UserProfileBtnsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-top: 2.4em;
  margin-bottom: 2.6em;
`;

const ShareBtn = styled.button`
  background: url(${SHARE_ICON}) no-repeat center / 15px;
  width: 34px;
  height: 34px;
  color: var(--sub-text-color);
  border: 1px solid var(--border-color);
  border-radius: 50%;
`;

const ChatBtn = styled.button`
  background: url(${CHAT_ICON}) no-repeat center / 15px;
  width: 34px;
  height: 34px;
  color: var(--sub-text-color);
  border: 1px solid var(--border-color);
  border-radius: 50%;
`;
