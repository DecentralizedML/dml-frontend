import { call, put, takeLatest } from 'redux-saga/effects';

import actions from './actions';
import types from './types';

import accountActions from '../../account/duck/actions';

import {
  facebookOAuth,
  googleOAuth,
  login,
  logout,
  signup,
} from './api';

import storage from '../../../utils/storage';

function* facebookOAuthSaga (action) {
  try {
    const { data } = yield call(facebookOAuth, action.payload);
    yield call(console.log, data);
  } catch (error) {
    yield put(actions.facebookOAuthError(error));
  }
}

function* facebookOAuthWatcherSaga () {
  yield takeLatest(types.FACEBOOK_OAUTH, facebookOAuthSaga);
}

function* googleOAuthSaga (action) {
  try {
    const { data } = yield call(googleOAuth, action.payload);
    yield call(console.log, data);
  } catch (error) {
    yield put(actions.googleOAuthError(error));
  }
}

function* googleOAuthWatcherSaga () {
  yield takeLatest(types.GOOGLE_OAUTH, googleOAuthSaga);
}

function* loginSaga (action) {
  try {
    const { data } = yield call(login, action.payload);
    yield call((jwt) => { storage.token = jwt; }, data.jwt);
    yield put(actions.loginSuccess());
    yield put(accountActions.loadAccountData(data));
    yield action.payload.history.push('/marketplace');
  } catch (error) {
    yield put(actions.loginError(error));
  }
}

function* loginWatcherSaga () {
  yield takeLatest(types.LOGIN, loginSaga);
}

function* logoutSaga (action) {
  try {
    yield call(logout, action.payload);
    yield call((jwt) => { storage.token = jwt; }, null);
    yield put(actions.logoutSuccess());
  } catch (error) {
    yield put(actions.logoutError(error));
  }
}

function* logoutWatcherSaga () {
  yield takeLatest(types.LOGOUT, logoutSaga);
}

function* signupSaga (action) {
  try {
    const { data } = yield call(signup, action.payload);
    yield call((jwt) => { storage.token = jwt; }, data.jwt);
    yield put(actions.signupSuccess());
    yield action.payload.next && action.payload.next();
  } catch (error) {
    yield put(actions.signupError(error));
  }
}

function* signupWatcherSaga () {
  yield takeLatest(types.SIGNUP, signupSaga);
}

export default {
  facebookOAuthWatcherSaga,
  googleOAuthWatcherSaga,
  loginWatcherSaga,
  logoutWatcherSaga,
  signupWatcherSaga,
};
