import React from 'react';
import styled from 'styled-components';

const MainLayout = ({ children }) => {
  return (
    <MainContainer>
      <ScreenContainer>{children}</ScreenContainer>
    </MainContainer>
  );
};

export default MainLayout;

const MainContainer = styled.div`
  position: relative;
  max-width: 390px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: var(--main-bg-color);
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 8px;
`;

const ScreenContainer = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;
