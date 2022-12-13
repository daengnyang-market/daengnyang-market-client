import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PROFILE2_IMAGE } from '../../../../styles/CommonImages';
import ProfileImage from '../../ProfileImage/ProfileImage';

const UserAccountInfo = ({ keyword = '' }) => {
  return (
    <UserLink to='#'>
      <ProfileImage src={PROFILE2_IMAGE} alt='weniv_Mandarin님의 프로필 사진' width='50' />

      <AccountInfoWrapper>
        <UserName>
          {keyword ? (
            <>
              <Keyword>애월읍</Keyword> 위니브 감귤농장
            </>
          ) : (
            <>애월읍 위니브 감귤농장</>
          )}
        </UserName>
        <UserId>weniv_Mandarin</UserId>
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
  color: var(--main-color);
`;

const UserId = styled.strong`
  display: block;
  font-size: var(--fs-sm);
  color: var(--sub-text-color);

  ::before {
    content: '@ ';
  }
`;
