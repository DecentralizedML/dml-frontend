import React from "react";

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
