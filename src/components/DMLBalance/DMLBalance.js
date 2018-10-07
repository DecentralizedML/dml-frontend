import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import {
  Address,
  Box,
  Column,
  Grid,
  Row,
  TokenAmount,
} from 'kyokan-ui';

const DMLBalance = (props) => {
  const StyledDMLBalance = styled.div`
    border: 1px solid black;
  `;

  return (
    <StyledDMLBalance>
      <Box padding={7}>
        <Grid>
          <Row>
            <Column xl={6}>
              <Box padding={5}>
                <TokenAmount
                  amount={props.amount}
                  token="DML"
                />
              </Box>
            </Column>
            <Column xl={6}>
              <Box padding={5}>
                <Address
                  value=""
                  onClick={() => {}}
                />
              </Box>
            </Column>
          </Row>
        </Grid>
      </Box>
    </StyledDMLBalance>
  );
};

DMLBalance.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default DMLBalance;
