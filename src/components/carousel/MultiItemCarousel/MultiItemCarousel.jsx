import { Swiper, SwiperSlide } from 'swiper/react';
import Product from '../../common/Product/Product';
import 'swiper/css';
import { Pagination } from 'swiper';
import './multiItemCarousel.css';
import { useState } from 'react';
import ProductModal from '../../common/modal/ProductModal/ProductModal';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isMyProduct, setIsMyProduct] = useState(true); // 모달 테스트용으로 넣어둔 코드입니다. true인 경우에만 모달 출력, false인 경우(다른 사람의 상품인 경우) 상품 링크로 바로 이동되어야 합니다.
  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const moveProductUrl = (url) => {
    window.open(url);
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
        <SwiperSlide>
          <Product
            productImg='https://picsum.photos/250/250'
            productName='감귤인형'
            productPrice='30000'
            onClick={() => (isMyProduct ? setIsOpenModal(true) : moveProductUrl('https://www.naver.com'))}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            productImg='https://picsum.photos/250/250'
            productName='감귤인형'
            productPrice='30000'
            onClick={() => (isMyProduct ? setIsOpenModal(true) : moveProductUrl('https://www.naver.com'))}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            productImg='https://picsum.photos/250/250'
            productName='감귤인형'
            productPrice='30000'
            onClick={() => (isMyProduct ? setIsOpenModal(true) : moveProductUrl('https://www.naver.com'))}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            productImg='https://picsum.photos/250/250'
            productName='감귤인형'
            productPrice='30000'
            onClick={() => (isMyProduct ? setIsOpenModal(true) : moveProductUrl('https://www.naver.com'))}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            productImg='https://picsum.photos/250/250'
            productName='감귤인형'
            productPrice='30000'
            onClick={() => (isMyProduct ? setIsOpenModal(true) : moveProductUrl('https://www.naver.com'))}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            productImg='https://picsum.photos/250/250'
            productName='감귤인형'
            productPrice='30000'
            onClick={() => (isMyProduct ? setIsOpenModal(true) : moveProductUrl('https://www.naver.com'))}
          />
        </SwiperSlide>
      </Swiper>
      {isOpenModal ? <ProductModal closeModal={closeModal} /> : <></>}
    </>
  );
}
