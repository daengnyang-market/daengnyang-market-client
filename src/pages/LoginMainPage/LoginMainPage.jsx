import styled from 'styled-components';
import { LOGO_WHITE_IMAGE } from '../../styles/CommonImages';
import { KAKAO_ICON, GOOGLE_ICON, FACEBOOK_ICON } from '../../styles/CommonIcons';

const LoginMainPage = () => {
  return (
    <Main>
      <LogoHeadingOne>
        <LogoImg src={LOGO_WHITE_IMAGE} alt='가져도댕냥 로고' />
      </LogoHeadingOne>
      <LoginSection>
        <KakaoButton>
          <CommonStyleImg src={KAKAO_ICON} alt='' />
          카카오 계정으로 로그인
        </KakaoButton>
        <GoogleButton>
          <CommonStyleImg src={GOOGLE_ICON} alt='' />
          구글 계정으로 로그인
        </GoogleButton>
        <FacebookButton>
          <CommonStyleImg src={FACEBOOK_ICON} alt='' />
          페이스북 계정으로 로그인
        </FacebookButton>
        <Ul>
          <EmailLoginLi>
            <button type='button'>이메일로 로그인</button>
          </EmailLoginLi>
          <JoinLi>
            <a href='/join'>회원가입</a>
          </JoinLi>
        </Ul>
      </LoginSection>
    </Main>
  );
};

export default LoginMainPage;

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--login-bg-color);
`;

const LogoHeadingOne = styled.h1`
  width: 160px;
  height: 160px;
  margin: 17.1rem 0 0 13rem;
`;

const LogoImg = styled.img`
  width: 100%;
`;

const LoginSection = styled.section`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding: 5rem 0 8.2rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: var(--sub-txt-color);
`;

// 버튼 공통 스타일
const CommonStyleButton = styled.button`
  position: relative;
  width: 322px;
  height: 44px;
  border-radius: 44px;
  background-color: #fff;
  margin-bottom: 10px;
  font-size: var(--fs-md);
  line-height: 18px;
  color: var(--sub-text-color);
`;

const KakaoButton = styled(CommonStyleButton)`
  border: 1px solid #f2c94c;
`;
const GoogleButton = styled(CommonStyleButton)`
  border: 1px solid var(--sub-text-color);
`;
const FacebookButton = styled(CommonStyleButton)`
  border: 1px solid #2d9cdb;
  margin-bottom: 20px;
`;

// 이미지 공통 스타일
const CommonStyleImg = styled.img`
  display: block;
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;

  // props
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
`;

// 상속
// const KakaoImg = styled(CommonStyleImg)``;
// const GoogleImg = styled(CommonStyleImg)``;
// const FacebookImg = styled(CommonStyleImg)``;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  line-height: 15px;
  font-size: 12px;
  color: var(--sub-text-color);
`;

const EmailLoginLi = styled.li`
  &::after {
    content: '|';
    margin: 0 12px 0 11px;
    color: var(--txt-light-gray);
  }
`;

const JoinLi = styled.li``;
