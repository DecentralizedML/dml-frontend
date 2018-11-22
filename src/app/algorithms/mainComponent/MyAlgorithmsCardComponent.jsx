import React from "react";
// import PropTypes from 'prop-types';

import {
  Row,
  Column,
  Card,
  CardTitle,
  VerticalDivider,
  KPITitle,
  AlgoPriceNumber,
  DMLLogoBlue,
  DMLWrapper,
  DMLLogo,
  DMLText,
  PriceContainer,
  EditButton
} from "../UI";

import StatusLabel from "./MyAlgorithmStatusLabelComponent";

const MyAlgorithmsCard = props => {
  return (
    <Card>
      <Column
        verticalAlign="space-evenly"
        style={{
          height: "100%",
          width: "310px"
        }}
      >
        <CardTitle>{props.title}</CardTitle>
        <StatusLabel label={props.status} onClick={props.onClick} />
      </Column>
      <VerticalDivider />
      <Column
        verticalAlign="space-evenly"
        style={{
          height: "100%"
        }}
      >
        <Row horizontalAlign="space-between" style={{ width: "105px" }}>
          <KPITitle>Earnings</KPITitle>
          <Row>
            <AlgoPriceNumber>{props.price}</AlgoPriceNumber>
            <DMLLogoBlue style={{ width: "12px", height: "12px", margin: 0 }} />
          </Row>
        </Row>
        <Row>
          <PriceContainer>{props.earnings}</PriceContainer>
          <DMLWrapper
            style={{
              borderTopLeftRadius: "none",
              borderBottomLeftRadius: "none"
            }}
          >
            <DMLLogo />
            <DMLText>DML</DMLText>
          </DMLWrapper>
        </Row>
      </Column>
      <EditButton onClick={props.onClick}>Edit</EditButton>
    </Card>
  );
};

MyAlgorithmsCard.propTypes = {};

export default MyAlgorithmsCard;
