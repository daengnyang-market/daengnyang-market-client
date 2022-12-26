import { Swiper, SwiperSlide } from 'swiper/react';
import Product from '../../common/Product/Product';
import 'swiper/css';
import { Pagination } from 'swiper';
import './multiItemCarousel.css';
import { useState } from 'react';
import ProductModal from '../../common/modal/ProductModal/ProductModal';
import { useNavigate } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';
import { useContext } from 'react';
import { type } from '@testing-library/user-event/dist/type';

export default function MultiItemCarousel({ itemList }) {
  const { userAccountname } = useContext(AuthContextStore);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isMyProduct, setIsMyProduct] = useState(itemList[0].author.accountname.indexOf(userAccountname) !== -1);
  const navigate = useNavigate();
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const moveProductUrl = (url) => {
    window.open(url);
  };

  const [productId, setProductId] = useState();
  // console.log(productId);

  const isMyProductFunction = () => {
    isMyProduct ? setIsOpenModal(true) : moveProductUrl('https://www.naver.com');
  };

  const productIdFunction = (value) => {
    // console.log('productIdFunction 입니다.');
    // console.log(value);
    setProductId(value);
  };

  return (
    <>
      <Swiper
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {itemList.map((item) => (
          <SwiperSlide key={item.id}>
            <Product
              productid={item.id}
              productImg={item.itemImage}
              productName={item.itemName}
              productPrice={item.price}
              onClick={() => {
                isMyProductFunction();
                productIdFunction(item.id);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {isOpenModal ? <ProductModal productid={productId} closeModal={closeModal} /> : <></>}
    </>
  );
}
