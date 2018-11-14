import React from "react";
// import PropTypes from 'prop-types';

import DMLSiteHeader from "../dml-site-header";
import { MainContainer, TitleHeaderContainer, TitleHeaderText } from "./UI";
import CreateAlgorithmSidebar from "./sidebar/CreateAlgorithmSidebar";
import CreateAlgorithmMain from "./main/CreateAlgorithmMain";

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
        <CreateAlgorithmSidebar />
        <CreateAlgorithmMain
          step={props.match.params.step}
          saveNewAlgorithmData={props.saveNewAlgorithmData}
        />
      </MainContainer>
    </div>
  );
};

CreateAlgorithm.propTypes = {};

export default CreateAlgorithm;
