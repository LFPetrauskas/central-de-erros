import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import store from '../src/store';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <ToastContainer />
        <GlobalStyle />
        <Routes />
      </Fragment>
    </Provider>
  );
}

export default App;
