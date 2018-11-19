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
        style={{
          justifyContent: "space-between",
          height: "100%",
          width: "300px"
        }}
      >
        <CardTitle>{props.title}</CardTitle>
        <StatusLabel label={props.status} />
      </Column>
      <VerticalDivider />
      <Column
        style={{
          justifyContent: "space-evenly",
          height: "100%"
        }}
      >
        <Row style={{ justifyContent: "space-between", width: "108px" }}>
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
      <EditButton>Edit</EditButton>
    </Card>
  );
};

MyAlgorithmsCard.propTypes = {};

export default MyAlgorithmsCard;
