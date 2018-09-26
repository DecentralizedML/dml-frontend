import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Actions, authSuccess, authFailure } from './actions';

function* requestOAuth ({ payload }) {
  console.log(payload);
  try {
    const response = yield call(fetch, `https://elegant-brisk-indianjackal.gigalixirapp.com/auth/${payload.provider}/callback?code=${payload.code}`);
    console.log(response);
    // TODO throw on bad response.status
    const data = yield call(response.json.bind(response));
    console.log(data);
    yield put(authSuccess(data));
  } catch (e) {
    yield put(authFailure(e));
  }
}

export default function* sagas () {
  yield all([
    yield takeLatest(Actions.REQUEST_OAUTH, requestOAuth)
  ]);
}
