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

  const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(false);
        setProductList(res.data.product);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };
  useEffect(() => {
    getProduct();
  }, [userToken, accountname]);

  return (
    <>
      {isLoading ? (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      ) : productList.length > 0 ? (
        <>
          <ProductWrapper>
            <h2>판매 중인 상품</h2>
            <MultiItemCarousel itemList={productList} />
          </ProductWrapper>
          <SectionBorder />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProfileProduct;

const LoadingWrapper = styled.div`
  display: flex;
  height: 208px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ProductWrapper = styled.section`
  padding: 2em 0;
  & h2 {
    padding-left: 1em;
    margin-bottom: 1.6em;
    font-size: 1.6em;
    font-weight: 700;
  }
`;

const SectionBorder = styled.div`
  height: 6px;
  width: 100%;
  border-top: 0.5px solid var(--border-color);
  border-bottom: 0.5px solid var(--border-color);
  background-color: var(--chat-bg-color);
`;
