import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

const DMLSiteSubheaderLink = (props) => {
  const StyledSubheaderItem = styled.div`
    flex            : 1;
    display         : flex;
    align-items     : center;
    justify-content : center;

    height          : 100%;

    padding         : 0 30px;
    box-sizing      : border-box;

    font-family     : 'Barlow';
    font-size       : 15px;
    letter-spacing  : 0.5px;
    color           : rgb(173, 188, 212);

    border-bottom: 5px solid transparent;

    &.active {
      color: rgb(31, 42, 59);

      border-bottom: 5px solid rgb(60, 129, 232);
    }

    &:hover {
      color            : rgb(31, 42, 59);
      cursor           : pointer;
      background-color : lightgray;
    }
  `;

  const classes = classnames({
    active: props.active,
  });

  return (
    <StyledSubheaderItem
      className={classes}
      onClick={props.onClick}
    >
      {props.text}
    </StyledSubheaderItem>
  );
};

DMLSiteSubheaderLink.defaultProps = {
  active  : false,
  onClick : () =>  {},
};

DMLSiteSubheaderLink.propTypes = {
  text    : PropTypes.string.isRequired,
  active  : PropTypes.bool,
  onClick : PropTypes.func,
};

export default DMLSiteSubheaderLink;
