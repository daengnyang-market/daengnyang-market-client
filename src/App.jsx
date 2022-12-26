import Router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';
import MainLayout from './components/layout/ContentsLayout/MainLayout';
import AuthContext from './context/AuthContext';
import UserLocationContext from './context/UserLocationContext';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AuthContext>
        <UserLocationContext>
          <MainLayout>
            <Router />
          </MainLayout>
        </UserLocationContext>
      </AuthContext>
    </>
  );
};
export default App;
