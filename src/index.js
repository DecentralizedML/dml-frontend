import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducers } from './state';
import sagas from './sagas';
import registerServiceWorker from './registerServiceWorker';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
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
