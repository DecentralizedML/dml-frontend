import { call, put, takeLatest } from 'redux-saga/effects';

import actions from './actions';
import types from './types';

import {
  createBounty,
  createBountyEnrollment,
  listBounties,
  listBountiesMine,
  listBountyEnrollments,
  openBounty,
  showBounty,
  updateBounty,
} from './api';

function* createBountySaga (action) {
  try {
    yield call(createBounty, action.payload);
    yield put(actions.createBountySuccess());
  } catch (error) {
    yield put(actions.createBountyError(error));
  }
}

function* createBountyWatcherSaga () {
  yield takeLatest(types.CREATE_BOUNTY, createBountySaga);
}

function* createBountyEnrollmentSaga (action) {
  try {
    yield call(createBountyEnrollment, action.payload);
    yield put(actions.createBountyEnrollmentSuccess());
  } catch (error) {
    yield put(actions.createBountyEnrollmentError(error));
  }
}

function* createBountyEnrollmentWatcherSaga () {
  yield takeLatest(types.CREATE_BOUNTY_ENROLLMENT, createBountyEnrollmentSaga);
}

function* listBountiesSaga (action) {
  try {
    const { data } = yield call(listBounties, action.payload);
    yield call(console.log, data);
  } catch (error) {
    yield put(actions.listBountiesError(error));
  }
}

function* listBountiesWatcherSaga () {
  yield takeLatest(types.LIST_BOUNTIES, listBountiesSaga);
}

function* listBountiesMineSaga (action) {
  try {
    const { data } = yield call(listBountiesMine, action.payload);
    yield call(console.log, data);
  } catch (error) {
    yield put(actions.listBountiesMineError(error));
  }
}

function* listBountiesMineWatcherSaga () {
  yield takeLatest(types.LIST_BOUNTIES_MINE, listBountiesMineSaga);
}

function* listBountyEnrollmentsSaga (action) {
  try {
    const { data } = yield call(listBountyEnrollments, action.payload);
    yield call(console.log, data);
  } catch (error) {
    yield put(actions.listBountyEnrollmentsError(error));
  }
}

function* listBountyEnrollmentsWatcherSaga () {
  yield takeLatest(types.LIST_BOUNTY_ENROLLMENTS, listBountyEnrollmentsSaga);
}

function* openBountySaga (action) {
  try {
    const { data } = yield call(openBounty, action.payload);
    yield call(console.log, data);
  } catch (error) {
    yield put(actions.openBountyError(error));
  }
}

function* openBountyWatcherSaga () {
  yield takeLatest(types.OPEN_BOUNTY, openBountySaga);
}

function* showBountySaga (action) {
  try {
    const { data } = yield call(showBounty, action.payload);
    yield call(console.log, data);
  } catch (error) {
    yield put(actions.showBountyError(error));
  }
}

function* showBountyWatcherSaga () {
  yield takeLatest(types.SHOW_BOUNTY, showBountySaga);
}

function* updateBountySaga (action) {
  try {
    yield call(updateBounty, action.payload);
    yield put(actions.updateBountySuccess());
  } catch (error) {
    yield put(actions.updateBountyError(error));
  }
}

function* updateBountyWatcherSaga () {
  yield takeLatest(types.UPDATE_BOUNTY, updateBountySaga);
}

export default {
  createBountyWatcherSaga,
  createBountyEnrollmentWatcherSaga,
  listBountiesWatcherSaga,
  listBountiesMineWatcherSaga,
  listBountyEnrollmentsWatcherSaga,
  openBountyWatcherSaga,
  showBountyWatcherSaga,
  updateBountyWatcherSaga,
};
