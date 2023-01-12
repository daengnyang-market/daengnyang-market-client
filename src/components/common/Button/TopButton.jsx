import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BOTTOM_ARROW_ICON } from '../../../styles/CommonIcons';
const TopButton = () => {
  const [showBtn, setShowBtn] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const showBtnClick = () => {
      if (window.scrollY > 700) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener('scroll', showBtnClick);
    return () => {
      window.removeEventListener('scroll', showBtnClick);
    };
  }, []);

  return (
    <>
      {showBtn && (
        <TopBtnDiv>
          <TopBtn onClick={scrollToTop}>
            <img src={BOTTOM_ARROW_ICON} alt='탑버튼' />
          </TopBtn>
        </TopBtnDiv>
      )}
    </>
  );
};

const TopBtnDiv = styled.div`
  position: fixed;
  width: 390px;
  z-index: 200;
`;
const TopBtn = styled.button`
  position: absolute;
  right: 30px;
  top: 530px;
  width: 30px;
  height: 30px;
  background-color: var(--main-color);
  border-radius: 50%;
  transform: rotateX(180deg);

  img {
    color: white;
    filter: invert(100%);
  }
`;

export default TopButton;
