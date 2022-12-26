import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { UserLocationContextStore } from '../../../context/UserLocationContext';
import { LOCATION_ICON, UPDATE_WHITE_ICON } from '../../../styles/CommonIcons';
import { spin } from '../../../components/common/Animation/Animation';

const CurrentLocationBar = ({ locations = '' }) => {
  const { district } = useContext(UserLocationContextStore);

  console.log('렌더링');

  const updateLocation = () => {
    locations.setIsLocationUpdate(true);
  };

  return (
    <CurrentLocationBarWrapper>
      {locations ? (
        <>
          <LocationUpdateButton onClick={updateLocation} isLocationUpdate={locations.isLocationUpdate}>
            <span className='sr-only'>현재 위치 갱신하기</span>
          </LocationUpdateButton>
          <CurrentLocation locations={locations}>
            <span className='sr-only'>현재 위치 : </span>
            {district}
          </CurrentLocation>
        </>
      ) : (
        <CurrentLocation locations={locations}>
          <span className='sr-only'>현재 위치 : </span>
          {district}
        </CurrentLocation>
      )}
    </CurrentLocationBarWrapper>
  );
};

export default CurrentLocationBar;

const CurrentLocationBarWrapper = styled.div`
  display: flex;
  padding: 1.8rem 3.5rem;
  color: var(--main-bg-color);
  font-size: var(--fs-md);
  background-color: var(--login-bg-color);
`;

const CurrentLocation = styled.strong`
  display: flex;
  align-items: center;
  margin-bottom: -0.1rem;

  ${(props) =>
    props.locations ||
    css`
      &::before {
        content: '';
        min-width: 1.5rem;
        min-height: 1.5rem;
        margin-right: 0.7rem;
        background: no-repeat center/contain url(${LOCATION_ICON});
      }
    `}
`;

const LocationUpdateButton = styled.button`
  min-width: 1.5rem;
  min-height: 1.5rem;
  margin-right: 0.7rem;
  background: no-repeat center/contain url(${UPDATE_WHITE_ICON});
  animation: ${(props) =>
    props.isLocationUpdate &&
    css`
      ${spin} 2000ms linear infinite
    `};
`;
