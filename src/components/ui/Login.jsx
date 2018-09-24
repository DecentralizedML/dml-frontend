import * as React from 'react';
import { connect } from "react-redux";
import { requestLogin } from '../../actions';
import lazyLoadScript from 'lazyload-script';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
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

  requestOAuthLogin (provider, code) {
    // TODO Saga most of this.
    return fetch(`https://elegant-brisk-indianjackal.gigalixirapp.com/auth/${provider}/callback?code=${code}`)
      .then(response => {
        // TODO catch unexpected responses and throw.
        return response.json();
      })
      .then(data => {
        console.log(data);
        // TODO store data.jwt and other detail in the user state.
      });
  }

  requestGoogleOAuth = () => {
    // TODO Saga most of this.
    const requestOAuthLogin = this.requestOAuthLogin;
    lazyLoadScript('https://apis.google.com/js/client:platform.js', 'Login-oauth-google')
      .then(() => {
        window.gapi.load('auth2', () => {
          const auth2 = window.gapi.auth2.getAuthInstance();
          (auth2 ? Promise.resolve(auth2) : window.gapi.auth2.init({
            client_id: '434267187748-rmsin2o1nt2mi7rtqkm49b5fju0siqkt.apps.googleusercontent.com'
          }))
          .then(auth2 => auth2.grantOfflineAccess())
          .then(access => requestOAuthLogin('google', access.code))
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
    // TODO maybe try-catch this to provide a single error handling point.
    const requestOAuthLogin = this.requestOAuthLogin;
    window.fbAsyncInit = window.fbAsyncInit || (() => {
      window.FB.init({
        appId: '1100670340090827',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.1'
      });
      window.FB.login(response => Promise.resolve(response)
        .then(response => {
          if (response.authResponse) {
            return response.authResponse;
          } else {
            throw new Error('Facebook login failed or rejected');
          }
        })
        .then(auth => requestOAuthLogin('facebook', auth.accessToken))
        .catch(reason => {
          // TODO error handling in miscReducer.
          console.error(reason);
          debugger;
        })
      );
    });
    lazyLoadScript('https://connect.facebook.net/en_US/sdk.js', 'Login-oauth-facebook')
      .catch(reason => {
        // TODO error handling in miscReducer.
        console.error(reason);
        debugger;
      });
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

export default connect(
  () => ({
    email: null,
    password: null
  }),
  dispatch => ({
    requestLogin: (username, password) => {
      dispatch(requestLogin(username, password));
    }
  })
)(Login);
