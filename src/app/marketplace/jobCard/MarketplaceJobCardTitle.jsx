import React from "react";
// import PropTypes from 'prop-types';

import { CardTitle } from "./UI/index";

const JobTitle = props => {
  const { title } = props;
  return <CardTitle>{title}</CardTitle>;
};

JobTitle.propTypes = {};

export default JobTitle;
