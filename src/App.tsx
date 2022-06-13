import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import { useRoutes } from 'react-router-dom';
import routesConfig from './routes/index';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <div className="App">{useRoutes(routesConfig)}</div>
    </Provider>
  );
}

export default App;
