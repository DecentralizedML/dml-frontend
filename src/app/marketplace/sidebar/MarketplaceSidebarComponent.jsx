import React from "react";
// import PropTypes from 'prop-types';
import { Row } from "@kyokan/kyokan-ui";

import {
  CardContainer,
  TopCard,
  BottomCard,
  OpacityHeadline,
  SidebarContainer
} from "./UI/index";

import CardContent from "./MarketPlaceSidebarCardContent";
import Tag from "./MarketPlaceSidebarTagCard";
import Searchbar from "./MarketPlaceSidebarSearchbar";

const popularTags = [
  "OCR",
  "Sentiment Analysis",
  "Color Trend",
  "Fashion",
  "Pathfinding",
  "Image Recognition"
];

const Sidebar = props => {
  const { selectCategory, category } = props;
  const renderSidebar = () => {
    return (
      <SidebarContainer>
        <Searchbar />
        <OpacityHeadline>FILTER BY CATEGORY</OpacityHeadline>
        <CardContainer>
          <TopCard>
            <CardContent
              category="Image Recognition"
              active={category === "Image Recognition"}
              selectCategory={selectCategory}
            />
          </TopCard>
          <BottomCard>
            <CardContent
              category="Text Analysis"
              active={category === "Text Analysis"}
              selectCategory={selectCategory}
            />
          </BottomCard>
        </CardContainer>
        <OpacityHeadline>POPULAR TAGS</OpacityHeadline>
        <Row nogutter>
          {popularTags.map(tag => {
            return <Tag title={tag} />;
          })}
        </Row>
      </SidebarContainer>
    );
  };

  return renderSidebar();
};

Sidebar.propTypes = {};

export default Sidebar;
