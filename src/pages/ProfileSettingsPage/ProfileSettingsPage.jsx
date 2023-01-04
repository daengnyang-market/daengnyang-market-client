import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProfileInfo from './ProfileInfo';
import Button from '../../components/common/Button/Button';
import { defaultImage } from './DefaultImage';

const ProfileSettingsPage = () => {
  const location = useLocation();
  const email = location.state.email;
  const password = location.state.password;

  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const userNameFunction = (value) => {
    setUserName(value);
  };

  const [accountName, setAccountName] = useState('');
  const accountNameFunction = (value) => {
    setAccountName(value);
  };

  const [intro, setIntro] = useState('');
  const introFunction = (value) => {
    setIntro(value);
  };

  const [image, setImage] = useState('');
  const imageFunction = (value) => {
    setImage(value);
  };

  if (!image) {
    setImage(defaultImage);
  }

  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    if (userName && accountName && intro) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [userName, accountName, intro]);

  const onClickStartButtonHandler = () => {
    const option = {
      url: 'https://mandarin.api.weniv.co.kr/user',
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      data: {
        user: {
          username: userName,
          email: email,
          password: password,
          accountname: accountName,
          intro: intro,
          image: image,
        },
      },
    };

    axios(option)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ProfileSettingsSection>
      <TitleHeadingTwo>프로필 설정</TitleHeadingTwo>
      <SubTitleP>나중에 언제든지 변경할 수 있습니다.</SubTitleP>
      <ProfileInfo
        onClickStartButtonHandler={onClickStartButtonHandler}
        disabledButton={disabledButton}
        userNameFunction={userNameFunction}
        accountNameFunction={accountNameFunction}
        introFunction={introFunction}
        imageFunction={imageFunction}
      />
      <Button disabled={disabledButton} onClickHandler={onClickStartButtonHandler} size='L'>
        가져도댕냥 시작하기
      </Button>
    </ProfileSettingsSection>
  );
};

export default ProfileSettingsPage;

const ProfileSettingsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 3.4rem 0;
`;

const TitleHeadingTwo = styled.h2`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3rem;
  margin-bottom: 1.2rem;
`;

const SubTitleP = styled.p`
  font-size: var(--fs-md);
  line-height: 1.4rem;
  color: var(--sub-text-color);
  margin-bottom: 3rem;
`;
