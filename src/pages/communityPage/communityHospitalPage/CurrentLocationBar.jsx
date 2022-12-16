import React from 'react';
import styled from 'styled-components';
import { LOCATION_ICON } from '../../../styles/CommonIcons';

const CurrentLocationBar = () => {
  return (
    <CurrentLocationBarWrapper>
      <CurrentLocation>
        <span className='sr-only'>현재 위치 : </span>제주도 제주시 무슨동
      </CurrentLocation>
    </CurrentLocationBarWrapper>
  );
};

export default CurrentLocationBar;

const CurrentLocationBarWrapper = styled.div`
  padding: 1.8rem 3.5rem;
  color: var(--main-bg-color);
  font-size: var(--fs-md);
  background-color: var(--login-bg-color);
`;

const CurrentLocation = styled.strong`
  display: flex;
  align-items: center;

  &::before {
    display: inline-block;
    content: '';
    width: 16px;
    height: 16px;
    margin-right: 0.5rem;
    background: no-repeat center/cover url(${LOCATION_ICON});
  }
`;
