import { call, put, takeLatest } from 'redux-saga/effects';

import actions from './actions';
import types from './types';

import {
  listUsers,
  updateUser,
} from './api';

function* listUsersSaga (action) {
  try {
    const { data } = yield call(listUsers, action.payload);
    yield call(console.log, data);
  } catch (error) {
    yield put(actions.listUsersError(error));
  }
}

function* listUsersWatcherSaga () {
  yield takeLatest(types.LIST_USERS, listUsersSaga);
}

function* updateUserSaga (action) {
  try {
    yield call(updateUser, action.payload);
    yield put(actions.updateUserSuccess());
  } catch (error) {
    yield put(actions.updateUserError(error));
  }
}

function* updateUserWatcherSaga () {
  yield takeLatest(types.UPDATE_USER, updateUserSaga);
}

export default {
  listUsersWatcherSaga,
  updateUserWatcherSaga,
};
