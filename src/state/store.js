import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger();

let store; // eslint-disable-line import/no-mutable-exports

// Don't include development middleware in production
if (process.env.NODE_ENV === 'production') {
  store = createStore(rootReducer, compose(
    applyMiddleware(sagaMiddleware, thunk),
  ));
} else { // development
  store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware, thunk, logger),
  ));
}

sagaMiddleware.run(rootSaga);

export default store;
