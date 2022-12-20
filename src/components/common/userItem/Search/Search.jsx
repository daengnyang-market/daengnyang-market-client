import React from 'react';
import UserAccountInfo from '../UserAccountInfo/UserAccountInfo';

const Search = ({ keyword, accountname, username, image }) => {
  return (
    <div>
      <UserAccountInfo keyword={keyword} accountname={accountname} image={image} username={username} />
    </div>
  );
};

export default Search;
