import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import TopUploadNav from '../../components/common/TopNavBar/TopUploadNav';
import ContentsLayout from './../../components/layout/ContentsLayout/ContentsLayout';
import { IMG_BUTTON_ICON } from '../../styles/CommonIcons';
import ItemNameInput from './ItemNameInput';
import PriceInput from './PriceInput';
import ItemLinkInput from './ItemLinkInput';
import { AuthContextStore } from '../../context/AuthContext';

const ProductRegistrationPage = ({
  activeModButton,
  onClickProductModificationHandler,
  itemNameModFunction,
  priceModFunction,
  linkModFunction,
  itemImageModFunction,
  itemNameMod,
  priceMod,
  linkMod,
  itemImageMod,
}) => {
  const [itemName, setItemName] = useState('');
  const itemNameFunction = (value) => {
    setItemName(value);
  };
  console.log(itemName);

  const [price, setPrice] = useState('');
  const priceFunction = (value) => {
    setPrice(parseInt(value));
  };
  console.log(price);

  const [link, setLink] = useState('');
  const linkFunction = (value) => {
    setLink(value);
  };
  console.log(link);

  const [itemImage, setItemImage] = useState('');

  const { userToken } = useContext(AuthContextStore);

  const [disabledButton, setDisabledButton] = useState(true);

  const onClickProductRegistrationHandler = () => {
    const option = {
      url: 'https://mandarin.api.weniv.co.kr/product',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
      data: {
        product: {
          itemName: itemName,
          price: price,
          link: link,
          itemImage: itemImage,
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

  // 업로드 이미지 섬네일
  const [thumbnailImg, setThumbnailImg] = useState('');

  const onChangeInputHandler = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onloadend = () => {
      const thumbnailImgUrl = reader.result;

      if (thumbnailImgUrl) {
        setThumbnailImg([thumbnailImgUrl]);
      }

      if (itemImageModFunction) {
        itemImageModFunction(thumbnailImgUrl);
      } else {
        setItemImage(thumbnailImgUrl);
      }
    };
  };

  // 버튼 활성화
  useEffect(() => {
    if (itemName && price && link && thumbnailImg) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
    // console.log('render!!');
    // console.log(link);
  }, [thumbnailImg, itemName, price, link]);

  return (
    <>
      <Link to='/profile'>
        <TopUploadNav
          activeModButton={activeModButton}
          activeButton={disabledButton}
          onClick={() => {
            if (onClickProductModificationHandler) {
              // console.log('onClickProductModificationHandler가 있습니다!');
              onClickProductModificationHandler();
            } else {
              // console.log('tonClickProductModificationHandler가 없습니다!');
              onClickProductRegistrationHandler();
            }
          }}
        />
      </Link>

      <ContentsLayout isTabMenu='false' padding='0'>
        <Section>
          <h2 className='sr-only'>상품 정보</h2>
          <P>이미지 등록</P>
          <Label htmlFor='productImg'>
            {thumbnailImg ? <Img src={thumbnailImg} alt='' /> : itemImageMod ? <Img src={itemImageMod} alt='' /> : ''}
          </Label>
          <input onChange={onChangeInputHandler} className='sr-only' id='productImg' type='file' accept='image/*' />
          <Form>
            <ItemNameInput
              itemNameFunction={itemNameFunction}
              itemNameModFunction={itemNameModFunction}
              itemNameMod={itemNameMod}
              labelText='상품명'
              inputType='text'
              id='itemNameInput'
              placeholder='2~15자 이내여야 합니다.'
              children='2~15자 이내여야 합니다.'
              maxLength='15'
            />
            <PriceInput
              priceFunction={priceFunction}
              priceModFunction={priceModFunction}
              priceMod={priceMod}
              labelText='가격'
              inputType='text'
              id='priceInput'
              placeholder='숫자만 입력 가능합니다.'
            />
            <ItemLinkInput
              linkFunction={linkFunction}
              linkModFunction={linkModFunction}
              linkMod={linkMod}
              labelText='판매 링크'
              inputType='url'
              id='itemLinkInput'
              placeholder='URL을 입력해 주세요.'
            />
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
  border: 0.5px solid var(--border-color);
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

// IE 미지원
const Img = styled.img`
  object-fit: scale-down;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  margin-bottom: 3rem;
`;
