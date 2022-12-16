import React, { useState } from 'react';
import styled from 'styled-components';
import CommunityLayout from './../../CommunityLayout';
import { BOTTOM_ICON } from '../../../../styles/CommonIcons';
import HospitalList from './HospitalList';
import CurrentLocationBar from '../CurrentLocationBar';
import FilterMenu from './FilterMenu';

const CommunityHospitaMainlPage = () => {
  const [isShowFilterMenu, setIsShowFilterMenu] = useState(false);
  const [selectFilterId, setSelectFilterId] = useState(0);
  const filterList = [
    { id: 0, title: '5km 이내' },
    { id: 1, title: '10km 이내' },
    { id: 2, title: '20km 이내' },
    { id: 3, title: '30km 이내' },
  ];

  const onClickBackgroundHandler = () => {
    setIsShowFilterMenu(!isShowFilterMenu);
  };

  const onClickFilterHandler = (filterId) => {
    setSelectFilterId(filterId);
    onClickBackgroundHandler();
  };

  return (
    <CommunityLayout padding='0'>
      <section>
        <h2 className='sr-only'>내 근처 동물병원 찾기</h2>
        <CurrentLocationBar />

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
          <HospitalList />
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
    background: no-repeat center/cover url(${BOTTOM_ICON});
  }
`;
