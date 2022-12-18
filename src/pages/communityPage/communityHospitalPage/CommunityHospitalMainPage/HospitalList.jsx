import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ANIMAL_HOSPITAL_ICON, RIGHT_ARROW_ICON } from '../../../../styles/CommonIcons';

const HospitalList = () => {
  return (
    <HospitalListWrapper>
      <HospitalItem>
        <HospitalLink to='/community/hospital/1' aria-label='어쩌구 동물병원 상세 정보'>
          <HospitalIcon src={ANIMAL_HOSPITAL_ICON} alt='' />
          <HospitalInfo>
            <HospitalTitle>어쩌구 동물병원</HospitalTitle>
            <HospitalDistance>5km</HospitalDistance>
          </HospitalInfo>
        </HospitalLink>
      </HospitalItem>
      <HospitalItem>
        <HospitalLink to='/community/hospital/1' aria-label='어쩌구 동물병원 상세 정보'>
          <HospitalIcon src={ANIMAL_HOSPITAL_ICON} alt='' />
          <HospitalInfo>
            <HospitalTitle>어쩌구 동물병원</HospitalTitle>
            <HospitalDistance>5km</HospitalDistance>
          </HospitalInfo>
        </HospitalLink>
      </HospitalItem>
      <HospitalItem>
        <HospitalLink to='/community/hospital/1' aria-label='어쩌구 동물병원 상세 정보'>
          <HospitalIcon src={ANIMAL_HOSPITAL_ICON} alt='' />
          <HospitalInfo>
            <HospitalTitle>어쩌구 동물병원</HospitalTitle>
            <HospitalDistance>5km</HospitalDistance>
          </HospitalInfo>
        </HospitalLink>
      </HospitalItem>
    </HospitalListWrapper>
  );
};

export default HospitalList;

const HospitalListWrapper = styled.ol`
  & > li:not(:last-child) {
    margin-bottom: 2.3rem;
  }
`;

const HospitalItem = styled.li`
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 10px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const HospitalLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;

  &::after {
    display: inline-block;
    content: '';
    width: 30px;
    height: 30px;
    background: no-repeat center/cover url(${RIGHT_ARROW_ICON});
  }
`;

const HospitalIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const HospitalInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const HospitalTitle = styled.strong`
  margin-bottom: 0.8rem;
  font-size: var(--fs-md);
`;

const HospitalDistance = styled.span`
  font-size: var(--fs-sm);
  color: var(--sub-text-color);
`;
