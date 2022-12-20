import Router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';
import MainLayout from './components/layout/ContentsLayout/MainLayout';
import AuthContext from './context/AuthContext';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AuthContext>
        <MainLayout>
          <Router />
        </MainLayout>
      </AuthContext>
    </>
  );
};
export default App;
