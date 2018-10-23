import { connect } from 'react-redux';

import OnboardingComponent from './OnboardingComponent';
import { onboardingOperations } from './duck';

const mapStateToProps = (state) => {
  const { userData } = state.account;

  return {
    userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  // 'fetchSubredditJson()' will trigger fetching of JSON data from
  // the Reddit API and pushes the relevant data into the Redux store.
  const fetchSubredditJson = (subreddit) => {
    dispatch(onboardingOperations.fetchSubredditJson(subreddit));
  };

  return { fetchSubredditJson };
};

const OnboardingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OnboardingComponent);

export default OnboardingContainer;
