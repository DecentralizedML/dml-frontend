import { call, put, takeLatest } from 'redux-saga/effects';

import actions from './actions';
import types from './types';

import {
  createAlgorithm,
  downloadAlgorithm,
  listAlgorithms,
  listUserAlgorithms,
  showAlgorithm,
  updateAlgorithm,
} from './api';

function* createAlgorithmSaga (action) {
  try {
    yield call(createAlgorithm, action.payload);
    yield put(actions.createAlgorithmSuccess());
  } catch (error) {
    yield put(actions.createAlgorithmError(error));
  }
}

function* createAlgorithmWatcherSaga () {
  yield takeLatest(types.CREATE_ALGORITHM, createAlgorithmSaga);
}

function* downloadAlgorithmSaga (action) {
  try {
    const { data } = yield call(downloadAlgorithm, action.payload);
    yield call(console.log, data);
  } catch (error) {
    yield put(actions.downloadAlgorithmError(error));
  }
}

function* downloadAlgorithmWatcherSaga () {
  yield takeLatest(types.DOWNLOAD_ALGORITHM, downloadAlgorithmSaga);
}

function* listAlgorithmsSaga (action) {
  try {
    const { data } = yield call(listAlgorithms, action.payload);
    yield call(console.log, data);
  } catch (error) {
    yield put(actions.listAlgorithmsError(error));
  }
}

function* listAlgorithmsWatcherSaga () {
  yield takeLatest(types.LIST_ALGORITHMS, listAlgorithmsSaga);
}

function* listUserAlgorithmsSaga (action) {
  try {
    const { data } = yield call(listUserAlgorithms, action.payload);
    yield call(console.log, data);
  } catch (error) {
    yield put(actions.listUserAlgorithmsError(error));
  }
}

function* listUserAlgorithmsWatcherSaga () {
  yield takeLatest(types.LIST_USER_ALGORITHMS, listUserAlgorithmsSaga);
}

function* showAlgorithmSaga (action) {
  try {
    const { data } = yield call(showAlgorithm, action.payload);
    yield call(console.log, data);
  } catch (error) {
    yield put(actions.showAlgorithmError(error));
  }
}

function* showAlgorithmWatcherSaga () {
  yield takeLatest(types.SHOW_ALGORITHM, showAlgorithmSaga);
}

function* updateAlgorithmSaga (action) {
  try {
    yield call(updateAlgorithm, action.payload);
    yield put(actions.updateAlgorithmSuccess());
  } catch (error) {
    yield put(actions.updateAlgorithmError(error));
  }
}

function* updateAlgorithmWatcherSaga () {
  yield takeLatest(types.UPDATE_ALGORITHM, updateAlgorithmSaga);
}

export default {
  createAlgorithmWatcherSaga,
  downloadAlgorithmWatcherSaga,
  listAlgorithmsWatcherSaga,
  listUserAlgorithmsWatcherSaga,
  showAlgorithmWatcherSaga,
  updateAlgorithmWatcherSaga,
};
