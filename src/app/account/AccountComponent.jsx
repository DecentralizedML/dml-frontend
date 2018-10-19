import React from 'react';
import PropTypes from 'prop-types';

const AccountComponent = (props) => {
  const {
    firstName,
    lastName,
  } = props.userData;

  return (
    <div>
      {lastName}, {firstName}
    </div>
  );
};

AccountComponent.propTypes = {
  userData : PropTypes.object.isRequired,
};

export default AccountComponent;
