import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { TopNavBar, LeftArrow, MoreBtn } from './Styled';
import { LEFT_ARROW_ICON, MORE_ICON } from '../../../styles/CommonIcons';

const TopTitleNav = ({ title, viewMoreBtn = true }) => {
  const navigate = useNavigate();

  return (
    <TopNavBar>
      <button onClick={() => navigate(-1)}>
        <LeftArrow src={LEFT_ARROW_ICON} alt='뒤로가기 버튼' />
      </button>
      <TopNavH2>{title}</TopNavH2>
      {viewMoreBtn ? (
        <MoreBtn>
          <img src={MORE_ICON} alt='더보기 버튼' />
        </MoreBtn>
      ) : (
        <></>
      )}
    </TopNavBar>
  );
};

export default TopTitleNav;

const TopNavH2 = styled.h2`
  font-size: var(--fs-md);
  flex-grow: 1;
  margin-left: 1em;
`;
