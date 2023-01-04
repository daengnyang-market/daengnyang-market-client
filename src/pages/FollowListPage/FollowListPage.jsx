import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContextStore } from '../../context/AuthContext';
import TopTitleNav from '../../components/common/TopNavBar/TopTitleNav';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import Follow from '../../components/common/UserItem/Follow/Follow';
import styled from 'styled-components';
import EmptyFollowList from './EmptyFollowList';
import Loading from '../../components/common/Loading/Loading';

const FollowListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { accountname, type } = useParams();
  const { userToken } = useContext(AuthContextStore);
  const [followList, setFollowList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getFollowList = async () => {
      try {
        if (!accountname || !type) {
          throw new Error('PATH_ERROR');
        }

        if (type !== 'follower' && type !== 'following') {
          throw new Error('PATH_ERROR');
        }
      } catch (err) {
        navigate('/notfound');
        return;
      }

      const option = {
        url: `https://mandarin.api.weniv.co.kr/profile/${accountname}/${type}?limit=0`,
        method: 'GET',
        headers: { Authorization: `Bearer ${userToken}`, 'Content-type': 'application/json' },
      };

      await axios(option)
        .then((res) => {
          setIsLoading(false);
          setFollowList(res.data);
        })
        .catch((err) => {
          setIsLoading(false);

          if (err === '404' || err.response.status === 404) {
            navigate('/notfound');
            return;
          }

          console.error(err);
        });
    };

    getFollowList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TopTitleNav title={type === 'follower' ? 'Followers' : 'Followings'} viewMoreBtn={false} />
      {isLoading ? (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      ) : (
        <ContentsLayout padding='2.4rem 1.6rem'>
          {followList.length > 0 ? (
            <FollowList>
              {followList.map((followUser) => (
                <Follow key={followUser._id} followUserInfo={followUser} />
              ))}
            </FollowList>
          ) : (
            <EmptyFollowList type={type} />
          )}
        </ContentsLayout>
      )}

      <TabMenu currentMenuId={4} />
    </>
  );
};

export default FollowListPage;

const LoadingWrapper = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
`;

const FollowList = styled.ul`
  & > li:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;
