import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNavBar, LeftArrow, MoreBtn } from './Styled';

import { LEFT_ARROW_ICON, MORE_ICON } from '../../../styles/CommonIcons';
import ProfileModal from '../modal/ProfileModal/ProfileModal';

const TopBasicNav = () => {
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <TopNavBar>
        <button onClick={() => navigate(-1)}>
          <LeftArrow src={LEFT_ARROW_ICON} alt='뒤로가기 버튼' />
        </button>
        <MoreBtn onClick={() => setIsOpenModal(true)}>
          <img src={MORE_ICON} alt='더보기 버튼' />
        </MoreBtn>
      </TopNavBar>
      {isOpenModal ? <ProfileModal closeModal={closeModal} /> : <></>}
    </>
  );
};

export default TopBasicNav;
