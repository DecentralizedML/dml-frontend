import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

import { Row } from "@kyokan/kyokan-ui";
import { AuthorName } from "./UI/index";

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
