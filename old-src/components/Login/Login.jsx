import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestLogin, requestOAuth, requestGoogleOAuth, requestFacebookOAuth } from '../../actions';
import lazyLoadScript from 'lazyload-script';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from '@kyokan/kyokan-ui';
import './Login.css';

class Login extends React.Component {

  /*
  shouldComponentUpdate (nextProps) {
    console.log(this.props);
    console.log(nextProps);
    return true;
  }
  */

  requestLogin () {
    const username = 'test_username';
    const password = 'test_password';
    this.props.requestLogin(username, password);
  }

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
          .then(access => this.props.requestOAuth('google', access.code))
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
  }

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
  }

  render () {
    return (
      <div className="Login-form">
        <h2>Log In</h2>
        <Form>
          <FormGroup className="Login-oauth Login-google" >
            <Button onClick={this.requestGoogleOAuth}>Use Google Account</Button>
          </FormGroup>
          <FormGroup className="Login-oauth Login-facebook" >
            <Button onClick={this.requestFacebookOAuth}>Use Facebook Account</Button>
          </FormGroup>
          <FormGroup className="Login-text Login-or">OR</FormGroup>
          <FormGroup className="Login-input Login-email">
            <Label for="email">Email address</Label>
            <Input type="email" name="email" id="email" placeholder="Enter your email address" autoComplete="username" />
          </FormGroup>
          <FormGroup className="Login-input Login-password">
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Enter your password" autoComplete="current-password" />
          </FormGroup>
          <FormGroup className="Login-login">
            <Button onClick={this.requestLogin}>Log In</Button>
          </FormGroup>
        </Form>
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
)(Login));
