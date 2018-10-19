import { call, put, takeLatest } from 'redux-saga/effects';

import actions from './actions';
import types from './types';

import { authenticate } from './api';

function* loginSaga (action) {
  try {
    const { data } = yield call(authenticate, action.payload);
    yield put(actions.loadUserData(data.profile));
  } catch (error) {
    yield put(actions.loadUserDataError(error));
  }
}

function* loginWatcherSaga () {
  yield takeLatest(types.REQUEST_LOGIN, loginSaga);
}

export default {
  loginWatcherSaga,
};