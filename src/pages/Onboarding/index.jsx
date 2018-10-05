import * as React from 'react';
import { connect } from "react-redux";
import './Onboarding.css';
import Signup from './Signup';
import AdditionalInfo from "./AdditionalInfo";
import Metamask from "./Metamask";

const SIGNUP = 0;
const ADDITIONAL_INFO = 1;
const METAMASK = 2;

class Onboarding extends React.Component {

  /*
  shouldComponentUpdate (nextProps) {
    console.log(this.props);
    console.log(nextProps);
    return true;
  }
  */

  state = {
    step: SIGNUP,
  };

  render () {
    switch (this.state.step) {
      case SIGNUP:
        return <Signup onComplete={() => this.setState({ step: ADDITIONAL_INFO })}/>;
      case ADDITIONAL_INFO:
        return <AdditionalInfo onComplete={() => this.setState({ step: METAMASK })}/>;
      case METAMASK:
        return <Metamask />;
      default:
        return <noscript />;
    }
  }
}

export default connect(
  state => state,
  dispatch => ({
  })
)(Onboarding);
