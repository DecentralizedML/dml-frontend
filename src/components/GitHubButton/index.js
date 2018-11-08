import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './github_logo.svg';

const StyledGitHubOAuth = styled.button`
    font-family      : ${ (props) => props.theme.githubOAuthFontFamily };
    color            : #000;
    display          : flex;
    flex-flow        : row nowrap;
    align-items      : center;
    background-color : #eff3f6;
    background-image : linear-gradient(-180deg,#fafbfc 0%,#eff3f6 90%);
    border-radius    : 4px;
    border           : 1px solid rgba(0, 0, 0, 0.15);
    padding          : 0.5rem 1rem;
    cursor           : pointer;

    &:hover {
      background-color    : #e6ebf1;
      background-image    : linear-gradient(-180deg,#f0f3f6 0%,#e6ebf1 90%);
      background-position : -0.5em;
      border-color        : rgba(27,31,35,0.35);
    }

    &:active {
      background-color : #e9ecef;
      background-image : none;
      border-color     : rgba(27,31,35,0.35);
    }

    &:focus {
      outline : none;
    }
  `;

const StyledDiv = styled.div`
    margin-left: 0.5rem;
  `;

/**
 * A module that allows the user to connect/disconnect to their GitHub account.
 */
const GitHubOAuth = (props) => {


  return (
    <StyledGitHubOAuth
      className={props.className}
      onClick={props.onClick}
    >
      <img
        src={logo}
        alt="GitHub logo"
      />
      <StyledDiv>Connect to GitHub</StyledDiv>
    </StyledGitHubOAuth>
  );
};

GitHubOAuth.propTypes = {
  /** Class name for top-level wrapper **/
  className: PropTypes.string,

  /** A boolean that triggers logged-in formatting */
  isLoggedIn: PropTypes.bool,

  /** The url of the avatar image for the user */
  avatar: PropTypes.string,

  /** The username text to be displayed */
  username: PropTypes.string,

  /** A callback that is fired when the close button is clicked */
  onCancel: PropTypes.func,

  /** A callback that is fired when the GitHub OAuth button is clicked */
  onClick: PropTypes.func,
};

GitHubOAuth.defaultProps = {
  className: '',
};

/** @component */
export default GitHubOAuth;
