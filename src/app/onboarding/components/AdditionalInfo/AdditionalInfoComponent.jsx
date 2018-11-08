import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {
  Button,
  Description,
  Header,
  OnboardingSidebar,
  Title,
} from '@kyokan/kyokan-ui';

import Input from '../../../../components/Input';
import GitHubButton from '../../../../components/GitHubButton';
import '../../Onboarding.scss';

const Main = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 0 auto;
  align-items: center;
  padding-top: 5rem;
`;

class AdditionalInfo extends Component {
  state = {
    firstName: '',
    lastName: '',
  };

  render() {
    return (
      <div className="onboarding">
        <OnboardingSidebar
          className="onboarding__sidebar"
          logoUrl="/logo.svg"
          logoClassName="onboarding__logo"
          subheaderText="CUSTOMERS"
          headerText="Use Algorithms to get Target Audience Insights"
          descriptionText="Select existing or request tailer-made algorithms based on practical needs."
          iconUrl="/icon_developers.svg"
          iconClassName="onboarding__icon"
          currentStepIndex={1}
          totalSteps={3}
        />
        <Main>
          <Title>Add Account Details</Title>
          <Description>Add your account details and connect to Github if you&apos;re a developer.</Description>
          <div className="onboarding__form onboarding__panel">
            <div className="onboarding__card-header">
              <Header>Personal Information</Header>
            </div>
            <div className="onboarding__form__inputs">
              <Input
                className="onboarding__form__input"
                type="text"
                placeholder="First Name"
                onChange={e => this.setState({ firstName: e.target.value })}
              />
              <Input
                className="onboarding__form__input"
                type="text"
                placeholder="Last Name"
                onChange={e => this.setState({ lastName: e.target.value })}
              />
              <div className="onboarding__gh-container">
                <Header>Are you a developer?</Header>
                <div className="onboarding__gh-container__description">
                  Connect to GitHub to upload algorithms to the marketplace.
                </div>
                <GitHubButton className="onboarding__gh-container__gh-btn" />
              </div>
              <div className="onboarding__footer">
                <Button
                  className="onboarding__cta-btn"
                  onClick={() => {
                    const { firstName, lastName } = this.state;
                    const { updateUser, onComplete } = this.props;

                    updateUser(firstName, lastName, onComplete);
                  }}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </Main>
      </div>
    );
  }
};

AdditionalInfo.defaultProps = {
  onComplete : () => {},
  updateUser : () => {},
};

AdditionalInfo.propTypes = {
  onComplete : PropTypes.func,
  updateUser : PropTypes.func,
};

export default AdditionalInfo;
