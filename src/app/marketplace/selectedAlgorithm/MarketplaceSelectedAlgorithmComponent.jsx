import React from "react";
import { Row } from "@kyokan/kyokan-ui";
import { Background, Card, CloseButton, CardContainer, CloseIcon } from "./UI";

const SelectedAlgorithm = ({ handleClose, show, children }) => {
  return (
    <Background>
      <Card>
        <CardContainer>
          {children}
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
        </CardContainer>
      </Card>
    </Background>
  );
};

SelectedAlgorithm.propTypes = {};

export default SelectedAlgorithm;
