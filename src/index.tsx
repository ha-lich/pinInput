import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppProvider from 'contexts/AppProvider';
import { store } from '@apps/store';
import i18n from '@locales/i18n';
import App from './App';

import 'antd/dist/antd.less';
import '@assets/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <AppProvider>
            <App />
          </AppProvider>
        </I18nextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
