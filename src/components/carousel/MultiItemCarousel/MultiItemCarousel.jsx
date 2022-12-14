import { Swiper, SwiperSlide } from 'swiper/react';
import Product from '../../common/Product/Product';
import 'swiper/css';
import { Pagination } from 'swiper';
import './multiItemCarousel.css';
import { useState } from 'react';
import ProductModal from '../../common/Modal/ProductModal/ProductModal';
import { useNavigate } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';
import { useContext } from 'react';

export default function MultiItemCarousel({ itemList, updateProductList }) {
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

  const [productLink, setProductLink] = useState();

  const isMyProductFunction = () => {
    isMyProduct ? setIsOpenModal(true) : moveProductUrl('https://www.naver.com');
  };

  const productIdFunction = (value) => {
    setProductId(value);
  };

  const productLinkFunction = (value) => {
    setProductLink(value);
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
              productPrice={`${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 냥`}
              onClick={() => {
                isMyProductFunction();
                productIdFunction(item.id);
                productLinkFunction(item.link);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {isOpenModal ? (
        <ProductModal
          productid={productId}
          productLink={productLink}
          updateProductList={updateProductList}
          closeModal={closeModal}
        />
      ) : (
        <></>
      )}
    </>
  );
}
