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

  requestGoogleOAuth () {
    // TODO Saga most of this.
    lazyLoadScript('https://apis.google.com/js/client:platform.js', 'Login-oauth-google').then(() => {
      window.gapi.load('auth2', () => {
        const auth2 = window.gapi.auth2.getAuthInstance();
        (auth2 ? Promise.resolve(auth2) : window.gapi.auth2.init({
          client_id: '434267187748-rmsin2o1nt2mi7rtqkm49b5fju0siqkt.apps.googleusercontent.com'
        }))
        .then(auth2 => auth2.grantOfflineAccess())
        .then(access => fetch(`https://elegant-brisk-indianjackal.gigalixirapp.com/auth/google/callback?code=${access.code}`))
        .then(response => {
          // TODO catch unexpected responses and throw.
          return response.json();
        })
        .then(data => {
          console.log(data);
          // TODO store data.jwt and other detail in the user state.
        })
        .catch(reason => {
          // TODO report error
          console.error(reason);
          debugger;
        });
      });
    });
  }

  requestFacebookOAuth () {

  }

  responseGoogle (googleUser) {
    console.log(googleUser);
  }

  responseFacebook (facebookUser) {
    console.log(facebookUser);
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
