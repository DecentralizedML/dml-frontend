import React from "react";
// import PropTypes from 'prop-types';

import DMLSiteHeader from "../dml-site-header";
import { MainContainer, TitleHeaderContainer, TitleHeaderText } from "./UI";
import CreateAlgorithmSidebarContainer from "./sidebar/CreateAlgorithmSidebarContainer";
import CreateAlgorithmMainContainer from "./main/CreateAlgorithmMainContainer";

const CreateAlgorithm = props => {
  return (
    <div>
      <DMLSiteHeader
        marketplace
        bounties
        algorithmsActive
        createAlgorithm
        accountDropdown
      />
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
