import * as React from 'react';
import { connect } from "react-redux";
import './Onboarding.css';
import {
  OnboardingSidebar,
  Title,
  Description,
  Panel,
  TextInput,
  Button,
  MetaMaskButton,
} from 'kyokan-ui';
import logo from "../../../assets/logo.svg";
import icon from "../../../assets/icon_developers.svg";

class Metamask extends React.Component {

  /*
  shouldComponentUpdate (nextProps) {
    console.log(this.props);
    console.log(nextProps);
    return true;
  }
  */

  renderSidebar() {
    return (
      <OnboardingSidebar
        className="onboarding__sidebar"
        logoUrl={logo}
        logoClassName="onboarding__logo"
        subheaderText="DEVELOPERS"
        headerText="Create Machine Learning Algorithmn"
        descriptionText="Upload your algorithms to the marketplace and get paid each time they run on a device."
        iconUrl={icon}
        iconClassName="onboarding__icon"
        currentStepIndex={2}
        totalSteps={3}
      />
    );
  }

  renderContent() {
    return (
      <div className="onboarding__content">
        <Title>Create Your Account</Title>
        <Description>Your email address is used for account related updates.</Description>
        <Panel className="onboarding__panel">
          <TextInput
            className="onboarding__input"
            onChange={e => console.log(e.target.value)}
            type="email"
            placeholder="Email Address"
          />
          <TextInput
            className="onboarding__input"
            onChange={e => console.log(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <Button>Continue</Button>
        </Panel>
      </div>
    )
  }

  renderInstallMetamask() {
    return (
      <div className="onboarding__content">
        <Title>You're Almost Done!</Title>
        <Description>DML uses Metamask as your secure wallet.</Description>
        <Description>It is also used to sign blockchain transactions.</Description>
        <MetaMaskButton className="onboarding__metamask-install-btn"/>
      </div>
    );
  }

  render () {
    return (
      <div className="onboarding">
        { this.renderSidebar() }
        { this.renderInstallMetamask() }
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
  })
)(Metamask);
