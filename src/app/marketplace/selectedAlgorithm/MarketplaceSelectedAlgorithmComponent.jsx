import React from "react";
import { Row, Column } from "@kyokan/kyokan-ui";
import {
  Background,
  Card,
  CloseIconContainer,
  CardContainer,
  CloseIcon,
  PriceWrapper,
  PurchaseButton,
  PriceValue,
  DMLLogoWrapper,
  DMLLogo,
  DMLText
} from "./UI";
import CardTitle from "../jobCard/MarketplaceJobCardTitle";
import CardText from "../jobCard/MarketplaceJobCardText";
import JobAuthor from "../jobCard/MarketplaceJobCardAuthor";
const SelectedAlgorithm = ({
  handleClose,
  title,
  text,
  fullName,
  img,
  priceValue
}) => {
  return (
    <Background>
      <Card>
        <CardContainer>
          <Row>
            <Column xl={8}>
              <CardTitle title={title} />
              <CardText text={text} />
              <JobAuthor img={img} name={fullName} />
            </Column>
            <Column xl={4}>
              <PriceWrapper>
                <PriceValue>{priceValue}</PriceValue>
                <DMLLogoWrapper>
                  <DMLLogo />
                  <DMLText>DML</DMLText>
                </DMLLogoWrapper>
              </PriceWrapper>
              <PurchaseButton>Purchase</PurchaseButton>
            </Column>
            <CloseIconContainer onClick={handleClose}>
              <CloseIcon />
            </CloseIconContainer>
          </Row>
        </CardContainer>
      </Card>
    </Background>
  );
};

SelectedAlgorithm.propTypes = {};

export default SelectedAlgorithm;
