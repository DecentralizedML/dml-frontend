/* eslint-disable react/jsx-filename-extension */

import 'react-app-polyfill/ie9';  // For IE 9-11 support

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.scss';

// import * as serviceWorker from './serviceWorker';

window.addEventListener('load', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
