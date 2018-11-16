import React from "react";

import {
  NavigationButton,
  NavigationButtonText,
  WhiteTick,
  RightArrow,
  LeftArrow
} from "../UI";

import { SaveProgressButton } from "../../sidebar/UI";

const CreateAlgorithmNavigationButton = props => {
  const { type, onClick, disabled } = props;
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
  } else if (type === "next") {
    return (
      <NavigationButton onClick={onClick} disabled={disabled}>
        <NavigationButtonText>Next Step</NavigationButtonText>
        <RightArrow />
      </NavigationButton>
    );
  } else if (type === "submit") {
    return (
      <NavigationButton onClick={onClick} disabled={disabled}>
        <NavigationButtonText>Submit</NavigationButtonText>
        <WhiteTick />
      </NavigationButton>
    );
  } else {
    return <div>Button type not defined</div>;
  }
};

CreateAlgorithmNavigationButton.propTypes = {};

export default CreateAlgorithmNavigationButton;
