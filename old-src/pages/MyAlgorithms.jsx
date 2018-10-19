import * as React from 'react';
import { connect } from "react-redux";
import {
  Grid,
  Row,
  // Column,
  SiteHeader,
  Logo,
  Tabs,
  HorizontalTab,

} from '@kyokan/kyokan-ui';
import './MyAlgorithms.css';

class MyAlgorithms extends React.Component {

  /*
  shouldComponentUpdate (nextProps) {
    console.log(this.props);
    console.log(nextProps);
    return true;
  }
  */

  render () {
    return (
      <Grid>
        <SiteHeader>
          <Logo name="Decentralized Machine Learning" />
          <Tabs activeKey="myalgorithms">
            <HorizontalTab>
              Marketplace
            </HorizontalTab>
            <HorizontalTab>
              Bounties
            </HorizontalTab>
            <HorizontalTab active={true}>
              My Algorithms
            </HorizontalTab>
          </Tabs>
        </SiteHeader>
        <Row>
          <h1>MyAlgorithms</h1>
          <pre>{ JSON.stringify(this.props) }</pre>
        </Row>
      </Grid>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
  })
)(MyAlgorithms);
