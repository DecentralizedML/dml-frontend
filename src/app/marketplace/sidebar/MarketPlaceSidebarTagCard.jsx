import React from "react";
import { Column, Grid, Row, Header } from "@kyokan/kyokan-ui";

import { TagCard, TagTitle } from "./UI/index";

const Tag = props => {
  const { title } = props;
  return (
    <TagCard>
      <TagTitle>{title}</TagTitle>
    </TagCard>
  );
};

Tag.propTypes = {};

export default Tag;
