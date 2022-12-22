import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MultiItemCarousel from '../../../components/carousel/MultiItemCarousel/MultiItemCarousel';
import { useEffect, useContext, useState } from 'react';
import { AuthContextStore } from '../../../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../../components/common/Loading/Loading';

const ProfileProduct = () => {
  let { accountname } = useParams();
  const navigate = useNavigate();
  const { userToken, userAccountname } = useContext(AuthContextStore);

  const [isRendered, setisRendered] = useState(true);
  // 상품 담기
  const [productList, setProductList] = useState([]);

  const url = `https://mandarin.api.weniv.co.kr`;

  // 상품 리스트 불러오기
  const getProduct = () => {
    axios({
      url: url + `/product/${accountname ? accountname : userAccountname}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        setProductList(res.data.product);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    setisRendered(true);
    getProduct();
  }, []);

  if (!isRendered) {
    <Loading />;
  } else {
    return (
      <ProductWrapper>
        <h2>판매 중인 상품</h2>
        <MultiItemCarousel itemList={productList} />
      </ProductWrapper>
    );
  }
};

export default ProfileProduct;

const ProductWrapper = styled.section`
  padding: 2em 0;
  & h2 {
    padding-left: 1em;
    margin-bottom: 1.6em;
    font-size: 1.6em;
    font-weight: 700;
  }
`;
