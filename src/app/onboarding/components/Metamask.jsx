import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Button,
  Column,
  Description,
  Grid,
  MetaMaskButton,
  OnboardingSidebar,
  Row,
  Title,
} from '@kyokan/kyokan-ui';

import '../Onboarding.css';

const INSTALL = 0;
const INSTALLED = 1;
const UNLOCK = 2;

class Metamask extends Component {
  state = {
    step: INSTALL,
  };

  renderSidebar = () => {
    return (
      <OnboardingSidebar
        className="onboarding__sidebar"
        logoUrl="/logo.svg"
        logoClassName="onboarding__logo"
        subheaderText="DEVELOPERS"
        headerText="Create Machine Learning Algorithm"
        descriptionText="Upload your algorithms to the marketplace and get paid each time they run on a device."
        iconUrl="/icon_developers.svg"
        iconClassName="onboarding__icon"
        currentStepIndex={2}
        totalSteps={3}
      />
    );
  }

  renderInstall = () => {
    return (
      <div className="onboarding__content">
        <Title>You&apos;re Almost Done!</Title>
        <Description>DML uses Metamask as your secure wallet.</Description>
        <Description>It is also used to sign blockchain transactions.</Description>
        <MetaMaskButton
          className="onboarding__metamask-install-btn"
          onClick={() => {
            this.setState({ step: INSTALLED });
          }}
        />
      </div>
    );
  }

  renderInstalled = () => {
    return (
      <div className="onboarding__content">
        <Title>You&apos;re Almost Done!</Title>
        <Description>DML uses Metamask as your secure wallet.</Description>
        <Description>It is also used to sign blockchain transactions.</Description>
        <div className="onboarding__installed-mm-text">Already installed MetaMask?</div>
        <Button
          className="onboarding__metamask-proceed-btn"
          onClick={() => {
            this.setState({ step: UNLOCK });
          }}
        >
          Proceed
        </Button>
      </div>
    );
  }

  renderUnlock = () => {
    return (
      <div className="onboarding__content">
        <Title>Unlock MetaMask to access DML</Title>
        <Description>Start by creating your MetaMask account by clicking on the extension.</Description>
        <Description>If you already did, simply type in your password.</Description>
        {<img
          className="onboarding__unlock-image"
          src="/illustration_unlock_metamask.png"
          alt="unlock"
        />}
      </div>
    );
  }

  renderContent () {
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
        <Grid>
          <Row middle="xs">
            <Column sm={2} md={2} lg={2} xl={2}>
              { this.renderSidebar() }
            </Column>
            <Column
              sm={5}
              md={5}
              lg={5}
              xl={5}
              smOffset={3}
              mdOffset={3}
              lgOffset={3}
              xlOffset={3}
            >
              { this.renderContent() }
            </Column>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  },
  (dispatch) => {
    return {};
  },
)(Metamask);
