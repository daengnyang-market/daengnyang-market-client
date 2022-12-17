import React from 'react';
import styled from 'styled-components';

const FrameLayout = ({ children }) => {
  return (
    <Frame>
      <Screen>{children}</Screen>
    </Frame>
  );
};

export default FrameLayout;

const Frame = styled.div`
  position: relative;
  max-width: 390px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: var(--main-bg-color);
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 8px;
`;

const Screen = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;
