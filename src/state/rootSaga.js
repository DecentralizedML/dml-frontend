import { all } from 'redux-saga/effects';

import accountOperations    from '../app/account/duck/operations';
import algorithmsOperations from '../app/algorithms/duck/operations';
import authOperations       from '../app/auth/duck/operations';
import bountiesOperations   from '../app/bounties/duck/operations';

export default function* rootSaga () {
  yield all([
    accountOperations.getMyUserSaga(),
    accountOperations.listUsersWatcherSaga(),
    accountOperations.updateUserWatcherSaga(),

    authOperations.loginWatcherSaga(),
    authOperations.signupWatcherSaga(),

    algorithmsOperations.createAlgorithmWatcherSaga(),
    algorithmsOperations.downloadAlgorithmWatcherSaga(),
    algorithmsOperations.listAlgorithmsWatcherSaga(),
    algorithmsOperations.listAlgorithmsMineWatcherSaga(),
    algorithmsOperations.showAlgorithmWatcherSaga(),
    algorithmsOperations.updateAlgorithmWatcherSaga(),

    bountiesOperations.createBountyWatcherSaga(),
    bountiesOperations.createBountyEnrollmentWatcherSaga(),
    bountiesOperations.listBountiesWatcherSaga(),
    bountiesOperations.listBountiesMineWatcherSaga(),
    bountiesOperations.listBountyEnrollmentsWatcherSaga(),
    bountiesOperations.openBountyWatcherSaga(),
    bountiesOperations.showBountyWatcherSaga(),
    bountiesOperations.updateBountyWatcherSaga(),
  ]);
}
