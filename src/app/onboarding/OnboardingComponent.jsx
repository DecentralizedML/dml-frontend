import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AdditionalInfo from './components/AdditionalInfo';
import Metamask from './components/Metamask';
import Signup from './components/Signup';

import './Onboarding.css';

const SIGNUP          = 0;
const ADDITIONAL_INFO = 1;
const METAMASK        = 2;

class Onboarding extends Component {
  constructor (props) {
    super(props);

    let step;
    const stepName = props.match.path;

    switch (stepName) {
      case '/details':
        step = ADDITIONAL_INFO;
        break;
      case '/metamask':
        step = METAMASK;
        break;
      case '/signup':
        step = SIGNUP;
        break;
      case '/login':
        step = SIGNUP;
        break;
      default:
    }

    this.state = {
      step: step,
    };
  }

  render () {
    switch (this.state.step) {
      case SIGNUP:
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
      case ADDITIONAL_INFO:
        return (
          <AdditionalInfo
            onComplete={() => {
              this.setState({
                step: METAMASK,
              });
            }}
          />
        );
      case METAMASK:
        return <Metamask />;
      default:
        return <noscript />;
    }
  }
}

Onboarding.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Onboarding;
