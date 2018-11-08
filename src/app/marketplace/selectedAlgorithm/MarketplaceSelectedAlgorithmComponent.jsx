import React from "react";
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
  DMLText,
  Left,
  Right
} from "./UI";
import CardTitle from "../jobCard/MarketplaceJobCardTitle";
import CardText from "../jobCard/MarketplaceJobCardText";
import JobAuthor from "../jobCard/MarketplaceJobCardAuthor";
import DemoUploadImage from "./MarketplaceSelectedAlgorithmUploadImage";

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
          <Left>
            <CardTitle title={title} />
            <CardText text={text} />
            <JobAuthor img={img} name={fullName} />
          </Left>
          <Right>
            <PriceWrapper>
              <PriceValue>{priceValue}</PriceValue>
              <DMLLogoWrapper>
                <DMLLogo />
                <DMLText>DML</DMLText>
              </DMLLogoWrapper>
            </PriceWrapper>
            <PurchaseButton>Purchase</PurchaseButton>
          </Right>
          <CloseIconContainer onClick={handleClose}>
            <CloseIcon />
          </CloseIconContainer>
        </CardContainer>
        <DemoUploadImage />
      </Card>
    </Background>
  );
};

SelectedAlgorithm.propTypes = {};

export default SelectedAlgorithm;
