import React from 'react';
import styled from 'styled-components';
import HospitalMap from './HospitalMap';
import KakaoShareButton from './KakaoShareButton';
import { ANIMAL_HOSPITAL_ICON, LOCATION_BORDER_ICON, PHONE_ICON } from '../../../../styles/CommonIcons';

const HospitalDetail = ({ hospitalInfo }) => {
  const { name, x, y, address, phone } = hospitalInfo;

  return (
    <>
      <h2 className='sr-only'>{name} 상세 정보</h2>

      <HospitalDetailWrapper>
        <HospitalMap name={name} x={x} y={y} />

        <HospitalInfoWrapper>
          <HospitalAddressInfoWrapper>
            <img src={ANIMAL_HOSPITAL_ICON} alt='' />
            <HospitalAddressInfo>
              <HospitalTitle>{name}</HospitalTitle>
              <HospitalAddress>{address}</HospitalAddress>
              <HospitalTel>{phone}</HospitalTel>
            </HospitalAddressInfo>
          </HospitalAddressInfoWrapper>

          <ButtonWrapper>
            <a href={`tel:${address}`}>
              <img src={PHONE_ICON} alt='전화하기' />
            </a>
            <a href={`https://map.kakao.com/link/to/${name},${y},${x}`} target='_blank' rel='noreferrer'>
              <img src={LOCATION_BORDER_ICON} alt='길찾기' />
            </a>
            <KakaoShareButton name={name} />
          </ButtonWrapper>
        </HospitalInfoWrapper>
      </HospitalDetailWrapper>
    </>
  );
};

export default HospitalDetail;

const HospitalDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HospitalInfoWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2.5rem;
  background-color: var(--main-bg-color);
  z-index: 100;
  box-shadow: rgb(17 17 26 / 15%) 0px -10px 30px;
`;

const HospitalAddressInfoWrapper = styled.address`
  display: flex;
  margin-bottom: 2.5rem;

  & img {
    width: 50px;
    height: 50px;
  }
`;

const HospitalAddressInfo = styled.div`
  margin: 0.3rem 0 0 1.3rem;
`;

const HospitalTitle = styled.strong`
  display: block;
  margin-bottom: 0.7rem;
  font-weight: 500;
  font-size: var(--fs-xl);
`;

const HospitalAddress = styled.p`
  margin-bottom: 1rem;
  font-size: var(--fs-lg);
`;

const HospitalTel = styled.p`
  font-size: var(--fs-md);
  color: var(--sub-text-color);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid var(--border-color);
  border-radius: 5px;

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    font-size: var(--fs-sm);
  }

  & > a {
    border-right: 1px solid var(--border-color);

    & > img {
      width: 20px;
      height: 20px;
    }
  }
`;
