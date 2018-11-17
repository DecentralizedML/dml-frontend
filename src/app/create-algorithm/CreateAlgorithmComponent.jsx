import React from "react";
// import PropTypes from 'prop-types';

import { MainContainer, TitleHeaderContainer, TitleHeaderText } from "./UI";
import CreateAlgorithmSidebar from "./sidebar/CreateAlgorithmSidebar";
import CreateAlgorithmMain from "./CreateAlgorithMain";

const CreateAlgorithm = props => {
  return (
    <div>
      <TitleHeaderContainer>
        <TitleHeaderText>Create Algorithm</TitleHeaderText>
      </TitleHeaderContainer>
      <MainContainer>
        <CreateAlgorithmSidebar />
        <CreateAlgorithmMain />
      </MainContainer>
    </div>
  );
};

CreateAlgorithm.propTypes = {};

export default CreateAlgorithm;
