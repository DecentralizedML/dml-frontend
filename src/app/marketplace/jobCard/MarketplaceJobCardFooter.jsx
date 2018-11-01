import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

import { Box, Column, Grid, Header, Row } from "@kyokan/kyokan-ui";

const NumberValue = styled.p`
  width: 36px;
  height: 21px;
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: #8194b2;
`;

const DownloadIcon = styled.img`
  width: 14px;
  height: 14px;
  object-fit: contain;
  padding-right: 6px;
`;

const Star = styled.img`
  width: 14px;
  height: 14px;
  object-fit: contain;
`;

const CardFooter = props => {
  const { downloads, averageRating, totalRatings, rewardValue } = props;

  const roundedDownloads =
    downloads > 1000 ? `${Math.round(downloads / 100) / 10}k` : downloads;

  const renderStars = averageRating => {
    const starsArray = [];
    for (let i = 0; i < 5; i++) {
      if (averageRating - i < 0.25) {
        starsArray.push("emptyStarIcon");
      } else if (averageRating - i < 0.75) {
        starsArray.push("halfStarIcon");
      } else {
        starsArray.push("fullStarIcon");
      }
    }
    return starsArray;
  };

  // TODO:
  // Implement columns to seperate the values
  // Implement DML button with value
  return (
    <Row nogutter align="center">
      <DownloadIcon src="/downloadIcon.svg" />
      <NumberValue>{roundedDownloads}</NumberValue>
      {renderStars(averageRating).map((star, index) => {
        return <Star key={index} src={`/${star}.svg`} />;
      })}
      <NumberValue>{`(${totalRatings})`}</NumberValue>
    </Row>
  );
};

CardFooter.propTypes = {};

export default CardFooter;
