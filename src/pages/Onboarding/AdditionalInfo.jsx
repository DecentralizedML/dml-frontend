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
  Header,
  GitHubOAuth,
} from 'kyokan-ui';
import logo from "../../assets/logo.svg";
import icon from "../../assets/icon_developers.svg";

class AdditionalInfo extends React.Component {

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
          subheaderText="CUSTOMERS"
          headerText="Use Algorithms to get Target Audience Insights"
          descriptionText="Select existing or request tailer-made algorithms based on practical needs"
          iconUrl={icon}
          iconClassName="onboarding__icon"
          currentStepIndex={1}
          totalSteps={3}
        />
        <div className="onboarding__content">
          <Title>Add Account Details</Title>
          <Description>Add your account details and connect to Github if you're a developer.</Description>
          <Panel className="onboarding__panel">
            <Header className="onboarding__panel-header">Personal Information</Header>
            <TextInput
              className="onboarding__input"
              onChange={e => console.log(e.target.value)}
              type="text"
              placeholder="First Name"
            />
            <TextInput
              className="onboarding__input"
              onChange={e => console.log(e.target.value)}
              type="text"
              placeholder="Last Name"
            />
            <Header className="onboarding__panel-dev-header">Are you a developer?</Header>
            <div className="onboarding__dev-description">Connect to GitHub to upload algorithms to the marketplace.</div>
            <GitHubOAuth className="onboarding__gh-oauth" />
            <Button>Continue</Button>
          </Panel>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
  })
)(AdditionalInfo);
