import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

import { Box, Column, Grid, Header, Row } from "@kyokan/kyokan-ui";

const CardTitle = styled.p`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0;
  letter-spacing: 0.2px;
  color: #0d2957;
`;

const JobTitle = props => {
  const { title } = props;
  return <CardTitle>{title}</CardTitle>;
};

JobTitle.propTypes = {};

export default JobTitle;
