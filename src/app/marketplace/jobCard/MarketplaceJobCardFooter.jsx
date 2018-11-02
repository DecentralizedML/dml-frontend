import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

import { Box, Column, Grid, Header, Row } from "@kyokan/kyokan-ui";
import {
  NumberValue,
  DownloadIcon,
  Star,
  RewardRectangle,
  DMLRectangle,
  DMLOutline,
  RewardValue,
  DMLLogo,
  DMLText
} from "./UI/index";

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

  return (
    <Row nogutter align="center">
      <Column xl={3}>
        <Row nogutter align="center">
          <DownloadIcon src="/downloadIcon.svg" />
          <NumberValue>{roundedDownloads}</NumberValue>
        </Row>
      </Column>
      <Column xl={5}>
        <Row nogutter align="center">
          {renderStars(averageRating).map((star, index) => {
            return <Star key={index} src={`/${star}.svg`} />;
          })}
          <NumberValue>{`(${totalRatings})`}</NumberValue>
        </Row>
      </Column>
      <Column xl={4}>
        <Row nogutter align="center">
          <DMLOutline onClick={() => console.log("Clicked")}>
            <RewardRectangle>
              <RewardValue>{rewardValue}</RewardValue>
            </RewardRectangle>
            <DMLRectangle>
              <DMLLogo src="/iconLogo.svg" />
              <DMLText>DML</DMLText>
            </DMLRectangle>
          </DMLOutline>
        </Row>
      </Column>
    </Row>
  );
};

CardFooter.propTypes = {};

export default CardFooter;
