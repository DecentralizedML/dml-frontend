import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

import { Box, Column, Grid, Header, Row } from "@kyokan/kyokan-ui";

const Downloads = styled.p`
  width: 36px;
  height: 21px;
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: #8194b2;
`;

const CardFooter = props => {
  const { downloads, averageRating, totalRatings, priceValue } = props;

  const roundedDownloads =
    downloads > 1000 ? `${Math.round(downloads / 100) / 10}k` : downloads;

  console.log(roundedDownloads);
  return (
    <Row nogutter align="center">
      XX
      <Downloads>{roundedDownloads}</Downloads>
    </Row>
  );
};

CardFooter.propTypes = {};

export default CardFooter;
