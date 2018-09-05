import { all, takeLatest, /* call, */ put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Actions, loading, LoginAction } from './actions';

function* loginSaga (action: LoginAction) {
  const loading_on = loading(true);
  console.log(loading_on);
  yield put(loading_on);
  // TODO send login API request. The response does put(loading(false)).
  // TODO setup a race with a timeout.
  yield call(delay, 2000);
  console.log(action);
  const loading_off = loading(false);
  console.log(loading_off);
  yield put(loading_off);
}

export default function* sagas () {
  yield all([
    yield takeLatest(Actions.LOGIN, loginSaga)
  ]);
}
