import { all, takeLatest, /* call, */ put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Actions, setLoading, RequestLoginAction } from './actions';

function* loginSaga (action: RequestLoginAction) {
  const loading_on = setLoading(true);
  console.log(loading_on);
  yield put(loading_on);
  console.log(action);
  // TODO send login API request. The response does put(loading(false)).
  // TODO setup a race with a timeout.
  yield call(delay, 2000);
  const loading_off = setLoading(false);
  console.log(loading_off);
  yield put(loading_off);
}

export default function* sagas () {
  yield all([
    yield takeLatest(Actions.REQUEST_LOGIN, loginSaga)
  ]);
}
