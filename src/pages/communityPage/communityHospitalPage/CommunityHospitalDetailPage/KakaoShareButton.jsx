import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { SHARE_ICON } from '../../../../styles/CommonIcons';

const KakaoShareButton = ({ name }) => {
  const location = useLocation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

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
          title: '가져도댕냥 - 동물병원 상세 정보',
          description: `${name} 정보 보기`,
          imageUrl: 'https://mandarin.api.weniv.co.kr/1672125328324.png',
          link: {
            webUrl: `http://localhost:3000${location.pathname}${location.search}`,
          },
        },
      });
    }
  };

  return (
    <ShareButton onClick={shareToKakaotalk}>
      <img src={SHARE_ICON} alt='공유하기' />
    </ShareButton>
  );
};

export default KakaoShareButton;

const ShareButton = styled.button`
  & img {
    width: 20px;
    height: 20px;
  }
`;
