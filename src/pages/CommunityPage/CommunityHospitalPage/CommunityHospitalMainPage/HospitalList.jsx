import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { UserLocationContextStore } from '../../../../context/UserLocationContext';
import HospitalItem from './HospitalItem';
import Button from '../../../../components/common/Button/Button';

const HospitalList = ({ radius }) => {
  const KAKAOMAP_API = process.env.REACT_APP_KAKAOMAP_API;
  const [hospitalList, setHospitalList] = useState([]);
  const [isEndPage, setIsEndPage] = useState(true);
  const [page, setPage] = useState(1);

  const { longitude, latitude } = useContext(UserLocationContextStore);

  useEffect(() => {
    setPage(1);
    setIsEndPage(true);
    setHospitalList([]);
  }, [radius]);

  const getHospital = useCallback(async () => {
    const header = { headers: { Authorization: `KakaoAK ${KAKAOMAP_API}` } };

    let url = `https://dapi.kakao.com/v2/local/search/keyword.json?x=${longitude}&y=${latitude}&radius=${radius}&sort=distance&query=동물병원&page=${page}&size=10`;

    await axios
      .get(url, header)
      .then((res) => {
        setHospitalList(page > 1 ? (prev) => prev.concat(res.data.documents) : res.data.documents);
        setIsEndPage(res.data.meta.is_end);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [longitude, latitude, radius, page]);

  useEffect(() => {
    if (!latitude || !longitude) {
      return;
    }

    getHospital();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [longitude, latitude, radius, page]);

  const getNextPageData = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <HospitalListWrapper>
        {hospitalList.length > 0 ? (
          hospitalList.map((hospital) => <HospitalItem key={hospital.id} hospitalInfo={hospital} />)
        ) : (
          <>없음</>
        )}
      </HospitalListWrapper>
      {isEndPage || page > 2 ? (
        <></>
      ) : (
        <ButtonWrapper>
          <Button size='MS' onClickHandler={getNextPageData}>
            더보기
          </Button>
        </ButtonWrapper>
      )}
    </>
  );
};

export default HospitalList;

const HospitalListWrapper = styled.ol`
  & > li:not(:last-child) {
    margin-bottom: 2.3rem;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2.3rem;
  text-align: center;
`;
