import { call, put, takeLatest } from 'redux-saga/effects';

import actions from './actions';
import types from './types';

import {
  listUsers,
  updateUser,
  getMyUser,
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

function* getMyUserSaga () {
  try {
    const { data } = yield call(getMyUser);
    yield put(actions.loadAccountData(data));
  } catch (error) {
    console.error('Error fetching user');
  }

}

function* updateUserSaga (action) {
  try {
    yield call(updateUser, action.payload);
    yield put(actions.updateUserSuccess());
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
  getMyUserSaga,
};
