import React from 'react';
import WebFont from 'webfontloader';

import Routes from './routes/routes';
import GlobalStyle from './styles/global';

WebFont.load({
  google: {
    families: [
      'Nunito Sans:300,400,600,700,800,900',
      'Montserrat:300,400,600,700,800',
      'Lato:300,400,600,700',
      'Nunito:400,600,700,900',
      'Ubuntu:400,600,700',
    ],
  },
});

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
