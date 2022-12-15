import { Swiper, SwiperSlide } from 'swiper/react';
import Product from '../../common/Product/Product';
import 'swiper/css';
import { Pagination } from 'swiper';
import './multiItemCarousel.css';

export default function App() {
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
          <Product productImg='https://picsum.photos/250/250' productName='감귤인형' productPrice='30000' />
        </SwiperSlide>
        <SwiperSlide>
          <Product productImg='https://picsum.photos/250/250' productName='감귤인형' productPrice='30000' />
        </SwiperSlide>
        <SwiperSlide>
          <Product productImg='https://picsum.photos/250/250' productName='감귤인형' productPrice='30000' />
        </SwiperSlide>
        <SwiperSlide>
          <Product productImg='https://picsum.photos/250/250' productName='감귤인형' productPrice='30000' />
        </SwiperSlide>
        <SwiperSlide>
          <Product productImg='https://picsum.photos/250/250' productName='감귤인형' productPrice='30000' />
        </SwiperSlide>
        <SwiperSlide>
          <Product productImg='https://picsum.photos/250/250' productName='감귤인형' productPrice='30000' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
