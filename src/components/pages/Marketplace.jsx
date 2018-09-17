
import * as React from 'react';
import { connect } from "react-redux";
import Login from '../ui/Login';
import './Marketplace.css';

import logo from '../../assets/logo.svg';

class Marketplace extends React.Component {

  shouldComponentUpdate (nextProps) {
    console.log('Marketplace.shouldComponentUpdate');
    console.log(this.props);
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
          <pre>{ JSON.stringify(this.props) }</pre>
          <div className="text-center">
            <Login />
          </div>
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
