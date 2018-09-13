import * as React from 'react';
import { connect } from "react-redux";
import { State } from '../../state';
import './Account.css';

interface AccountProps extends State {
}

class Account extends React.Component<AccountProps, {}> {

  /*
  public shouldComponentUpdate (nextProps: AccountProps): boolean {
    console.log(this.props);
    console.log(nextProps);
    return true;
  }
  */

  public render () {
    return (
      <div>
        <h1>Account</h1>
        <pre>{ JSON.stringify(this.props) }</pre>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
  })
)(Account);
