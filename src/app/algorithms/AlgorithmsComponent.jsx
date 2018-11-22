import React from "react";
// import PropTypes from 'prop-types';

import DMLSiteHeader from "../dml-site-header";
import MyAlgorithmsSidebarComponent from "./sidebarComponent/MyAlgorithmsSidebarComponent";
import MyAlgorithmsMainComponent from "./mainComponent/MyAlgorithmsMainComponent";
import { MyAlgorithmsContainer } from "./UI";

const Algorithms = props => {
  return (
    <div>
      <DMLSiteHeader
        marketplace
        bounties
        algorithmsActive
        createAlgorithm
        accountDropdown
      />
      <MyAlgorithmsContainer>
        <MyAlgorithmsSidebarComponent />
        <MyAlgorithmsMainComponent />
      </MyAlgorithmsContainer>
    </div>
  );
};

Algorithms.propTypes = {};

export default Algorithms;
