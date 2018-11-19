import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { matchPath } from 'react-router-dom'
import styled from "styled-components";

import { AccountDropdown, Box, Button, Column, Row } from "@kyokan/kyokan-ui";

import DMLSiteHeaderLink from "./DMLSiteHeaderLink";

const headerHeight = "64px";

const StyledHeader = styled.div`
  background-color: rgb(41, 54, 73);
`;

const StyledLogo = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  height: ${headerHeight};
`;

export default class DMLSiteHeader extends PureComponent {
  static defaultProps = {
    showAccountDropdown: false,
    showAlgorithms: false,
    showBounties: false,
    showCreateAlgorithm: false,
    showLogo: true,
    showMarketplace: false,
    userAvatar: "",
    userName: "User"
  };

  static propTypes = {
    showAccountDropdown: PropTypes.bool,
    showAlgorithms: PropTypes.bool,
    showBounties: PropTypes.bool,
    showCreateAlgorithm: PropTypes.bool,
    history: PropTypes.object.isRequired,
    location: PropTypes.object,
    showLogo: PropTypes.bool,
    showMarketplace: PropTypes.bool,
    userAvatar: PropTypes.string,
    userName: PropTypes.string
  };

  renderLogo () {
    const { history, showLogo } = this.props

    return showLogo && (
      <StyledLogo
        src="/logo.svg"
        alt="Decentralized Machine Learning"
        onClick={() => history.push("/")}
      />
    )
  }

  renderCreateAlgorithm () {
    const { showCreateAlgorithm, history } = this.props;

    return showCreateAlgorithm && (
      <Button
        onClick={() => history.push("/authenticated/create-algorithm")}
        leftIcon="plusCircle"
      >
        Create Algorithm
      </Button>
    )
  }

  renderMarketplace () {
    const { history, location, showMarketplace } = this.props

    const isActive = Boolean(matchPath(location.pathname, {
      path: '/authenticated/marketplace', exact: false,
    }))

    return showMarketplace && (
      <DMLSiteHeaderLink
        text="Marketplace"
        active={isActive}
        onClick={() => history.push("/authenticated/marketplace")}
      />
    )
  }

  renderBounties () {
    const { showBounties, history, location } = this.props

    const isActive = Boolean(matchPath(location.pathname, {
      path: '/authenticated/bounties', exact: false,
    }))

    return showBounties && (
      <DMLSiteHeaderLink
        text="Bounties"
        active={isActive}
        onClick={() => history.push("/authenticated/bounties")}
      />
    )
  }

  renderMyAlgorithms () {
    const { showAlgorithms, history, location } = this.props

    const isActive = Boolean(matchPath(location.pathname, {
      path: '/authenticated/algorithms', exact: false,
    }))

    return showAlgorithms && (
      <DMLSiteHeaderLink
        text="Algorithms"
        active={isActive}
        onClick={() => history.push("/authenticated/algorithms")}
      />
    )
  }

  renderAccountDropdown () {
    const { showAccountDropdown, userAvatar, userName, history } = this.props

    return showAccountDropdown && (
      <AccountDropdown
        avatar={userAvatar}
        items={[
          { text: "Account Settings", route: "/authenticated/account" },
          { text: "Logout", route: "/logout" }
        ]}
        name={userName}
        onItemClick={({ route }) => {
          if (route) {
            history.push(route);
          }
        }}
      />
    )
  }

  render () {
    return (
      <Row nogutter>
        <Column>
          <StyledHeader>
            {/* xs: 0   sm: 576   md: 768   lg: 992   xl: 1200 */}
            <Row nogutter align="center">
              <Column xs={12} sm={12} md={12} lg={3} xl={2}>
                <Box verticalPadding={4} centerContent>
                  { this.renderLogo() }
                </Box>
              </Column>
              <Column xs={12} sm={12} md={12} lg={5} xl={4}>
                <StyledContainer>
                  { this.renderMarketplace() }
                  { this.renderBounties() }
                  { this.renderMyAlgorithms() }
                </StyledContainer>
              </Column>
              <Column xs={6} sm={6} md={6} lg={2} xl={2} offset={{ xl: 2 }}>
                <Box verticalPadding={2} rightContent>
                  { this.renderCreateAlgorithm() }
                </Box>
              </Column>
              <Column xs={6} sm={6} md={6} lg={2} xl={2}>
                <Box centerContent>
                  { this.renderAccountDropdown() }
                </Box>
              </Column>
            </Row>
          </StyledHeader>
        </Column>
      </Row>
    )
  }
}
