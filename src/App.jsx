import styled from 'styled-components';
import Post from './components/common/Post/Post';
import GlobalStyle from './styles/GlobalStyle';

const FrameMain = styled.main`
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

function App() {
  return (
    <>
      <GlobalStyle />
      <FrameMain>
        <ScreenContainer>
          <h1>가져도댕냥 프로젝트</h1>
          <Post />
        </ScreenContainer>
      </FrameMain>
    </>
  );
}

export default App;