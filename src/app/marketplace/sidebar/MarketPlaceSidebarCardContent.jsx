import React from "react";
// import PropTypes from 'prop-types';
import { Column } from "@kyokan/kyokan-ui";
import {
  CategoryIcon,
  SidebarRow,
  CategoryTitle,
  CategoryText
} from "./UI/index";

const CardContent = props => {
  const { category, active, selectCategory } = props;

  const renderCard = () => {
    if (category === "Image Recognition") {
      return (
        <SidebarRow active onClick={() => selectCategory(category)}>
          <Column xl={2.5}>
            <CategoryIcon
              active={active}
              icon="/icons/Icon-Categories-Image-Dark.svg"
              iconActive="/icons/Icon-Categories-Image-Blue.svg"
            />
          </Column>
          <Column xl={9.5}>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryText>Identify objects in Images</CategoryText>
          </Column>
        </SidebarRow>
      );
    } else if (category === "Text Analysis") {
      return (
        <SidebarRow active onClick={() => selectCategory(category)}>
          <Column xl={2.5}>
            <CategoryIcon
              active={active}
              icon="/icons/Icon-Categories-Text-Dark.svg"
              iconActive="/icons/Icon-Categories-Text-Blue.svg"
            />
          </Column>
          <Column xl={9.5}>
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