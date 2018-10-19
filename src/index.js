import 'react-app-polyfill/ie9';  // For IE 9-11 support

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { reducers } from './state';
import sagas from './sagas';
import registerServiceWorker from './registerServiceWorker';
import { App } from './App';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// add a logger
const logger = createLogger();

// mount it on the store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger)
);

// then run the saga
sagaMiddleware.run(sagas);

// render the application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// finally, start the service workers
registerServiceWorker();
