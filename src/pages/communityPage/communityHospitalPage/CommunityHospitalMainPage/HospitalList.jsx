import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserLocationContextStore } from '../../../../context/UserLocationContext';
import { ANIMAL_HOSPITAL_ICON, RIGHT_ARROW_ICON } from '../../../../styles/CommonIcons';

const HospitalList = ({ radius }) => {
  const KAKAOMAP_API = process.env.REACT_APP_KAKAOMAP_API;
  const [hospitalList, setHospitalList] = useState([]);

  const { longitude, latitude } = useContext(UserLocationContextStore);

  useEffect(() => {
    if (!latitude || !longitude) {
      return;
    }

    const getHospital = async () => {
      const header = { headers: { Authorization: `KakaoAK ${KAKAOMAP_API}` } };

      await axios
        .get(
          `https://dapi.kakao.com/v2/local/search/keyword.json?x=${longitude}&y=${latitude}&radius=${radius}&sort=distance&query=동물병원`,
          header,
        )
        .then((res) => {
          setHospitalList(res.data.documents);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getHospital();
  }, [longitude, latitude, radius]);

  return (
    <HospitalListWrapper>
      {hospitalList.length > 0 ? (
        hospitalList.map(({ id, place_name, distance }) => (
          <HospitalItem key={id}>
            <HospitalLink to={`/community/hospital/${id}`} aria-label={`${place_name} 상세 정보`}>
              <HospitalIcon src={ANIMAL_HOSPITAL_ICON} alt='' />
              <HospitalInfo>
                <HospitalTitle>{place_name}</HospitalTitle>
                <HospitalDistance>
                  {distance > 1000 ? (distance / 1000).toFixed(2) + ' km' : distance + ' m'}
                </HospitalDistance>
              </HospitalInfo>
            </HospitalLink>
          </HospitalItem>
        ))
      ) : (
        <>없음</>
      )}
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
