import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ANIMAL_HOSPITAL_ICON, RIGHT_ARROW_ICON } from '../../../../styles/CommonIcons';

const HospitalItem = ({ hospitalInfo }) => {
  const [detailUrl, setDetailUrl] = useState(null);

  useEffect(() => {
    if (Object.keys(hospitalInfo).length > 0) {
      const url =
        '?road_address=' +
        hospitalInfo.road_address_name +
        '&place_name=' +
        hospitalInfo.place_name +
        '&phone=' +
        hospitalInfo.phone +
        '&x=' +
        hospitalInfo.x +
        '&y=' +
        hospitalInfo.y;

      const encodeResult = encodeURI('/community/hospital' + url);
      setDetailUrl(encodeResult);
    }
  }, [hospitalInfo]);

  return (
    <HospitalItemWrapper>
      <HospitalLink to={detailUrl} aria-label={`${hospitalInfo.place_name} 상세 정보`}>
        <HospitalIcon src={ANIMAL_HOSPITAL_ICON} alt='' />
        <HospitalInfo>
          <HospitalTitle>{hospitalInfo.place_name}</HospitalTitle>
          <HospitalDistance>
            {hospitalInfo.distance > 1000
              ? (hospitalInfo.distance / 1000).toFixed(2) + ' km'
              : hospitalInfo.distance + ' m'}
          </HospitalDistance>
        </HospitalInfo>
      </HospitalLink>
    </HospitalItemWrapper>
  );
};

export default HospitalItem;

const HospitalItemWrapper = styled.li`
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
