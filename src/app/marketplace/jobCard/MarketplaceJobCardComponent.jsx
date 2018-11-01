import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

import { Box, Column, Grid, Header, Row } from "@kyokan/kyokan-ui";
import CardTitle from "./MarketplaceJobCardTitle";
import CardText from "./MarketplaceJobCardText";
import JobAuthor from "./MarketplaceJobCardAuthor";
import CardFooter from "./MarketplaceJobCardFooter";

const Card = styled.div`
  height: auto;
  width: 372px;
  border-radius: 2px;
  margin: 15px;
  box-shadow: 0 1px 6px 0 rgba(4, 37, 86, 0.04), 0 1px 0 0 rgba(4, 37, 86, 0.04);
  background-color: #ffffff;
`;

const CardContainer = styled.div`
  margin: 24px;
`;

const JobCard = props => {
  const {
    title,
    text,
    authorName,
    authorImg,
    downloads,
    averageRating,
    totalRatings,
    rewardValue
  } = props;
  const renderCard = () => {
    return (
      <Card>
        <CardContainer>
          <CardTitle title={title} />
          <CardText text={text} />
          <JobAuthor img={authorImg} name={authorName} />
          <CardFooter
            downloads={downloads}
            averageRating={averageRating}
            totalRatings={totalRatings}
            rewardValue={rewardValue}
          />
        </CardContainer>
      </Card>
    );
  };

  return renderCard();
};

JobCard.propTypes = {};

export default JobCard;
