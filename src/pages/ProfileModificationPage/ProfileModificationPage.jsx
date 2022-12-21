import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TopUploadNav from '../../components/common/TopNavBar/TopUploadNav';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import ProfileInfo from '../ProfileSettingsPage/ProfileInfo';
import { AuthContextStore } from '../../context/AuthContext';

const ProfileModificationPage = () => {
  const { userToken } = useContext(AuthContextStore);

  const [userName, setUserName] = useState('');
  const userNameFunction = (value) => {
    setUserName(value);
    // // 버튼 활성화
    // if (userName && accountName && intro) {
    //   setDisabledButton(false);
    // } else {
    //   setDisabledButton(true);
    // }
  };
  // console.log(userName);

  const [accountName, setAccountName] = useState('');
  const accountNameFunction = (value) => {
    setAccountName(value);
    // 버튼 활성화
    // if (userName && accountName && intro) {
    //   setDisabledButton(false);
    // } else {
    //   setDisabledButton(true);
    // }
  };
  // console.log(accountName);

  const [intro, setIntro] = useState('');
  const introFunction = (value) => {
    setIntro(value);
    // 버튼 활성화
    // if (userName && accountName && intro) {
    //   setDisabledButton(false);
    // } else {
    //   setDisabledButton(true);
    // }
  };
  // console.log(intro);

  const [image, setImage] = useState('');
  const imageFunction = (value) => {
    setImage(value);
  };
  // console.log(image);

  const test = () => {
    const option = {
      url: 'https://mandarin.api.weniv.co.kr/user/myinfo',
      method: 'GET',
      headers: { Authorization: `Bearer ${userToken}` },
    };

    axios(option)
      .then((res) => {
        // console.log(res.data.user);
        setUserName(res.data.user.username);
        setAccountName(res.data.user.accountname);
        setIntro(res.data.user.intro);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  test();

  useEffect(() => {}, [userName]);

  return (
    <>
      <TopUploadNav />
      <ContentsLayout isTabMenu='false' padding='0'>
        <Section>
          <h2 className='sr-only'>프로필 정보 수정</h2>
          <ProfileInfo
            userNameFunction={userNameFunction}
            accountNameFunction={accountNameFunction}
            introFunction={introFunction}
            imageFunction={imageFunction}
            userName={userName}
            accountName={accountName}
            intro={intro}
          />
        </Section>
      </ContentsLayout>
    </>
  );
};

export default ProfileModificationPage;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 3.4rem 0;
`;

const Input = styled.input`
  border: 2px solid pink;
`;
