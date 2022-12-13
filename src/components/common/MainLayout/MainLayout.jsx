import React from 'react';
import styled from 'styled-components';

// * 참고 - children은 <MainLayout></MainLayout> 태그 사이의 내용을 의미합니다. *

// * 사용법 - 1가지 props를 전달해줘야 합니다 *
// padding : 단축 속성으로 전달해야 합니다. (예: 20px 0 60px 30px, 20px 0 등)
const MainLayout = ({ children, padding }) => {
  return <Main padding={padding}>{children}</Main>;
};

export default MainLayout;

const Main = styled.main`
  margin-top: 48px;
  margin-bottom: 60px;
  padding: ${(props) => props.padding};
`;
