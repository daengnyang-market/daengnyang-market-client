import axios from 'axios';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContextStore } from '../../../../context/AuthContext';
import Button from '../../Button/Button';
import UserAccountInfo from '../UserAccountInfo/UserAccountInfo';

const Follow = ({ followUserInfo }) => {
  const [isFollow, setIsFollow] = useState(followUserInfo.isfollow);
  const { userToken, userAccountname } = useContext(AuthContextStore);

  const switchFollow = async () => {
    const option = {
      url: `https://mandarin.api.weniv.co.kr/profile/${followUserInfo.accountname}/${isFollow ? 'unfollow' : 'follow'}`,
      method: isFollow ? 'DELETE' : 'POST',
      headers: { Authorization: `Bearer ${userToken}`, 'Content-type': 'application/json' },
    };

    await axios(option)
      .then((res) => {
        setIsFollow(!isFollow);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <UserItem>
      <UserAccountInfo
        accountname={followUserInfo.accountname}
        username={followUserInfo.username}
        image={followUserInfo.image}
      />

      {followUserInfo.accountname === userAccountname ? (
        <></>
      ) : (
        <Button
          size='S'
          backgroundColor={isFollow ? 'var(--main-bg-color)' : undefined}
          borderColor={isFollow ? 'var(--border-color)' : undefined}
          textColor={isFollow ? 'var(--sub-text-color)' : undefined}
          onClickHandler={switchFollow}
        >
          {isFollow ? '취소' : '팔로우'}
        </Button>
      )}
    </UserItem>
  );
};

export default Follow;

const UserItem = styled.li`
  display: flex;
  align-items: center;
`;
