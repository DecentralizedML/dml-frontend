import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../../account/duck/actions';

import {
  Box,
  Button,
  Column,
  Description,
  GitHubOAuth,
  Grid,
  Header,
  OnboardingSidebar,
  Row,
  Text,
  TextInput,
  Title,
} from '@kyokan/kyokan-ui';

import '../Onboarding.css';

class AdditionalInfo extends Component {
  static defaultProps = {
    onComplete: () => {},
  };

  static propTypes = {
    onComplete: PropTypes.func,
  };

  render() {
    // console.log(this.props.history.push('/metamask'))
    return (
      <div className="onboarding">
        <Grid fluid style={{ padding: 0 }}>
          <Row nogutter align="center">
            <Column sm={2} md={2} lg={2} xl={2}>
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
              <Title>Add Account Details</Title>
              <Description>Add your account details and connect to Github if you&apos;re a developer.</Description>
              <Box>
                <Box verticalMargin={5}>
                  <Header>Personal Information</Header>
                </Box>
                <Box margin={1}>
                  <TextInput
                    type="text"
                    placeholder="First Name"
                    data-id="details-input-first-name"
                  />
                </Box>
                <Box margin={1}>
                  <TextInput
                    type="text"
                    placeholder="Last Name"
                    data-id="details-input-last-name"
                  />
                </Box>
                <Box verticalMargin={5}>
                  <Header>Are you a developer?</Header>
                </Box>
                <Text>Connect to GitHub to upload algorithms to the marketplace.</Text>
                <Box verticalMargin={4}>
                  <GitHubOAuth />
                </Box>
                <Button
                  onClick={() => {
                    const firstName = document.querySelector("[data-id='details-input-first-name']").value;
                    const lastName = document.querySelector("[data-id='details-input-last-name']").value;
                    this.props.updateUser(firstName, lastName, this.props.onComplete);
                  }}
                >
                  Continue
                </Button>
              </Box>
            </Column>
          </Row>
        </Grid>
      </div>
    );
  }
};

export default withRouter(
  connect(
    (state) => {
      return state;
    },
    dispatch => ({
      updateUser: (first_name, last_name, next) => {
        dispatch(updateUser({
          user: { first_name, last_name },
          next,
        }));
      }
    }),
  )(AdditionalInfo)
);
