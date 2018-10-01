import * as React from 'react';
import { connect } from "react-redux";
import './Bounties.css';

class Bounties extends React.Component {

  /*
  shouldComponentUpdate (nextProps) {
    console.log(this.props);
    console.log(nextProps);
    return true;
  }
  */

  render () {
    return (
      <div>
        <h1>Bounties</h1>
        <pre>{ JSON.stringify(this.props) }</pre>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
  })
)(Bounties);
