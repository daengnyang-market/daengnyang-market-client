import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import TopSearchNav from '../../components/common/TopNavBar/TopSearchNav';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import axios from 'axios';
import Search from '../../components/common/userItem/Search/Search';
import { AuthContextStore } from '../../context/AuthContext';
const SearchPage = () => {
  const [searchData, setSearchData] = useState([]);
  const [keywordData, setKeywordData] = useState('');
  const { userToken } = useContext(AuthContextStore);

  const getSearchData = async (searchKeyword) => {
    await axios({
      method: 'get',
      url: `https://mandarin.api.weniv.co.kr/user/searchuser/?keyword=${searchKeyword}`,
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    }).then((response) => {
      setSearchData(response.data);
    });
  };

  const onTyping = (searchKeyword) => {
    !searchKeyword ? setSearchData('') : getSearchData(searchKeyword);
    setKeywordData(searchKeyword);
  };
  // TODO : 성능개선을 위해, 무한스크롤과 버추얼스크롤을 적용해 볼 예정이다.
  return (
    <ContentsLayout isTabMenu={true} padding='0rem'>
      <TopSearchNav onTyping={onTyping} />
      <SearchProfileViewer>
        {searchData.length === 0 || !searchData ? (
          <></>
        ) : (
          searchData.map((user) => {
            return (
              <Search
                key={Math.random() * 100}
                keyword={keywordData}
                image={user.image}
                accountname={user.accountname}
                username={user.username}
              />
            );
          })
        )}
      </SearchProfileViewer>
      <TabMenu />
    </ContentsLayout>
  );
};

export default SearchPage;

const SearchProfileViewer = styled.main`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 39rem;
  height: calc(100% - 10.8rem);
  padding: 2rem 1.6rem;
  overflow-y: scroll;
  div {
    margin-bottom: 1.6rem;
  }
`;
