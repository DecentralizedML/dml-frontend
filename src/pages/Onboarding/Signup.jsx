import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { requestLogin, requestOAuth, requestGoogleOAuth, requestFacebookOAuth } from '../../actions';
import './Onboarding.css';
import {
  Box,
  Button,
  Description,
  OnboardingSidebar,
  TextInput,
  Title,
} from 'kyokan-ui';
import logo from "../../assets/logo.svg";
import icon from "../../assets/icon_developers.svg";
import lazyLoadScript from "lazyload-script";

class Signup extends React.Component {

  /*
  shouldComponentUpdate (nextProps) {
    console.log(this.props);
    console.log(nextProps);
    return true;
  }
  */

  static propTypes = {
    onComplete: PropTypes.func,
  };

  requestGoogleOAuth = () => {
    // TODO Saga most of this.
    lazyLoadScript('https://apis.google.com/js/client:platform.js', 'Login-oauth-google')
      .then(() => {
        window.gapi.load('auth2', () => {
          const auth2 = window.gapi.auth2.getAuthInstance();
          (auth2 ? Promise.resolve(auth2) : window.gapi.auth2.init({
            client_id: '434267187748-rmsin2o1nt2mi7rtqkm49b5fju0siqkt.apps.googleusercontent.com'
            // TODO change to use ux_mode=redirect for consistency with Facebook behaviour.
          }))
            .then(auth2 => auth2.grantOfflineAccess())
            .then(access => {
              this.props.requestOAuth('google', access.code);
              this.props.onComplete();
            })
            .catch(reason => {
              // TODO error handling in miscReducer.
              console.error(reason);
              debugger;
            })
        });
      })
      .catch(reason => {
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
    const scope = [ 'email' ].join(',');
    // TODO use this.props.history.push()
    location.assign(`https://www.facebook.com/v3.1/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`);
    // TODO redirect back to the current location and intercept ?code= parameter via a middleware auth handler.
  };

  render () {
    return (
      <div className="onboarding">
        <OnboardingSidebar
          className="onboarding__sidebar"
          logoUrl={logo}
          logoClassName="onboarding__logo"
          subheaderText="DEVELOPERS"
          headerText="Create Machine Learning Algorithmn"
          descriptionText="Upload your algorithms to the marketplace and get paid each time they run on a device."
          iconUrl={icon}
          iconClassName="onboarding__icon"
          currentStepIndex={0}
          totalSteps={3}
        />
        <div className="onboarding__content">
          <Title>Create Your Account</Title>
          <Description>Your email address is used for account related updates.</Description>
          <Box className="onboarding__box">
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
            <Button onClick={this.props.onComplete}>Continue</Button>
            <Button onClick={this.requestGoogleOAuth}>Use Google Account</Button>
            <Button onClick={this.requestFacebookOAuth}>Use Facebook Account</Button>
          </Box>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(
  () => ({
    email: null,
    password: null
  }),
  dispatch => ({
    requestLogin: (username, password) => {
      dispatch(requestLogin(username, password));
    },
    requestOAuth: (provider, code) => {
      dispatch(requestOAuth(provider, code));
    },
    requestGoogleOAuth: () => {
      dispatch(requestGoogleOAuth());
    },
    requestFacebookOAuth: () => {
      dispatch(requestFacebookOAuth());
    }
  })
)(Signup));

