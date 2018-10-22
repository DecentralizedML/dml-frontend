import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import lazyLoadScript from 'lazyload-script';
import styled from 'styled-components';

import {
  Box,
  Button,
  Column,
  Description,
  Grid,
  OnboardingSidebar,
  Row,
  Tabs,
  TextInput,
  Title,
  VerticalTab,
} from '@kyokan/kyokan-ui';

import '../Onboarding.css';

import { requestOAuth, requestGoogleOAuth, requestFacebookOAuth } from '../../../actions';

import authActions from '../../auth/duck/actions';

class Signup extends Component {
  requestGoogleOAuth = () => {
    // TODO Saga most of this.
    lazyLoadScript('https://apis.google.com/js/client:platform.js', 'Login-oauth-google')
      .then(() => {
        window.gapi.load('auth2', () => {
          const auth2 = window.gapi.auth2.getAuthInstance();
          (auth2 ? Promise.resolve(auth2) : window.gapi.auth2.init({
            client_id: '434267187748-rmsin2o1nt2mi7rtqkm49b5fju0siqkt.apps.googleusercontent.com',
            // TODO change to use ux_mode=redirect for consistency with Facebook behaviour.
          }))
            .then((auth) => {
              auth.grantOfflineAccess();
            })
            .then((access) => {
              this.props.requestOAuth('google', access.code);
              this.props.login()();
            })
            .catch((reason) => {
              // TODO error handling in miscReducer.
              console.error(reason);
              debugger;
            });
        });
      })
      .catch((reason) => {
        // TODO error handling in miscReducer.
        console.error(reason);
        debugger;
      });
  };

  requestFacebookOAuth = () => {
    // TODO Saga most of this.
    const clientId = '1100670340090827';
    const location = window.location;
    const redirectUri = `${location.origin}/auth/facebook/callback`;
    const state = encodeURIComponent(location);
    const scope = ['email'].join(',');
    // TODO use this.props.history.push()
    location.assign(`https://www.facebook.com/v3.1/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`);
    // TODO redirect back to the current location and intercept ?code= parameter via a middleware auth handler.
  };

  render () {
    const StyledContainer = styled.div`
      height: 500px;
    `;

    return (
      <div className="onboarding">
        <Grid>
          <Row middle="xs">
            <Column sm={2} md={2} lg={2} xl={2}>
              <OnboardingSidebar
                className="onboarding__sidebar"
                logoUrl="/logo.svg"
                logoClassName="onboarding__logo"
                subheaderText="DEVELOPERS"
                headerText="Create Machine Learning Algorithm"
                descriptionText="Upload your algorithms to the marketplace and get paid each time they run on a device."
                iconUrl="/icon_developers.svg"
                iconClassName="onboarding__icon"
                currentStepIndex={0}
                totalSteps={3}
              />
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
              <StyledContainer>
                <Tabs
                  defaultActiveTabIndex={this.props.isLogin ? 1 : 0}
                >
                  <VerticalTab
                    title="Sign Up"
                  >
                    <Box padding={6}>
                      <Title>Create Your Account</Title>
                      <Box verticalMargin={5}>
                        <Description>Your email address is used for account related updates.</Description>
                      </Box>
                      <Box verticalMargin={1}>
                        <TextInput
                          type="email"
                          placeholder="Email Address"
                          data-id="signup-input-email"
                        />
                      </Box>
                      <Box verticalMargin={1}>
                        <TextInput
                          type="password"
                          placeholder="Password"
                          data-id="signup-input-password"
                        />
                      </Box>
                      <Box verticalMargin={1}>
                        <TextInput
                          type="password"
                          placeholder="Confirm password"
                          data-id="signup-input-password-confirmation"
                        />
                      </Box>
                      <Box verticalMargin={2}>
                        <Button
                          onClick={() => {
                            const email                = document.querySelector("[data-id='signup-input-email']").value;
                            const password             = document.querySelector("[data-id='signup-input-password']").value;
                            const passwordConfirmation = document.querySelector("[data-id='signup-input-password-confirmation']").value;

                            this.props.signup(email, password, passwordConfirmation);
                          }}
                        >
                          Sign Up
                        </Button>
                      </Box>
                      <Box verticalMargin={2}>
                        <Button onClick={this.requestGoogleOAuth}>Sign Up with Google</Button>
                      </Box>
                      <Box verticalMargin={2}>
                        <Button onClick={this.requestFacebookOAuth}>Sign Up with Facebook</Button>
                      </Box>
                    </Box>
                  </VerticalTab>
                  <VerticalTab
                    title="Log In"
                  >
                    <Box padding={6}>
                      <Title>Log In</Title>
                      <Box verticalMargin={5}>
                        <Description>Your email address is used for account related updates.</Description>
                      </Box>
                      <Box verticalMargin={1}>
                        <TextInput
                          value="user@kyokan.io"
                          type="email"
                          placeholder="Email Address"
                          data-id="login-input-email"
                        />
                      </Box>
                      <Box verticalMargin={1}>
                        <TextInput
                          value="password123"
                          type="password"
                          placeholder="Password"
                          data-id="login-input-password"
                        />
                      </Box>
                      <Box verticalMargin={2}>
                        <Button
                          onClick={() => {
                            const email    = document.querySelector("[data-id='login-input-email']").value;
                            const password = document.querySelector("[data-id='login-input-password']").value;

                            this.props.login(email, password);
                          }}
                        >
                          Log In
                        </Button>
                      </Box>
                      <Box verticalMargin={2}>
                        <Button onClick={this.requestGoogleOAuth}>Login with Google</Button>
                      </Box>
                      <Box verticalMargin={2}>
                        <Button onClick={this.requestFacebookOAuth}>Login with Facebook</Button>
                      </Box>
                    </Box>
                  </VerticalTab>
                </Tabs>
              </StyledContainer>
            </Column>
          </Row>
        </Grid>
      </div>
    );
  }
}

Signup.defaultProps = {
  isLogin: false,
};

Signup.propTypes = {
  isLogin      : PropTypes.bool,
  login        : PropTypes.func.isRequired,
  requestOAuth : PropTypes.func.isRequired,
  signup       : PropTypes.func.isRequired,
};

export default withRouter(connect(
  () => {
    return {
      email    : null,
      password : null,
    };
  },
  (dispatch) => {
    return {
      login: (email, password) => {
        dispatch(authActions.login({
          email,
          password,
        }));
      },
      signup: (email, password, passwordConfirmation) => {
        dispatch(authActions.signup({
          user: {
            email                 : email,
            password              : password,
            password_confirmation : passwordConfirmation,
          },
        }));
      },
      requestOAuth: (provider, code) => {
        dispatch(requestOAuth(provider, code));
      },
      requestGoogleOAuth: () => {
        dispatch(requestGoogleOAuth());
      },
      requestFacebookOAuth: () => {
        dispatch(requestFacebookOAuth());
      },
    };
  },
)(Signup));
