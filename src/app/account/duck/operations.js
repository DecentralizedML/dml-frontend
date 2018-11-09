import { call, put, takeLatest } from 'redux-saga/effects';

import actions from './actions';
import types from './types';

import {
  listUsers,
  updateUser,
  hydrateUserData,
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

function* hydrateUserDataSaga () {
  try {
    const { data } = yield call(hydrateUserData);
    yield put(actions.hydrateUserDataSuccess());
    yield put(actions.loadAccountData(data));
  } catch (error) {
    yield put(actions.hydrateUserDataError());
  }
}

function* updateUserSaga (action) {
  try {
    const { data } = yield call(updateUser, action.payload);
    yield put(actions.updateUserSuccess());
    yield put(actions.loadAccountData(data));
    yield action.payload.next && action.payload.next();
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
  hydrateUserDataSaga,
};
