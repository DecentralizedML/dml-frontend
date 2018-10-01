import * as React from 'react';
import { connect } from "react-redux";
import './Onboarding.css';
import { OnboardingSidebar } from 'kyokan-ui';
import logo from "../../assets/logo.svg";
import icon from "../../assets/icon_developers.svg";

class Onboarding extends React.Component {

  /*
  shouldComponentUpdate (nextProps) {
    console.log(this.props);
    console.log(nextProps);
    return true;
  }
  */

  render () {
    return (
      <div className="onboarding">
        <OnboardingSidebar
            className="onboarding__sidebar"
            logoUrl={logo}
            logoClassName="onboarding__logo"
            subheaderText="DEVELOPERS"
            headerText="Create Machine Learning Algorithmn"
            descriptionText="Upload your algorithms to the marketplace and get paid each time they run on a device."
            iconUrl={icon}
            iconClassName="onboarding__icon"
            currentStepIndex={0}
            totalSteps={5}
        />
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
  })
)(Onboarding);
