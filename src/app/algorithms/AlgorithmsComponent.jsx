import React from "react";
// import PropTypes from 'prop-types';
import MyAlgorithmsSidebarComponent from "./sidebarComponent/MyAlgorithmsSidebarComponent";
import MyAlgorithmsMainComponent from "./mainComponent/MyAlgorithmsMainComponent";
import { MyAlgorithmsContainer } from "./UI";

const Algorithms = props => {
  return (
    <MyAlgorithmsContainer>
      <MyAlgorithmsSidebarComponent />
      <MyAlgorithmsMainComponent />
    </MyAlgorithmsContainer>
  );
};

Algorithms.propTypes = {};

export default Algorithms;
