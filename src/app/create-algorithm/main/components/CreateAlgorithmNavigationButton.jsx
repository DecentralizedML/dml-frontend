import React from "react";

import {
  NavigationButton,
  NavigationButtonText,
  RightArrow,
  LeftArrow
} from "../UI";

import { SaveProgressButton } from "../../sidebar/UI";

const CreateAlgorithmNavigationButton = props => {
  const { type, onClick } = props;
  if (type === "back") {
    return (
      <SaveProgressButton
        style={{ width: "174px", margin: 0 }}
        onClick={onClick}
      >
        <LeftArrow />
        <NavigationButtonText type={"back"}>Previous Step</NavigationButtonText>
      </SaveProgressButton>
    );
  } else {
    return (
      <NavigationButton onClick={onClick}>
        <NavigationButtonText>Next Step</NavigationButtonText>
        <RightArrow />
      </NavigationButton>
    );
  }
};

CreateAlgorithmNavigationButton.propTypes = {};

export default CreateAlgorithmNavigationButton;
