import React from 'react';
// import PropTypes from 'prop-types';

import {
  Box,
  Column,
  Grid,
  Header,
  Row,
} from '@kyokan/kyokan-ui';

import DMLSiteHeader from '../dml-site-header';

const Algorithms = (props) => {
  return (
    <Grid fluid style={{ padding: 0 }}>
      <DMLSiteHeader
        marketplace
        bounties
        algorithmsActive
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
            <Header>Algorithms</Header>
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
          ALGORITHMS
        </Column>
      </Row>
    </Grid>
  );
};

Algorithms.propTypes = {};

export default Algorithms;
