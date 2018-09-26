
import * as React from 'react';
import { connect } from "react-redux";
import Login from '../ui/Login';
import './Marketplace.css';

import logo from '../../assets/logo.svg';

class Marketplace extends React.Component {

  shouldComponentUpdate (nextProps) {
    console.log('Marketplace.shouldComponentUpdate');
    console.log(nextProps);
    return true;
  }

  render () {
    return (
      <div className="App-page">
        <div className="App-header">
          <img className="App-header-logo" src={logo} alt="Decentralized Machine Learning" />
        </div>
        <div className="App-body">
          <h1>Marketplace</h1>
          <div className="text-center">
            <Login />
          </div>
          <pre>{ JSON.stringify(this.props.user) }</pre>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
  })
)(Marketplace);
