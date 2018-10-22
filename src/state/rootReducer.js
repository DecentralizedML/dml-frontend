import { combineReducers } from 'redux';

import accountReducer     from '../app/account/duck';
import algorithmsReducer  from '../app/algorithms/duck';
import authReducer        from '../app/auth/duck';
import bountiesReducer    from '../app/bounties/duck';
import marketplaceReducer from '../app/marketplace/duck';
import onboardingReducer  from '../app/onboarding/duck';

const reducers = combineReducers({
  account     : accountReducer,     // account settings, user info
  algorithms  : algorithmsReducer,  // algorithms
  auth        : authReducer,        // login, logout, signup
  bounties    : bountiesReducer,    // bounties
  marketplace : marketplaceReducer, // marketplace
  onboarding  : onboardingReducer,  // onboarding
});

export default reducers;
