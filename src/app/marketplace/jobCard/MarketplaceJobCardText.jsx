import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

import { Box, Column, Grid, Header, Row } from "@kyokan/kyokan-ui";

const CardText = styled.p`
  font-family: Barlow;
  font-size: 15px;
  line-height: 1.47;
  margin: 0;
  letter-spacing: 0.2px;
  color: #6c80a0;
`;

const JobText = props => {
  const { text } = props;
  return <CardText>{text}</CardText>;
};

JobText.propTypes = {};

export default JobText;
