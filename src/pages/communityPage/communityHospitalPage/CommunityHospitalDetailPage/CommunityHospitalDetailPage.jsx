import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import CommunityLayout from '../../CommunityLayout';
import Loading from '../../../../components/common/Loading/Loading';
import HospitalDetail from './HospitalDetail';

const CommunityHospitalDetailPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasNullData, setHasNullData] = useState(false);
  const [hospitalInfo, setHospitalInfo] = useState({});

  useEffect(() => {
    setHospitalInfo({
      address: searchParams.get('road_address'),
      name: searchParams.get('place_name'),
      phone: searchParams.get('phone'),
      x: searchParams.get('x'),
      y: searchParams.get('y'),
    });
  }, []);

  useEffect(() => {
    if (!hospitalInfo) {
      return;
    }

    setIsLoading(false);

    for (let info in hospitalInfo) {
      if (hospitalInfo[info] === null) {
        setHasNullData(true);
      }
    }
  }, [hospitalInfo]);

  return (
    <CommunityLayout
      padding='0'
      navType='titleNav'
      currentMenuId={2}
      isViewTabMenu={false}
      fillHeight={true}
      title={hospitalInfo.name}
    >
      <HospitalDetailWrapper>
        {isLoading ? (
          <>
            <Loading />
          </>
        ) : hasNullData ? (
          <>페이지 출력에 실패했습니다. 다시 접속해주세요.</>
        ) : (
          <HospitalDetail hospitalInfo={hospitalInfo} />
        )}
      </HospitalDetailWrapper>
    </CommunityLayout>
  );
};

export default CommunityHospitalDetailPage;

const HospitalDetailWrapper = styled.section`
  flex: 1;
  height: 100%;
  border-top: 1px solid var(--border-color);
`;
