import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lazyLoadScript from 'lazyload-script';
import styled from 'styled-components';
import c from 'classnames';

import {
  OnboardingSidebar,
  Button,
} from '@kyokan/kyokan-ui';

import Input from '../../../../components/Input';

import '../../Onboarding.scss';

const StyledContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
`;

const Actions = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1 0 auto;
  align-items: center;
`;

const OAuths = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1 0 auto;
  align-items: center;
  justify-content: flex-end;
`;

const LOGIN = 0;
const SIGNUP = 1;

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

  state = {
    viewType: LOGIN,
    email: '',
    password: '',
    confirmPassword: '',
  };

  switchView = viewType => {
    this.setState({
      viewType,
      email: '',
      password: '',
      confirmPassword: '',
    })
  };

  signup = () => {
    const { email, password, confirmPassword } = this.state;
    const { signup, onComplete } = this.props;
    signup(email, password, confirmPassword, onComplete);
  };

  login = () => {
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  renderForm() {
    const { email, password, confirmPassword } = this.state;

    switch (this.state.viewType) {
      case SIGNUP:
        return (
          <div className="onboarding__form__inputs">
            <Input
              type="email"
              className="onboarding__form__input"
              placeholder="Email Address"
              onChange={e => this.setState({ email: e.target.value })}
              value={email}
            />
            <Input
              className="onboarding__form__input"
              type="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
              value={password}
            />
            <Input
              className="onboarding__form__input"
              type="password"
              placeholder="Confirm Password"
              onChange={e => this.setState({ confirmPassword: e.target.value })}
              value={confirmPassword}
            />
            <Actions>
              <Button onClick={this.signup}>Sign Up</Button>
              <OAuths>
                fb and google icons here
              </OAuths>
            </Actions>
          </div>
        );
      case LOGIN:
      default:
        return (
          <div className="onboarding__form__inputs">
            <Input
              className="onboarding__form__input"
              type="email"
              placeholder="Email Address"
              onChange={e => this.setState({ email: e.target.value })}
              value={email}
            />
            <Input
              className="onboarding__form__input"
              type="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
              value={password}
            />
            <Actions>
              <Button onClick={this.login}>Login</Button>
              <OAuths>
                fb and google icons here
              </OAuths>
            </Actions>
          </div>
        );
    }
  }

  render () {
    const { viewType } = this.state;
    return (
      <div className="onboarding">
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
        <StyledContainer>
          <div className="onboarding__form">
            <div className="onboarding__form-header">
              <div
                className={c({
                  'onboarding__view-selector--selected': viewType === LOGIN,
                })}
                onClick={() => this.switchView(LOGIN)}
              >
                ALREADY A MEMBER
              </div>
              <div
                className={c({
                  'onboarding__view-selector--selected': viewType === SIGNUP,
                })}
                onClick={() => this.switchView(SIGNUP)}
              >
                I AM NEW HERE
              </div>
            </div>
            { this.renderForm() }
          </div>
        </StyledContainer>
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
  history      : PropTypes.object.isRequired,
  onComplete   : PropTypes.func.isRequired,
};

export default Signup;
