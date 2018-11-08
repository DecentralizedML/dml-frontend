import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AdditionalInfo from './components/AdditionalInfo';
import Metamask from './components/Metamask';
import Signup from './components/Signup';

import './Onboarding.scss';

const SIGNUP          = 0;
const ADDITIONAL_INFO = 1;
const METAMASK        = 2;

class Onboarding extends Component {
  render () {
    const { firstName, lastName, walletAddress, initialized, email } = this.props;

    if (!initialized) {
      return <noscript />;
    }

    if (!email) {
      return (
        <Signup
          onComplete={() => {
            this.setState({
              step: ADDITIONAL_INFO,
            });
          }}
          isLogin={this.props.match.path === '/login'}
        />
      );
    }

    if (!firstName || !lastName) {
      return (
        <AdditionalInfo
          onComplete={() => {
            this.setState({
              step: METAMASK,
            });
          }}
        />
      );
    }

    if (!walletAddress) {
      return <Metamask />;
    }

    return <noscript />;
  }
}

Onboarding.propTypes = {
  match: PropTypes.object.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  walletAddress: PropTypes.string,
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
