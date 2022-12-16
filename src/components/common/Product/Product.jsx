import React from 'react';
import styled from 'styled-components';

const Product = ({ onClick, productImg, productName, productPrice }) => {
  return (
    <>
      <WrapperDiv onClick={onClick}>
        <ProductImg src={productImg} alt={`${productName} 상품 이미지`} />
        <ProductName>{productName}</ProductName>
        <ProductPrice>{productPrice}</ProductPrice>
      </WrapperDiv>
    </>
  );
};

export default Product;

const WrapperDiv = styled.div`
  width: 14rem;
  height: 13.2rem;
  margin-left: 1.6rem;
  cursor: pointer;
`;

const ProductImg = styled.img`
  width: 14rem;
  height: 9rem;
  border: 0.5px solid var(--border-color);
  border-radius: 8px;
`;

const ProductName = styled.p`
  font-size: var(--fs-md);
  line-height: 1.8rem;
  margin: 0.6rem 0.2rem 0.4rem 0.2rem;
`;

const ProductPrice = styled.p`
  font-weight: 700;
  font-size: var(--fs-sm);
  line-height: 1.5rem;
  color: var(--main-color);
`;
