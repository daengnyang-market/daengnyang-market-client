import React from 'react';
import styled from 'styled-components';

import MultiItemCarousel from '../../../components/carousel/MultiItemCarousel/MultiItemCarousel';

const ProfileProduct = () => {
  return (
    <ProductWrapper>
      <h2>판매 중인 상품</h2>
      <MultiItemCarousel />
    </ProductWrapper>
  );
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