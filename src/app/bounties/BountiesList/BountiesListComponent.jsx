import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Box,
  Column,
  CountMetric,
  Description,
  Grid,
  Header,
  Identity,
  Row,
  Sorter,
  Status,
  TabbedSelector,
  TabbedSelectorOption,
  Text,
  TextInput,
  TokenAmount,
} from '@kyokan/kyokan-ui';

import DMLSiteHeader from '../../dml-site-header';
import DMLSiteSubheader from '../../dml-site-subheader';

const Bounties = (props) => {
  const StyledContainer = styled.div`
    width: 100%;
    background-color: white;
  `;

  const StyledBox = styled.div`
    width: 100%;
    background-color: white;
    margin-top: 20px;
    padding: 10px;
  `;

  const StyledHeader = styled.div`
    width: 100%;
    margin-top: 10px;
    padding: 10px;
  `;

  return (
    <Grid fluid style={{ padding: 0 }}>
      <DMLSiteHeader
        marketplace
        bountiesActive
        algorithms
        createAlgorithm
        accountDropdown
      />
      <DMLSiteSubheader
        allBountiesActive
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
          <Box marginTop={8}>
            <Row>
              <Column xl={4}>
                <Row>
                  <Column>
                    <TextInput placeholder="Search" />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <StyledHeader>FILTER BY STATUS</StyledHeader>
                    <StyledContainer>
                      <TabbedSelector
                        defaultSelectedIndex={0}
                        onlyOne
                        vertical
                      >
                        <TabbedSelectorOption
                          icon="addUser"
                        >
                          Open for Enrollment
                        </TabbedSelectorOption>

                        <TabbedSelectorOption
                          icon="copy"
                        >
                          Open for Submissions
                        </TabbedSelectorOption>

                        <TabbedSelectorOption
                          icon="clipboard"
                        >
                          Under Evaluation
                        </TabbedSelectorOption>

                        <TabbedSelectorOption
                          icon="award"
                        >
                          Finished
                        </TabbedSelectorOption>
                      </TabbedSelector>
                    </StyledContainer>
                  </Column>
                </Row>
              </Column>
              <Column xl={8}>
                <Row>
                  <Column>
                    <Header>22 Bounties</Header>
                  </Column>
                  <Column>
                    <Sorter />
                  </Column>
                </Row>
                <Row>
                  <StyledBox
                    onClick={() => {
                      props.history.push('/bounties/1');
                    }}
                  >
                    <Row>
                      <Column>
                        <Header>Home Credit Default Risk</Header>
                      </Column>
                    </Row>
                    <Row>
                      <Column>
                        <Description>Can you predict how capable each applicant is of repaying a loan?</Description>
                      </Column>
                    </Row>
                    <Row>
                      <Column>
                        <Identity
                          name="Home Credit Group"
                        />
                      </Column>
                      <Column>
                        <CountMetric
                          icon="user"
                          metricValue={120}
                        />
                      </Column>
                      <Column>
                        <Status
                          error
                        >
                          Enrollment Closes: <b>Sep 5</b>
                        </Status>
                      </Column>
                      <Column>
                        <Text>Prize Pool</Text>
                        <TokenAmount
                          token="DML"
                          amount={250}
                          dark
                        />
                      </Column>
                    </Row>
                  </StyledBox>
                </Row>
              </Column>
            </Row>
          </Box>
        </Column>
      </Row>
    </Grid>
  );
};

Bounties.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Bounties;
