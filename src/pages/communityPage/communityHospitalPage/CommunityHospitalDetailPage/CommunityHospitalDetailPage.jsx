import React from 'react';
import styled from 'styled-components';
import CommunityLayout from './../../CommunityLayout';
import CurrentLocationBar from './../CurrentLocationBar';
import Button from './../../../../components/common/Button/Button';
import { LOCATION_BLACK_ICON } from '../../../../styles/CommonIcons';

const CommunityHospitalDetailPage = () => {
  return (
    <CommunityLayout padding='0' navType='titleNav' currenttMenuId={2} isViewTabMenu={false}>
      <CurrentLocationBar />
      <HospitalDetailWrapper>
        <h2 className='sr-only'>어쩌구 동물병원 상세 정보</h2>
        <HospitalMap>지도 들어갈 자리</HospitalMap>

        <HospitalAddressWrapper>
          <HospitalTitle>어쩌구 동물병원</HospitalTitle>
          <HospitalAddress>제주도 제주시 무슨읍 무슨로 291-1</HospitalAddress>
          <HospitalTel>
            <a href='tel:02-1111-1111'>02-1111-1111</a>
          </HospitalTel>
        </HospitalAddressWrapper>

        <ButtonWrapper>
          <Button
            size='M'
            backgroundColor='var(--main-bg-color)'
            borderColor='var(--border-color)'
            textColor='var(--text-color)'
          >
            전화
          </Button>
          <Button
            size='M'
            backgroundColor='var(--main-bg-color)'
            borderColor='var(--border-color)'
            textColor='var(--text-color)'
          >
            주소 복사
          </Button>
        </ButtonWrapper>
      </HospitalDetailWrapper>
    </CommunityLayout>
  );
};

export default CommunityHospitalDetailPage;

const HospitalDetailWrapper = styled.section`
  padding: 3rem 3.5rem;
`;

const HospitalMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25.5rem;
  margin-bottom: 2.5rem;
  font-size: var(--fs-xl);
  background-color: var(--border-color);
`;

const HospitalAddressWrapper = styled.address`
  margin-bottom: 2.5rem;
  text-align: center;

  &::before {
    display: inline-block;
    content: '';
    width: 25px;
    height: 25px;
    margin-bottom: 1.5rem;
    background: no-repeat center/cover url(${LOCATION_BLACK_ICON});
  }
`;

const HospitalTitle = styled.strong`
  display: block;
  margin-bottom: 1.5rem;
  font-size: var(--fs-xl);
`;

const HospitalAddress = styled.p`
  margin-bottom: 1rem;
  font-size: var(--fs-lg);
`;

const HospitalTel = styled.p`
  font-size: var(--fs-lg);
  color: var(--sub-text-color);

  &::before {
    content: 'TEL. ';
    font-weight: 500;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
