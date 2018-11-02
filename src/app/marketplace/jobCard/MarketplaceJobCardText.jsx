import React from "react";
// import PropTypes from 'prop-types';
import { CardText } from "./UI/index";

const JobText = props => {
  const { text } = props;
  return <CardText>{text}</CardText>;
};

JobText.propTypes = {};

export default JobText;
