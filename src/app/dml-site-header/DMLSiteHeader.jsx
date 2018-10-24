import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  AccountDropdown,
  Box,
  Button,
  Column,
  Row,
} from '@kyokan/kyokan-ui';

import DMLSiteHeaderLink from './DMLSiteHeaderLink';

const headerHeight = '64px';

const StyledHeader = styled.div`
  background-color : rgb(41, 54, 73);
`;

const StyledLogo = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const StyledContainer = styled.div`
  display         : flex;
  height          : ${headerHeight};
`;

const DMLSiteHeader = (props) => {
  const renderLogo = () => {
    if (props.logo) {
      return (
        <StyledLogo
          src="/logo.svg"
          alt="Decentralized Machine Learning"
          onClick={() => {
            console.log('logoClick');
          }}
        />
      );
    }
  };

  const renderMarketplace = () => {
    if (props.marketplace || props.marketplaceActive) {
      return (
        <DMLSiteHeaderLink
          text="Marketplace"
          active={props.marketplaceActive}
        />
      );
    }
  };

  const renderBounties = () => {
    if (props.bounties || props.bountiesActive) {
      return (
        <DMLSiteHeaderLink
          text="Bounties"
          active={props.bountiesActive}
        />
      );
    }
  };

  const renderMyAlgorithms = () => {
    if (props.myAlgorithms || props.myAlgorithmsActive) {
      return (
        <DMLSiteHeaderLink
          text="Algorithms"
          active={props.myAlgorithmsActive}
        />
      );
    }
  };

  const renderCreateAlgorithm = () => {
    if (props.createAlgorithm) {
      return (
        <Button
          leftIcon="plusCircle"
        >
          Create Algorithm
        </Button>
      );
    }
  };

  const renderAccountDropdown = () => {
    if (props.accountDropdown) {
      return (
        <AccountDropdown
          avatar={props.userAvatar}
          items={[
            { text: 'Account Settings', route: '/details' },
            { text: 'Logout',           route: '/logout' },
          ]}
          name={props.userName}
          onItemClick={() => {}}
          onToggleClick={() => {}}
        />
      );
    }
  };

  return (
    <Row nogutter>
      <Column>
        <StyledHeader>
          {/* xs: 0   sm: 576   md: 768   lg: 992   xl: 1200 */}
          <Row nogutter align="center">
            <Column xs={12} sm={12} md={12} lg={3} xl={2}>
              <Box verticalPadding={4} centerContent>
                {renderLogo()}
              </Box>
            </Column>
            <Column xs={12} sm={12} md={12} lg={5} xl={4}>
              <StyledContainer>
                {renderMarketplace()}
                {renderBounties()}
                {renderMyAlgorithms()}
              </StyledContainer>
            </Column>
            <Column xs={6} sm={6} md={6} lg={2} xl={2} offset={{ xl: 2 }}>
              <Box
                verticalPadding={2}
                rightContent
              >
                {renderCreateAlgorithm()}
              </Box>
            </Column>
            <Column xs={6} sm={6} md={6} lg={2} xl={2}>
              <Box centerContent>
                {renderAccountDropdown()}
              </Box>
            </Column>
          </Row>
        </StyledHeader>
      </Column>
    </Row>
  );
};

DMLSiteHeader.defaultProps = {
  accountDropdown    : false,
  bounties           : false,
  bountiesActive     : false,
  createAlgorithm    : false,
  logo               : true,
  marketplace        : false,
  marketplaceActive  : false,
  myAlgorithms       : false,
  myAlgorithmsActive : false,
  userName           : 'User',
  userAvatar         : '',
};

DMLSiteHeader.propTypes = {
  accountDropdown    : PropTypes.bool,
  bounties           : PropTypes.bool,
  bountiesActive     : PropTypes.bool,
  createAlgorithm    : PropTypes.bool,
  logo               : PropTypes.bool,
  marketplace        : PropTypes.bool,
  marketplaceActive  : PropTypes.bool,
  myAlgorithms       : PropTypes.bool,
  myAlgorithmsActive : PropTypes.bool,
  userName           : PropTypes.string,
  userAvatar         : PropTypes.string,
};

export default DMLSiteHeader;
