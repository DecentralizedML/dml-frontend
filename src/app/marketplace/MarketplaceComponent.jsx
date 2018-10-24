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

const Marketplace = (props) => {
  return (
    <Grid fluid style={{ padding: 0 }}>
      <DMLSiteHeader
        marketplaceActive
        bounties
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
            <Header>Marketplace</Header>
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
          MARKETPLACE
        </Column>
      </Row>
    </Grid>
  );
};

Marketplace.propTypes = {};

export default Marketplace;
