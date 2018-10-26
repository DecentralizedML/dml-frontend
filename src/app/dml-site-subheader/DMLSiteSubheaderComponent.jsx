import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Column,
  Row,
} from '@kyokan/kyokan-ui';

import DMLSiteSubheaderLink from './DMLSiteSubheaderLink';

const headerHeight = '64px';

const StyledSubheader = styled.div`
  height: ${headerHeight};
  background-color : white;
`;

const StyledContainer = styled.div`
  display         : flex;
  height          : ${headerHeight};
`;

const DMLSiteSubheader = (props) => {
  const renderAllBounties = () => {
    if (props.allBounties || props.allBountiesActive) {
      return (
        <DMLSiteSubheaderLink
          text="All Bounties"
          active={props.allBountiesActive}
          onClick={() => {
            props.history.push('/bounties');
          }}
        />
      );
    }
  };

  const renderMyParticipations = () => {
    if (props.myParticipations || props.myParticipationsActive) {
      return (
        <DMLSiteSubheaderLink
          text="My Participations"
          active={props.myParticipationsActive}
          onClick={() => {
            props.history.push('/bounties/user');
          }}
        />
      );
    }
  };

  const renderCreateBounty = () => {
    if (props.createBounty || props.createBountyActive) {
      return (
        <DMLSiteSubheaderLink
          text="Create Bounty"
          active={props.createBountyActive}
          onClick={() => {
            props.history.push('/bounties/create');
          }}
        />
      );
    }
  };

  return (
    <Row nogutter>
      <Column>
        <StyledSubheader>
          {/* xs: 0   sm: 576   md: 768   lg: 992   xl: 1200 */}
          <Row nogutter align="center" justify="center">
            <Column xs={12} lg={6} xl={4}>
              <StyledContainer>
                {renderAllBounties()}
                {renderMyParticipations()}
                {renderCreateBounty()}
              </StyledContainer>
            </Column>
          </Row>
        </StyledSubheader>
      </Column>
    </Row>
  );
};

DMLSiteSubheader.defaultProps = {
  allBounties            : false,
  allBountiesActive      : false,
  createBounty           : false,
  createBountyActive     : false,
  myParticipations       : false,
  myParticipationsActive : false,
};

DMLSiteSubheader.propTypes = {
  allBounties            : PropTypes.bool,
  allBountiesActive      : PropTypes.bool,
  createBounty           : PropTypes.bool,
  createBountyActive     : PropTypes.bool,
  history                : PropTypes.object.isRequired,
  myParticipations       : PropTypes.bool,
  myParticipationsActive : PropTypes.bool,
};

export default DMLSiteSubheader;
