import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProfileImage from '../../ProfileImage/ProfileImage';

const UserAccountInfo = ({ keyword = '', accountname, username, image }) => {
  const usernameValidate = ~username.indexOf(keyword);
  const accountnameValidate = ~accountname.indexOf(keyword);
  const COMMA_APPEND_USERNAME = username.replace(keyword, `,${keyword},`);
  const arrayKeyword = COMMA_APPEND_USERNAME.split(',');

  return (
    <UserLink to={`/profile/${accountname}`}>
      <ProfileImage src={image} alt={`${username}님의 프로필사진`} width='50' />
      <AccountInfoWrapper>
        <UserName className='ellipsis'>
          {!usernameValidate && accountnameValidate ? (
            <>{username}</>
          ) : (
            <span>
              {arrayKeyword[0]}
              <Keyword>{arrayKeyword[1]}</Keyword>
              {arrayKeyword[2]}
            </span>
          )}
        </UserName>
        <UserId className='ellipsis'>{accountname}</UserId>
      </AccountInfoWrapper>
    </UserLink>
  );
};

export default UserAccountInfo;

const UserLink = styled(Link)`
  flex: 1;
  display: flex;
`;

const AccountInfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

const UserName = styled.strong`
  display: block;
  max-width: 20rem;
  margin-bottom: 0.6rem;
  font-size: var(--fs-md);
  font-weight: 500;
`;

const Keyword = styled.span`
  && {
    color: var(--main-color);
  }
`;

const UserId = styled.strong`
  display: block;
  max-width: 20rem;
  font-size: var(--fs-sm);
  color: var(--sub-text-color);

  ::before {
    content: '@ ';
  }
`;
