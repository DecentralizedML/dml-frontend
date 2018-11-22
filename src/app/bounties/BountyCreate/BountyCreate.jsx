import React from 'react';
// import PropTypes from 'prop-types';

import {
  Box,
  Column,
  Grid,
  Header,
  Row,
} from '@kyokan/kyokan-ui';

const BountyCreate = (props) => {
  return (
    <Grid fluid style={{ padding: 0 }}>
      <Row nogutter>
        <Column
          xl={8}
          offset={{
            lg: 2,
          }}
        >
          <Box padding={8}>
            <Header>Create Bounty</Header>
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
          Create Bounty
        </Column>
      </Row>
    </Grid>
  );
};

BountyCreate.propTypes = {};

export default BountyCreate;
