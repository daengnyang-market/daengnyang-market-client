import React, { useState } from 'react';
import styled from 'styled-components';
import CommunityLayout from './../../CommunityLayout';
import { BOTTOM_ARROW_ICON } from '../../../../styles/CommonIcons';
import HospitalList from './HospitalList';
import CurrentLocationBar from '../CurrentLocationBar';
import FilterMenu from './FilterMenu';
import useLocation from '../../../../hooks/useLocation';

const CommunityHospitaMainlPage = () => {
  const [isShowFilterMenu, setIsShowFilterMenu] = useState(false);
  const [selectFilterId, setSelectFilterId] = useState(0);
  const filterList = [
    { id: 0, title: '1km 이내', radius: 1000 },
    { id: 1, title: '5km 이내', radius: 5000 },
    { id: 2, title: '10km 이내', radius: 10000 },
    { id: 3, title: '20km 이내', radius: 20000 },
  ];

  const [isLocationUpdate, setIsLocationUpdate] = useState(true);
  const checkUserLocation = useLocation({ isLocationUpdate, setIsLocationUpdate });

  const onClickBackgroundHandler = () => {
    setIsShowFilterMenu(!isShowFilterMenu);
  };

  const onClickFilterHandler = (filterId) => {
    setSelectFilterId(filterId);
    onClickBackgroundHandler();
  };

  return (
    <CommunityLayout padding='0' currentMenuId={2}>
      <section>
        <h2 className='sr-only'>내 근처 동물병원 찾기</h2>
        <CurrentLocationBar locations={{ isLocationUpdate, setIsLocationUpdate }} />

        <HospitalInfoWrapper>
          <FilterButton onClick={onClickBackgroundHandler}>{filterList[selectFilterId].title}</FilterButton>
          {isShowFilterMenu ? (
            <FilterMenu
              onBackgroundClick={onClickBackgroundHandler}
              onClickFilter={onClickFilterHandler}
              itemList={filterList}
            />
          ) : (
            <></>
          )}
          <HospitalList radius={filterList[selectFilterId].radius} />
        </HospitalInfoWrapper>
      </section>
    </CommunityLayout>
  );
};

export default CommunityHospitaMainlPage;

const HospitalInfoWrapper = styled.div`
  padding: 3rem 3.5rem;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.7rem 1.6rem;
  margin-bottom: 3rem;
  font-size: var(--fs-md);
  border: 1px solid var(--border-color);
  border-radius: 26px;

  &::after {
    display: inline-block;
    content: '';
    width: 16px;
    height: 16px;
    margin-left: 0.6rem;
    background: no-repeat center/cover url(${BOTTOM_ARROW_ICON});
  }
`;
