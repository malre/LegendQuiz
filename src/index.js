import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import {BrowserRouter} from 'react-router-dom';

import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createGlobalStyle  } from 'styled-components';
import mainFont from './AnimImg/Fonts/SeaFire.ttf';
import mainFontEot from './AnimImg/Fonts/SeaFire.otf';
import history from "./utils/history";
//import {I18nextProvider} from 'react-i18next';
import reducer from './AnimImg/rdx/store/reducer';
const store = createStore(reducer);

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

//import { Reducer } from './AnimImg/rdx/store/reducer';
/* eslint no-unused-expressions: 0 */
//let store = createStore(Reducer)
const GlobalStyle = createGlobalStyle `
  @font-face {
    font-family: 'SeaFire';
    src: url(${mainFont}) format('truetype');
    src: url(${mainFontEot}) format('embedded-opentype'),
    src: url('./AnimImg/Fonts/SeaFire.woff') format('woff'),
    
    src: url('./AnimImg/Fonts/SeaFire.svg') format('svg'); 
    font-weight: normal;
    font-style: normal;
  }`

ReactDOM.render(<BrowserRouter>
  <Provider store={store}>
  <App appTitle="Development" /></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
