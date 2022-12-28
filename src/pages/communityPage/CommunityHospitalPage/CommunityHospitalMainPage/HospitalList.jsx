import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { UserLocationContextStore } from '../../../../context/UserLocationContext';
import HospitalItem from './HospitalItem';

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
        hospitalList.map((hospital) => <HospitalItem key={hospital.id} hospitalInfo={hospital} />)
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
