import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from 'react-markdown';

const BountyDescription = props => {
  return (
    <ReactMarkdown
      source={props.content}
    />
  )
}

BountyDescription.propTypes = {
  content: PropTypes.string
}

export default BountyDescription;
