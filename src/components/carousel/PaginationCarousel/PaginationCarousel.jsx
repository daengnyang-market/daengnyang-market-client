import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './paginationCarousel.css';

const PaginationCarousel = ({ itemList }) => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        loop='true'
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {itemList.map(({ id, src, alt }) => (
          <SwiperSlide key={id}>
            <img src={src} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PaginationCarousel;
