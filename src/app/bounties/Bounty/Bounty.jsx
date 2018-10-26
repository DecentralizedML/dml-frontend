import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Box,
  Column,
  CountMetric,
  Description,
  Grid,
  Identity,
  Row,
  Status,
  Tabs,
  Text,
  Title,
  TokenAction,
  VerticalTab,
} from '@kyokan/kyokan-ui';

import DMLSiteHeader from '../../dml-site-header';
import DMLSiteSubheader from '../../dml-site-subheader';

const StyledBox = styled.div`
  background-color: white;
`;

const Bounty = (props) => {
  return (
    <Grid fluid style={{ padding: 0 }}>
      <DMLSiteHeader
        marketplaceActive
        bounties
        algorithms
        createAlgorithm
        accountDropdown
      />
      <DMLSiteSubheader
        allBounties
        myParticipations
        createBounty
      />
      <Row nogutter>
        <Column
          xl={8}
          offset={{
            lg: 2,
          }}
        >
          <Box padding={8} />
        </Column>
      </Row>
      <Row nogutter>
        <Column
          xl={8}
          offset={{
            lg: 2,
          }}
        >
          <StyledBox>
            <Row>
              <Column>
                <Box>
                  <Row>
                    <Column>
                      <Title>Coupon Purchase Prediction</Title>
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Description>Predict which coupons customers will buy</Description>
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Identity
                        name="Recruit"
                      />
                    </Column>
                    <Column>
                      <CountMetric
                        icon="user"
                        metricValue={56}
                      />
                    </Column>
                    <Column>
                      <Status warning>
                        Enrollment Closes: <b>Sep 8</b>
                      </Status>

                      <Status success>
                        Submissions: <b>Sep 9 - Nov 23</b>
                      </Status>
                    </Column>
                    <Column>
                      <Text>Prize Pool</Text>
                      <TokenAction
                        amount={435}
                        token="DML"
                        buttonText="Enroll in Bounty"
                        onClick={() => {

                        }}
                      />
                    </Column>
                  </Row>
                </Box>
              </Column>
            </Row>
            <Row>
              <Column>
                <Tabs>
                  <VerticalTab title="Description">Description</VerticalTab>
                  <VerticalTab title="Prizes">Prizes</VerticalTab>
                  <VerticalTab title="Timeline">Timeline</VerticalTab>
                  <VerticalTab title="Data">Data</VerticalTab>
                  <VerticalTab title="Evaluation">Evaluation</VerticalTab>
                  <VerticalTab title="Rules">Rules</VerticalTab>
                  <VerticalTab title="Submission">Submission</VerticalTab>
                </Tabs>
              </Column>
            </Row>
          </StyledBox>
        </Column>
      </Row>
    </Grid>
  );
};

Bounty.propTypes = {};

export default Bounty;
