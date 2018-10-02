import * as React from 'react';
import { connect } from "react-redux";
import './Onboarding.css';
import Signup from './Signup';
// import AdditionalInfo from './AdditionalInfo';
// import Metamask from './Metamask';

class Onboarding extends React.Component {

  /*
  shouldComponentUpdate (nextProps) {
    console.log(this.props);
    console.log(nextProps);
    return true;
  }
  */

  render () {
    return <Signup />
  }
}

export default connect(
  state => state,
  dispatch => ({
  })
)(Onboarding);
