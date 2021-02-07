import React from 'react';
import GlobalStyle from './styles/global';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
};

export default App;
