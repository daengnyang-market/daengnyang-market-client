import styled from 'styled-components';
import ProfileImage from '../../components/common/ProfileImage/ProfileImage';
import { PROFILE1_IMAGE } from '../../styles/CommonImages';
import { UPLOAD_FILE_ICON } from '../../styles/CommonIcons';
import Input from '../../components/common/Input/Input';

const ProfileInfo = () => {
  return (
    <>
      <label htmlFor='profileImg'>
        <WrapperImg>
          <ProfileImage src={PROFILE1_IMAGE} alt='업로드 이미지' width='110' />
          <UploadFileIconImg src={UPLOAD_FILE_ICON} alt='' />
        </WrapperImg>
      </label>
      <input className='sr-only' type='file' id='profileImg' accept='image/*' />
      <Form>
        <Input labelText='사용자 이름' inputType='text' id='userNameInput' placeholder='2~10자 이내여야 합니다.' />
        <Input
          labelText='계정 ID'
          inputType='text'
          id='userIdInput'
          placeholder='영문, 숫자, 특수문자(,), (_)만 사용 가능합니다.'
        />
        <Input
          labelText='소개'
          inputType='text'
          id='userIntroInput'
          placeholder='자신과 판매할 상품에 대해 소개해 주세요.'
        ></Input>
      </Form>
    </>
  );
};

export default ProfileInfo;

const WrapperImg = styled.div`
  position: relative;
  margin-bottom: 3rem;
  cursor: pointer;
`;

const UploadFileIconImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 36px;
  height: 36px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  margin-bottom: 30px;
`;
