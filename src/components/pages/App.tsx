import * as React from 'react';
import { connect } from "react-redux";
import { Button } from 'reactstrap';
import { State } from '../../state';
import { login } from '../../actions';
import './App.css';

import logo from '../../assets/logo.svg';

interface AppProps extends State {
  login: typeof login
}

class App extends React.Component<AppProps, {}> {
  onClick = () => {
    this.props.login('testusername', 'testpassword');
  }

  public shouldComponentUpdate (nextProps: AppProps): boolean {
    console.log(this.props);
    console.log(nextProps);
    return true;
  }

  public render () {
    return (
      <div className={`App ${this.props.misc.loading ? 'App-loading' : ''}`}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro pt-4">
          <Button
            color="primary"
            size="lg"
            disabled={this.props.misc.loading}
            onClick={this.onClick}
          >
            { this.props.misc.loading ? 'Please wait...' : 'Click here to login' }
          </Button>
        </p>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    login: (username: string, password: string) => dispatch(login(username, password))
  })
)(App);
