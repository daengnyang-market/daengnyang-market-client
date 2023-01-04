import React from 'react';
import styled from 'styled-components';

// * 사용법 - 2가지 props를 전달해줘야 합니다 *
// isTabMenu : 탭 메뉴 존재 여부를 boolean 값으로 전달해야 합니다. true인 경우 margin-bottom: 6rem이 적용됩니다. 기본값은 true입니다.
// padding : 적용할 패딩을 문자열 값으로 전달해야 합니다. 이때 단축 속성으로 전달해야 합니다. 기본값은 상단 2rem, 좌우 1.6rem으로 적용되어 있습니다.
const ContentsLayout = ({ children, isTabMenu = true, padding = '2rem 1.6rem 0 1.6rem', emptyProfileState = null }) => {
  return (
    <ContentsWrapper isTabMenu={isTabMenu} padding={padding} emptyProfileState={emptyProfileState}>
      {children}
    </ContentsWrapper>
  );
};

export default ContentsLayout;

const ContentsWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 4.8rem;
  margin-bottom: ${(props) => (props.isTabMenu ? '6rem' : 0)};
  padding: ${(props) => props.padding};
  ${(props) => (props.emptyProfileState === 'twice' ? 'height: calc(100vh - 110px);' : '')}
`;
