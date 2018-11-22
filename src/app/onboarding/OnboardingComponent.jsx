import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AdditionalInfo from './components/AdditionalInfo';
import Metamask from './components/Metamask';
import Signup from './components/Signup';

const SIGNUP          = 0;
const ADDITIONAL_INFO = 1;
const METAMASK        = 2;

class Onboarding extends Component {
  render () {
    const {
      firstName,
      lastName,
      // walletAddress,
      initialized,
      email,
      history: { push },
      location,
    } = this.props;

    if (!initialized) {
      return <noscript />;
    }

    if (!email) {
      return (
        <Signup
          onComplete={() => push('/details')}
          isLogin={this.props.match.path === '/login'}
        />
      );
    }

    if (!firstName || !lastName) {
      return (
        <AdditionalInfo
          // onComplete={() => push('/metamask')}
          onComplete={() => push('/marketplace')}
        />
      );
    }

    // if (!walletAddress) {
    //   return <Metamask />;
    // }

    return (
      <Redirect
        to={{
          pathname : '/marketplace',
          state    : {
            from: location,
          },
        }}
      />
    );
  }
}

Onboarding.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  walletAddress: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(
  ({ account }) => ({
    firstName: account.firstName,
    lastName: account.lastName,
    walletAddress: account.walletAddress,
    email: account.email,
    initialized: account.initialized,
  }),
)(Onboarding);
