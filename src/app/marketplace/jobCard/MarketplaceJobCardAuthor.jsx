import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

import { Box, Column, Grid, Header, Row } from "@kyokan/kyokan-ui";

const AuthorName = styled.p`
  padding: 0 8px;
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.2px;
  color: #0d2957;
`;

const JobAuthor = props => {
  const { img, name } = props;

  const AuthorAvatarWrapper = styled.div`
    width: 28px;
    height: 28px;
    margin: 18px 0 ;
    border-radius: 50%;
    background-image: url("${img}");
    background-size: cover;
    background-position: center;
  `;

  return (
    <Row nogutter align="center">
      <AuthorAvatarWrapper />
      <AuthorName>{name}</AuthorName>
    </Row>
  );
};

JobAuthor.propTypes = {};

export default JobAuthor;
