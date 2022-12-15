import styled from 'styled-components';
import TopUploadNav from '../../components/common/TopNavBar/TopUploadNav';
import ContentsLayout from './../../components/layout/ContentsLayout/ContentsLayout';
import { IMG_BUTTON_ICON } from '../../styles/CommonIcons';
import Input from './../../components/common/Input/Input';

const ProductRegistrationPage = () => {
  return (
    <>
      <TopUploadNav />
      <ContentsLayout isTabMenu='false' padding='0'>
        <Section>
          <h2 className='sr-only'>상품 정보</h2>
          <P>이미지 등록</P>
          <Label htmlFor='productImg'></Label>
          <input className='sr-only' id='productImg' type='file' accept='image/*' />
          <Form>
            <Input labelText='상품명' inputType='text' id='productNameInput' placeholder='2~15자 이내여야 합니다.' />
            <Input labelText='가격' inputType='number' id='priceInput' placeholder='숫자만 입력 가능합니다.' />
            <Input labelText='판매 링크' inputType='url' id='productLinkInput' placeholder='URL을 입력해 주세요.' />
          </Form>
        </Section>
      </ContentsLayout>
    </>
  );
};

export default ProductRegistrationPage;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem 3.4rem 0;
`;

const P = styled.p`
  font-size: var(--fs-sm);
  line-height: 1.4rem;
  color: var(--sub-txt-color);
  margin-bottom: 1.8rem;
`;

const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
  height: 20.4rem;
  background-color: var(--bg-color);
  border: 0.5 solid var(--border-color);
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 3rem;

  &::after {
    content: '';
    position: absolute;
    right: 1.2rem;
    bottom: 1.2rem;
    width: 3.6rem;
    height: 3.6rem;
    background-image: url(${IMG_BUTTON_ICON});
    background-size: cover;
    border-radius: 50%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  margin-bottom: 3rem;
`;
