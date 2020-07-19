import React from 'react';
import { render } from 'react-dom';
import '@availity/yup';
import App from './App';
import { StoreProvider } from './stores';
import './index.scss';
import 'react-block-ui/style.css';

render(
  <StoreProvider>
    <App/>
  </StoreProvider>,
  document.querySelector('#root')
);
