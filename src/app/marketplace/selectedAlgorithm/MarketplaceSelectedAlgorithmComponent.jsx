import React from "react";
import { Row } from "@kyokan/kyokan-ui";
import { Background, Card, CloseButton, CardContainer } from "./UI";

const SelectedAlgorithm = ({ handleClose, show, children }) => {
  return (
    <Background>
      <Card>
        <CardContainer>
          {children}
          <CloseButton onClick={handleClose}>x</CloseButton>
        </CardContainer>
      </Card>
    </Background>
  );
};

SelectedAlgorithm.propTypes = {};

export default SelectedAlgorithm;
