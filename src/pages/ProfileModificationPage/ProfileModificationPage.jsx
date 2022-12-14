import styled from 'styled-components';
import TopUploadNav from '../../components/common/TopNavBar/TopUploadNav';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import ProfileInfo from '../ProfileSettingsPage/ProfileInfo';

const ProfileModificationPage = () => {
  return (
    <>
      <TopUploadNav />
      <ContentsLayout isTabMenu='false' padding='0'>
        <Section>
          <h2 className='sr-only'>프로필 정보 수정</h2>
          <ProfileInfo />
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
