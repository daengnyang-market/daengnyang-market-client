import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ProfileInfo from './ProfileInfo';
import Button from '../../components/common/Button/Button';

const ProfileSettingsPage = () => {
  const location = useLocation();
  console.log(location.state);

  const email = location.state.email;
  const password = location.state.password;

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

  const [disabledButton, setDisabledButton] = useState(true);
  // const disabledButtonFunction = (value) => {
  //   setDisabledButton(value);
  // };

  // 버튼 활성화
  useEffect(() => {
    if (userName && accountName && intro) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
    // console.log('render!!');
    // console.log(link);
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
        console.log(res);
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
        userNameFunction={userNameFunction}
        accountNameFunction={accountNameFunction}
        introFunction={introFunction}
        imageFunction={imageFunction}
        // disabledButtonFunction={disabledButtonFunction}
      />
      <Link to='/'>
        <Button disabled={disabledButton} onClickHandler={onClickStartButtonHandler} size='L'>
          가져도댕냥 시작하기
        </Button>
      </Link>
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
