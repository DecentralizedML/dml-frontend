import React from "react";
// import PropTypes from 'prop-types';
import { Column, Grid, Row, Header } from "@kyokan/kyokan-ui";

import {
  CardContainer,
  TopCard,
  BottomCard,
  OpacityHeadline,
  SidebarContainer
} from "./UI/index";

import CardContent from "./MarketPlaceSidebarCardContent";

const Sidebar = props => {
  const {} = props;
  const renderSidebar = () => {
    return (
      <SidebarContainer>
        <OpacityHeadline>FILTER BY CATEGORY</OpacityHeadline>
        <CardContainer>
          <TopCard>
            <CardContent category="Image Recognition" />
          </TopCard>
          <BottomCard>
            <CardContent category="Text Analysis" />
          </BottomCard>
        </CardContainer>
      </SidebarContainer>
    );
  };

  return renderSidebar();
};

Sidebar.propTypes = {};

export default Sidebar;
