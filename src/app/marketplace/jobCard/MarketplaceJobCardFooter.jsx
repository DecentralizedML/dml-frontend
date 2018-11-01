import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

import { Box, Column, Grid, Header, Row } from "@kyokan/kyokan-ui";

const NumberValue = styled.p`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: #8194b2;
  margin: 0;
  padding-left: 6px;
`;

const DownloadIcon = styled.img`
  width: 14px;
  height: 14px;
  object-fit: contain;
`;

const Star = styled.img`
  width: 14px;
  height: 14px;
  margin: 0 1px;
  object-fit: contain;
`;

const RewardRectangle = styled.div`
  width: 30%;
  height: 26px;
  background-color: #ffffff;
  border: solid 2px #b1ccf8;
  border-right: none;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`;

const DMLRectangle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 26px;
  background-color: #3c81ed;
  border: solid 2px #3c81ed;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;

const DMLOutline = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  width: 100%;
  height: 26px;
`;

const RewardValue = styled.div`
  font-family: Barlow;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.41;
  text-align: center;
  color: #0d2957;
`;

const DMLLogo = styled.img`
  width: 12px;
  height: 12px;
  object-fit: contain;
  padding-right: 5px;
`;

const DMLText = styled.div`
  height: 16px;
  font-family: Barlow;
  font-size: 12px;
  font-weight: 600;
  // line-height: 1.33;
  letter-spacing: 0.5px;
  color: #ffffff;
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
