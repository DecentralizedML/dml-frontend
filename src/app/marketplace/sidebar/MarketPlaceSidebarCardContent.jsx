import React from "react";
// import PropTypes from 'prop-types';
import {
  CategoryIcon,
  SidebarRow,
  CategoryTitle,
  CategoryText,
  CategoryTextWrapper
} from "./UI/index";

const CardContent = props => {
  const { category, active, selectCategory } = props;

  const renderCard = () => {
    if (category === "Image Recognition") {
      return (
        <SidebarRow active onClick={() => selectCategory(category)}>
          <CategoryIcon
            active={active}
            icon="/icons/Icon-Categories-Image-Dark.svg"
            iconActive="/icons/Icon-Categories-Image-Blue.svg"
          />
          <CategoryTextWrapper>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryText>Identify objects in Images</CategoryText>
          </CategoryTextWrapper>
        </SidebarRow>
      );
    } else if (category === "Text Analysis") {
      return (
        <SidebarRow active onClick={() => selectCategory(category)}>
          <CategoryIcon
            active={active}
            icon="/icons/Icon-Categories-Text-Dark.svg"
            iconActive="/icons/Icon-Categories-Text-Blue.svg"
          />
          <CategoryTextWrapper>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryText>Make sense of unstructured text</CategoryText>
          </CategoryTextWrapper>
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
