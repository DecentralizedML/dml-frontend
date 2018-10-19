import { all } from 'redux-saga/effects';

import loginOperations from '../app/login/duck/operations';

export default function* rootSaga () {
  yield all([
    loginOperations.loginWatcherSaga(),
  ]);
}
