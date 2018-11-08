import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Description,
  MetaMaskButton,
  OnboardingSidebar,
  Title,
} from '@kyokan/kyokan-ui';

import '../../Onboarding.scss';
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 0 auto;
  align-items: center;
  padding-top: 5rem;
`;

class Metamask extends Component {
  constructor (props) {
    super(props);

    this.state = {
      hasInstalledMetamask: false,
    };
  }

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
  };

  renderInstall = () => {
    return (
      <Main className="onboarding__content">
        <Title>You&apos;re Almost Done!</Title>
        <Description>DML uses Metamask as your secure wallet.</Description>
        <Description>It is also used to sign blockchain transactions.</Description>
        <MetaMaskButton
          className="onboarding__metamask-install-btn"
          onClick={() => {
            this.setState({ hasInstalledMetamask: true });
          }}
        />
      </Main>
    );
  }

  renderInstalled = () => {
    return (
      <Main className="onboarding__content">
        <Title>You&apos;re Almost Done!</Title>
        <Description>DML uses Metamask as your secure wallet.</Description>
        <Description>It is also used to sign blockchain transactions.</Description>
        <div className="onboarding__installed-mm-text">Already installed MetaMask?</div>
        <Button
          className="onboarding__metamask-proceed-btn"
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </Button>
      </Main>
    );
  };

  renderAddWallet = () => {
    const { account, history } = this.props;

    return (
      <Main className="onboarding__content">
        <Title>Is this your wallet address?</Title>
        <Description>DML will associate this wallet address with you account.</Description>
        <div className="onboarding__address-container">
          {account || ' - '}
        </div>
        <Button
          className="onboarding__metamask-proceed-btn"
          onClick={() => {
            if (account) {
              this.props.updateUser(account, () => {
                history.push('/account');
              });
            }
          }}
        >
          Proceed
        </Button>
      </Main>
    );
  };

  renderContent () {
    const { web3 } = this.props;
    const { hasInstalledMetamask } = this.state;

    if (!web3 && !hasInstalledMetamask) {
      return this.renderInstall();
    }

    if (!web3 && hasInstalledMetamask) {
      return this.renderInstalled();
    }

    return this.renderAddWallet();
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

Metamask.propTypes = {
  account    : PropTypes.string.isRequired,
  history    : PropTypes.object.isRequired,
  updateUser : PropTypes.func.isRequired,
  web3       : PropTypes.object.isRequired,
};

export default Metamask;
