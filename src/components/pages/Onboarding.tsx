import * as React from 'react';
import { connect } from "react-redux";
import { State } from '../../state';
import './Onboarding.css';

interface OnboardingProps extends State {
}

class Onboarding extends React.Component<OnboardingProps, {}> {

  /*
  public shouldComponentUpdate (nextProps: OnboardingProps): boolean {
    console.log(this.props);
    console.log(nextProps);
    return true;
  }
  */

  public render () {
    return (
      <div>
        <h1>Bounties</h1>
        <pre>{ JSON.stringify(this.props) }</pre>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
  })
)(Onboarding);
