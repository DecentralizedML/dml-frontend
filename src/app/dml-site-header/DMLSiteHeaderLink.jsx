import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

const DMLSiteHeaderLink = (props) => {
  const StyledHeaderItem = styled.div`
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
      color            : white;
      background-color : rgb(31, 42, 59);

      border-bottom: 5px solid rgb(60, 129, 232);
    }

    &:hover {
      cursor           : pointer;
      background-color : rgb(31, 42, 59);
    }
  `;

  const classes = classnames({
    active: props.active,
  });

  return (
    <StyledHeaderItem
      className={classes}
      onClick={props.onClick}
    >
      {props.text}
    </StyledHeaderItem>
  );
};

DMLSiteHeaderLink.defaultProps = {
  active  : false,
  onClick : () =>  {},
};

DMLSiteHeaderLink.propTypes = {
  text    : PropTypes.string.isRequired,
  active  : PropTypes.bool,
  onClick : PropTypes.func,
};

export default DMLSiteHeaderLink;
