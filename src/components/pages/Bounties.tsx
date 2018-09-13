import * as React from 'react';
import { connect } from "react-redux";
import { State } from '../../state';
import './Bounties.css';

interface BountiesProps extends State {
}

class Bounties extends React.Component<BountiesProps, {}> {

  /*
  public shouldComponentUpdate (nextProps: BountiesProps): boolean {
    console.log(this.props);
    console.log(nextProps);
    return true;
  }
  */

  public render () {
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
