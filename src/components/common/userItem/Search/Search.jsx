import React from 'react';
import UserAccountInfo from '../UserAccountInfo/UserAccountInfo';

// * 사용법 - 검색어 마크를 위해서는 아래의 props를 전달해줘야 합니다 *
// keyword : 검색어 (생략시 기본값: '')
const Search = () => {
  let keyword = '애월읍';

  return (
    <li>
      <UserAccountInfo keyword={keyword} />
    </li>
  );
};

export default Search;
