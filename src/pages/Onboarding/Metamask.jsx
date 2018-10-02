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
import logo from "../../assets/logo.svg";
import icon from "../../assets/icon_developers.svg";
import unlockImage from "../../assets/illustration_unlock_metamask.png";

const INSTALL = 0;
const INSTALLED = 1;
const UNLOCK = 2;

class Metamask extends React.Component {

  /*
  shouldComponentUpdate (nextProps) {
    console.log(this.props);
    console.log(nextProps);
    return true;
  }
  */

  state = {
    step: INSTALL,
  };

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

  renderInstall() {
    return (
      <div className="onboarding__content">
        <Title>You're Almost Done!</Title>
        <Description>DML uses Metamask as your secure wallet.</Description>
        <Description>It is also used to sign blockchain transactions.</Description>
        <MetaMaskButton
          className="onboarding__metamask-install-btn"
          onClick={() => this.setState({ step: INSTALLED })}
        />
      </div>
    );
  }

  renderInstalled() {
    return (
      <div className="onboarding__content">
        <Title>You're Almost Done!</Title>
        <Description>DML uses Metamask as your secure wallet.</Description>
        <Description>It is also used to sign blockchain transactions.</Description>
        <div className="onboarding__installed-mm-text">Already installed MetaMask?</div>
        <Button
          className="onboarding__metamask-proceed-btn"
          onClick={() => this.setState({ step: UNLOCK })}
        >
          Proceed
        </Button>
      </div>
    );
  }

  renderUnlock() {
    return (
      <div className="onboarding__content">
        <Title>Unlock MetaMask to access DML</Title>
        <Description>Start by creating your MetaMask account by clicking on the extension.</Description>
        <Description>If you already did, simply type in your password.</Description>
        <img className="onboarding__unlock-image" src={unlockImage} />
      </div>
    );
  }

  renderContent() {
    switch (this.state.step) {
      case INSTALL:
        return this.renderInstall();
      case INSTALLED:
        return this.renderInstalled();
      case UNLOCK:
        return this.renderUnlock();
      default:
        return null;
    }
  }

  render () {
    return (
      <div className="onboarding">
        { this.renderSidebar() }
        { this.renderContent() }
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
  })
)(Metamask);
