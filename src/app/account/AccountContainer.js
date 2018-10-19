import { connect } from 'react-redux';

import AccountComponent from './AccountComponent';
import { accountOperations } from './duck';

const mapStateToProps = (state) => {
  const { userData } = state.account;

  return {
    userData,
  }
};

const mapDispatchToProps = (dispatch) => {
  // 'fetchSubredditJson()' will trigger fetching of JSON data from
  // the Reddit API and pushes the relevant data into the Redux store.
  const fetchSubredditJson = (subreddit) => {
      dispatch(accountOperations.fetchSubredditJson(subreddit))
    };

  return { fetchSubredditJson };
};

const AccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountComponent);

export default AccountContainer;
