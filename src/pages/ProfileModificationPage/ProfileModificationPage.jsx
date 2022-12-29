import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import TopUploadNav from '../../components/common/TopNavBar/TopUploadNav';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import ProfileInfo from '../ProfileSettingsPage/ProfileInfo';
import { AuthContextStore } from '../../context/AuthContext';

const ProfileModificationPage = () => {
  const { userToken } = useContext(AuthContextStore);
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const userNameFunction = (value) => {
    setUserName(value);
  };

  const [accountName, setAccountName] = useState('');
  const accountNameFunction = (value) => {
    setAccountName(value);
  };

  const [defaultAcconutName, setDefaultAccountName] = useState('');

  const [intro, setIntro] = useState('');
  const introFunction = (value) => {
    setIntro(value);
  };

  const [image, setImage] = useState('');
  const imageFunction = (value) => {
    setImage(value);
  };

  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    const getInfo = () => {
      const option = {
        url: 'https://mandarin.api.weniv.co.kr/user/myinfo',
        method: 'GET',
        headers: { Authorization: `Bearer ${userToken}` },
      };

      axios(option)
        .then((res) => {
          // console.log(res.data.user);
          setUserName(res.data.user.username);
          setDefaultAccountName(res.data.user.accountname);
          setAccountName(res.data.user.accountname);
          setIntro(res.data.user.intro);
          setImage(res.data.user.image);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getInfo();
  }, [userToken]);

  const onClickSaveButtonHandler = () => {
    const option = {
      url: 'https://mandarin.api.weniv.co.kr/user',
      method: 'PUT',
      headers: { Authorization: `Bearer ${userToken}`, 'Content-type': 'application/json' },
      data: {
        user: {
          username: userName,
          accountname: accountName,
          intro: intro,
          image: image,
        },
      },
    };

    axios(option)
      .then((res) => {
        // console.log('프로필 수정 성공!!');
        navigate('/profile');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // 버튼 활성화
  useEffect(() => {
    if (userName && accountName && intro) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
    // console.log('render!!');
  }, [userName, accountName, intro]);

  return (
    <>
      <TopUploadNav activeButton={disabledButton} onClick={onClickSaveButtonHandler} type={'submit'} />

      <ContentsLayout isTabMenu='false' padding='0'>
        <Section>
          <h2 className='sr-only'>프로필 정보 수정</h2>
          <ProfileInfo
            userNameFunction={userNameFunction}
            accountNameFunction={accountNameFunction}
            introFunction={introFunction}
            imageFunction={imageFunction}
            userName={userName}
            defaultAcconutName={defaultAcconutName}
            accountName={accountName}
            intro={intro}
            image={image}
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
