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
            props.history.push('/');
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
          onClick={() => {
            props.history.push('/marketplace');
          }}
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
          onClick={() => {
            props.history.push('/bounties');
          }}
        />
      );
    }
  };

  const renderMyAlgorithms = () => {
    if (props.algorithms || props.algorithmsActive) {
      return (
        <DMLSiteHeaderLink
          text="Algorithms"
          active={props.algorithmsActive}
          onClick={() => {
            props.history.push('/algorithms');
          }}
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
            { text: 'Account Settings', route: '/account' },
            { text: 'Logout',           route: '/logout' },
          ]}
          name={props.userName}
          onItemClick={({ route }) => {
            if (route) {
              props.history.push(route);
            }
          }}
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
  accountDropdown   : false,
  algorithms        : false,
  algorithmsActive  : false,
  bounties          : false,
  bountiesActive    : false,
  createAlgorithm   : false,
  logo              : true,
  marketplace       : false,
  marketplaceActive : false,
  userAvatar        : '',
  userName          : 'User',
};

DMLSiteHeader.propTypes = {
  accountDropdown   : PropTypes.bool,
  algorithms        : PropTypes.bool,
  algorithmsActive  : PropTypes.bool,
  bounties          : PropTypes.bool,
  bountiesActive    : PropTypes.bool,
  createAlgorithm   : PropTypes.bool,
  history           : PropTypes.object.isRequired,
  logo              : PropTypes.bool,
  marketplace       : PropTypes.bool,
  marketplaceActive : PropTypes.bool,
  userAvatar        : PropTypes.string,
  userName          : PropTypes.string,
};

export default DMLSiteHeader;
