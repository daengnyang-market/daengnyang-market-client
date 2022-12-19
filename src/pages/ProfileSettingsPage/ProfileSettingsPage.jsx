import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ProfileInfo from './ProfileInfo';
import Button from '../../components/common/Button/Button';

const ProfileSettingsPage = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <ProfileSettingsSection>
      <TitleHeadingTwo>프로필 설정</TitleHeadingTwo>
      <SubTitleP>나중에 언제든지 변경할 수 있습니다.</SubTitleP>
      <ProfileInfo />
      <Link to='#'>
        <Button disabled={true} size='L'>
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
