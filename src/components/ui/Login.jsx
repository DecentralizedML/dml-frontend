import * as React from 'react';
import { connect } from "react-redux";
import { requestLogin } from '../../actions';
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

  }

  requestGoogleOAuth () {

  }

  requestFacebookOAuth () {

  }

  render () {
    return (
      <div className="Login-form">
        <h2>Log In</h2>
        <Form>
          <FormGroup>
            <Button onClick={this.requestGoogleOAuth}>Use Google Account</Button>
          </FormGroup>
          <FormGroup>
            <Button onClick={this.requestFacebookOAuth}>Use Facebook Account</Button>
          </FormGroup>
          <FormGroup className="Login-or">OR</FormGroup>
          <FormGroup>
            <Label for="email">Email address</Label>
            <Input type="email" name="email" id="email" placeholder="Enter your email address" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Enter your password" />
          </FormGroup>
          <FormGroup>
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
    requestLogin: () => {
      const username = 'test_username';
      const password = 'test_password';
      dispatch(requestLogin(username, password));
    }
  })
)(Login);
