import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

const FrameMain = styled.main`
  position: relative;
  max-width: 390px;
  margin: 0 auto;
  background-color: var(--main-bg-color);
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 8px;
  overflow: hidden;
  word-break: break-all;
`;

const ScreenContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const ScreenPage = styled.div`
  position: relative;
  flex: 1 1 0%;
  overflow-y: auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <FrameMain>
        <ScreenContainer>
          <ScreenPage className='hidden-scroll'>
            <h1>가져도댕냥 프로젝트</h1>
          </ScreenPage>
        </ScreenContainer>
      </FrameMain>
    </>
  );
}

export default App;
