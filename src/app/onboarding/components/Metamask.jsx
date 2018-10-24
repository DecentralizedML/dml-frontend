import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
import { updateUser } from '../../account/duck/actions';

class Metamask extends Component {
  state = {
    hasInstalledMetamask: false,
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
            this.setState({ hasInstalledMetamask: true });
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
          onClick={() => window.location.reload()}
        >
          Refresh
        </Button>
      </div>
    );
  }

  renderAddWallet = () => {
    const { account } = this.props;

    return (
      <div className="onboarding__content">
        <Title>Is this your wallet address?</Title>
        <Description>DML will associate this wallet address with you account.</Description>
        <div className="onboarding__address-container">
          {account || ' - '}
        </div>
        <Button
          className="onboarding__metamask-proceed-btn"
          onClick={() => {
            const { account, history } = this.props;
            if (account) {
              this.props.updateUser(account, () => history.push('/account'));
            }
          }}
        >
          Proceed
        </Button>
      </div>
    );
  }

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
        <Grid fluid style={{ padding: 0 }}>
          <Row nogutter align="center">
            <Column sm={2} md={2} lg={2} xl={2}>
              { this.renderSidebar() }
            </Column>
            <Column
              sm={5}
              md={5}
              lg={5}
              xl={5}
              offset={{
                sm : 3,
                md : 3,
                lg : 3,
                xl : 3,
              }}
            >
              { this.renderContent() }
            </Column>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      account: state.web3connect.account,
      web3: state.web3connect.web3,
    }),
    dispatch => ({
      updateUser: (wallet_address, next) => {
        dispatch(updateUser({
          user: { wallet_address },
          next,
        }));
      }
    }),
  )(Metamask)
);
