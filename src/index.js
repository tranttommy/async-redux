import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.js';
import Store from './Store.js';

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
