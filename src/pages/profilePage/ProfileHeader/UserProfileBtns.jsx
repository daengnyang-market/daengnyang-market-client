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
        url: url + `/post/aksidkvkc/userpost`,
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
  // useEffect(()=>{

  // },[opponentData])
  console.log('확인', opponentData);

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
        console.log(userAccountname, profileUserAccountname);
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
          title: '가져도댕냥',
          description: '우리집 댕냥이를 위한 따뜻한 선물',
          imageUrl: '',
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
      .then((res) => {
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
      } else {
        return true;
      }
    }
  };
  useEffect(() => {
    if (opponentData) {
      setIsValidate(getUserContent(opponentData, profileUserAccountname, userAccountname));
    }
  }, [opponentData]);

  const handleGoChat = (e) => {
    e.preventDefault();
    if (isValidate === true) {
      createChatroom();
    } else if (isValidate === false) {
      alert('이미 존재하는 방입니다.');
      console.log('false', isValidate);
    }
  };
  // const test = getUserContent(opponentData, profileUserAccountname, accountname);
  console.log('과연?데이터는', opponentData);
  console.log('과연?', isValidate);
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
