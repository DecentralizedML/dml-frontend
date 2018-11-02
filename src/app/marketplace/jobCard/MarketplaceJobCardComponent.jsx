import React from "react";
// import PropTypes from 'prop-types';

import { Card, CardContainer } from "./UI/index";
import CardTitle from "./MarketplaceJobCardTitle";
import CardText from "./MarketplaceJobCardText";
import JobAuthor from "./MarketplaceJobCardAuthor";
import CardFooter from "./MarketplaceJobCardFooter";

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
