import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Actions, authSuccess, authFailure /*, requestOAuth */ } from './actions';
// import lazyLoadScript from 'lazyload-script';

function* requestOAuthSaga ({ payload }) {
  console.log(payload);
  try {
    // TODO move end-point to config.
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

function* requestGoogleOAuthSaga () {
  // TODO this is NOT as easy as I'd like. The callback on gapi.load means I can't just return the chained Promises.
  // TODO either wrap gapi.load into a promise, or use ux_mode=redirect and handle things in the response.
  /*
  try {
    const access = yield call(
      () => lazyLoadScript('https://apis.google.com/js/client:platform.js', 'Login-oauth-google')
        .then(() => {
          window.gapi.load('auth2', () => {
            const auth2 = window.gapi.auth2.getAuthInstance();
            (auth2 ? Promise.resolve(auth2) : window.gapi.auth2.init({
              // TODO move client_id to config.
              client_id: '434267187748-rmsin2o1nt2mi7rtqkm49b5fju0siqkt.apps.googleusercontent.com'
              // TODO change to use ux_mode=redirect for consistency with Facebook behaviour - or change Facebook behaviour.
            }))
            .then(auth2 => auth2.grantOfflineAccess())
        })
      .then(access => this.props.requestOAuth('google', access.code))
      .catch(reason => {
        // TODO error handling in miscReducer.
        console.error(reason);
        debugger;
      })
    });
  } catch (e) {
    yield put(authFailure(e));
  }
  */
}

export default function* sagas () {
  yield all([
    yield takeLatest(Actions.REQUEST_OAUTH, requestOAuthSaga),
    yield takeLatest(Actions.REQUEST_GOOGLE_OAUTH, requestGoogleOAuthSaga)
  ]);
}
