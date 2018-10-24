import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Column,
  Grid,
  Header,
  Row,
} from '@kyokan/kyokan-ui';

import DMLSiteHeader from '../dml-site-header';

const Bounties = (props) => {
  return (
    <Grid fluid style={{ padding: 0 }}>
      <DMLSiteHeader
        marketplace
        bountiesActive
        algorithms
        createAlgorithm
        accountDropdown
      />
      <Row nogutter>
        <Column
          xl={8}
          offset={{
            lg: 2,
          }}
        >
          <Box padding={8}>
            <Header>Bounties</Header>
          </Box>
        </Column>
      </Row>
      <Row nogutter>
        <Column
          xl={8}
          offset={{
            lg: 2,
          }}
        >
          BOUNTIES
        </Column>
      </Row>
    </Grid>
  );
};

Bounties.propTypes = {};

export default Bounties;
