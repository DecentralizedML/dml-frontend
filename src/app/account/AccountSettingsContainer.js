import { connect } from 'react-redux';

import AccountSettingsComponent from './AccountSettingsComponent';
import { accountOperations } from './duck';

const mapStateToProps = (state) => {
  const { email, firstName, id, lastName, walletAddress } = state.account;

  return {
    email,
    firstName,
    id,
    lastName,
    walletAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  // 'fetchSubredditJson()' will trigger fetching of JSON data from
  // the Reddit API and pushes the relevant data into the Redux store.
  const fetchSubredditJson = (subreddit) => {
    dispatch(accountOperations.fetchSubredditJson(subreddit));
  };

  return { fetchSubredditJson };
};

const AccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountSettingsComponent);

export default AccountContainer;
