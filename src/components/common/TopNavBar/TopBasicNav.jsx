import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TopNavBar, LeftArrow, MoreBtn } from './Styled';

import { LEFT_ARROW_ICON, MORE_ICON } from '../../../styles/CommonIcons';
import ProfileModal from '../modal/ProfileModal/ProfileModal';
import ChatRoomModal from '../modal/ChatRoomModal/ChatRoomModal';

const TopBasicNav = ({ pageType }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <TopNavBar>
        <Link to='/'>
          <LeftArrow src={LEFT_ARROW_ICON} alt='뒤로가기 버튼' />
        </Link>
        <MoreBtn onClick={() => setIsOpenModal(true)}>
          <img src={MORE_ICON} alt='더보기 버튼' />
        </MoreBtn>
      </TopNavBar>
      {isOpenModal ? (
        pageType === 'profile' ? (
          <ProfileModal closeModal={closeModal} />
        ) : pageType === 'chatRoom' ? (
          <ChatRoomModal closeModal={closeModal} />
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default TopBasicNav;
