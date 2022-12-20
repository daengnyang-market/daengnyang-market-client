import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProfileImage from '../../ProfileImage/ProfileImage';

// 키워드를 설정안하면, 기본 username 이 뜨도록 설정해두었습니다.
const UserAccountInfo = ({ keyword = '', accountname, username, image }) => {
  const usernameValidate = ~username.indexOf(keyword);
  const accountnameValidate = ~accountname.indexOf(keyword);
  const COMMA_APPEND_USERNAME = username.replace(keyword, `,${keyword},`);
  const arrayKeyword = COMMA_APPEND_USERNAME.split(',');

  return (
    <UserLink to='#'>
      <ProfileImage src={image} alt={`${username}님의 프로필사진`} width='50' />
      <AccountInfoWrapper>
        <UserName>
          {/* TODO : username은 keyword와 겹치는데 accountname은 겹지 않는다면, 그냥 username을 반환 / 그게 아니라면, keyword 만 색상 변경하여 출력 */}
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
        <UserId>{accountname}</UserId>
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
  font-size: var(--fs-sm);
  color: var(--sub-text-color);

  ::before {
    content: '@ ';
  }
`;
