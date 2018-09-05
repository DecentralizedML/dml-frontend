import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';
import { RouteMap } from './routes';
import { reducers } from './state';
import sagas from './sagas';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

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
render(
  <Provider store={store}>
    <BrowserRouter>
      <RouteMap />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
