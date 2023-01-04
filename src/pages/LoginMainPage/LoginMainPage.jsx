import styled from 'styled-components';
import { LOGO_WHITE_IMAGE } from '../../styles/CommonImages';
import { KAKAO_ICON, GOOGLE_ICON, FACEBOOK_ICON } from '../../styles/CommonIcons';
import { fadeIn } from '../../components/common/Animation/Animation';
import { Link } from 'react-router-dom';

const LoginMainPage = () => {
  return (
    <>
      <Main>
        <LogoHeadingWrapper>
          <LogoHeadingOne>
            <LogoImg src={LOGO_WHITE_IMAGE} alt='가져도댕냥 로고' />
          </LogoHeadingOne>
        </LogoHeadingWrapper>
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
              <Link to='/login'>이메일로 로그인</Link>
            </EmailLoginLi>
            <JoinLi>
              <Link to='/join'>회원가입</Link>
            </JoinLi>
          </Ul>
        </LoginSection>
      </Main>
    </>
  );
};

export default LoginMainPage;

const Main = styled.main`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: var(--login-bg-color);
  animation: ${fadeIn} 200ms linear;
`;

const LogoHeadingWrapper = styled.div`
  width: 100%;
  margin-bottom: 319px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoHeadingOne = styled.h1`
  width: 160px;
  height: 160px;
`;

const LogoImg = styled.img`
  width: 100%;
  margin-left: 15px;
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

const CommonStyleButton = styled.button`
  position: relative;
  width: 32.2rem;
  height: 4.4rem;
  border-radius: 44px;
  background-color: #fff;
  margin-bottom: 1rem;
  font-size: var(--fs-md);
  line-height: 1.8rem;
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
  margin-bottom: 2rem;
`;

const CommonStyleImg = styled.img`
  display: block;
  position: absolute;
  left: 1.4rem;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  line-height: 1.5rem;
  font-size: var(--fs-sm);
  color: var(--sub-text-color);
`;

const EmailLoginLi = styled.li`
  &::after {
    content: '|';
    margin: 0 1.2rem 0 1.1rem;
    color: var(--txt-light-gray);
  }
`;

const JoinLi = styled.li``;
