import Router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';
import MainLayout from './components/layout/ContentsLayout/MainLayout';
import { AuthContextProvider } from './context/AuthContext';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AuthContextProvider>
        <MainLayout>
          <Router />
        </MainLayout>
      </AuthContextProvider>
    </>
  );
};
export default App;
