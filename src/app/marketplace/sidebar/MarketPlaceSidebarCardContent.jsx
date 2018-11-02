import React from "react";
// import PropTypes from 'prop-types';
import { Column, Grid, Row, Header } from "@kyokan/kyokan-ui";
import {
  CategoryIcon,
  SidebarRow,
  CategoryTitle,
  CategoryText
} from "./UI/index";

const CardContent = props => {
  const { category } = props;

  const renderCard = category => {
    if (category === "Image Recognition") {
      return (
        <SidebarRow>
          <Column xl={2.5}>
            <CategoryIcon icon="/icons/Icon-Categories-Image-Dark.svg" />
          </Column>
          <Column Column xl={9.5}>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryText>Identify objects in Images</CategoryText>
          </Column>
        </SidebarRow>
      );
    } else if (category === "Text Analysis") {
      return (
        <SidebarRow>
          <Column xl={2.5}>
            <CategoryIcon icon="/icons/Icon-Categories-Text-Dark.svg" />
          </Column>
          <Column Column xl={9.5}>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryText>Make sense of unstructured text</CategoryText>
          </Column>
        </SidebarRow>
      );
    } else {
      throw new Error("SIDEBAR: Algorithm category is not defined");
    }
  };

  return renderCard(category);
};

CardContent.propTypes = {};

export default CardContent;
