import React from "react";
// import PropTypes from 'prop-types';

import { MainContainer, TitleHeaderContainer, TitleHeaderText } from "./UI";
import CreateAlgorithmSidebarContainer from "./sidebar/CreateAlgorithmSidebarContainer";
import CreateAlgorithmMainContainer from "./main/CreateAlgorithmMainContainer";

const CreateAlgorithm = props => {
  return (
    <div>
      <TitleHeaderContainer>
        <TitleHeaderText>Create Algorithm</TitleHeaderText>
      </TitleHeaderContainer>
      <MainContainer>
        <CreateAlgorithmSidebarContainer />
        <CreateAlgorithmMainContainer />
      </MainContainer>
    </div>
  );
};

CreateAlgorithm.propTypes = {};

export default CreateAlgorithm;
